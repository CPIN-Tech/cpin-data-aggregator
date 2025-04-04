var isArray = Array.isArray;
var objectKeys = Object.keys;
var json = JSON;
export default function stableStringify(obj: any, opts?: any) {
  if (!opts) opts = {};
  if (typeof opts === 'function') opts = { cmp: opts };
  var space = opts.space || '';
  if (typeof space === 'number') space = Array(space + 1).join(' ');
  var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;
  var replacer =
    opts.replacer ||
    function (_key: string, value: any) {
      return value;
    };
  var cmp =
    opts.cmp &&
    (function (f) {
      return function (node: any) {
        return function (a: any, b: any) {
          var aobj = { key: a, value: node[a] };
          var bobj = { key: b, value: node[b] };
          return f(aobj, bobj);
        };
      };
    })(opts.cmp);
  var seen: any[] = [];
  return (function stringify(parent: any, key: any, node: any, level: number): any {
    var indent = space ? '\n' + new Array(level + 1).join(space) : '';
    var colonSeparator = space ? ': ' : ':';
    if (node && node.toJSON && typeof node.toJSON === 'function') {
      node = node.toJSON();
    }
    node = replacer.call(parent, key, node);
    if (node === undefined) {
      return;
    }
    if (typeof node !== 'object' || node === null) {
      return json.stringify(node);
    }
    if (isArray(node)) {
      var out = [];
      for (var i = 0; i < node.length; i++) {
        var item = stringify(node, i, node[i], level + 1) || json.stringify(null);
        out.push(indent + space + item);
      }
      return '[' + out.join(',') + indent + ']';
    } else {
      if (seen.indexOf(node) !== -1) {
        if (cycles) return json.stringify('__cycle__');
        throw new TypeError('Converting circular structure to JSON');
      } else seen.push(node);
      var keys = objectKeys(node).sort(cmp && cmp(node));
      var out = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i] as any;
        var value = stringify(node, key, node[key], level + 1);
        if (!value) continue;
        var keyValue = json.stringify(key) + colonSeparator + value;
        out.push(indent + space + keyValue);
      }
      seen.splice(seen.indexOf(node), 1);
      return '{' + out.join(',') + indent + '}';
    }
  })({ '': obj }, '', obj, 0);
}
