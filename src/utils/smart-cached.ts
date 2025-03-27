import { type LimitFunction } from 'p-limit';
import stableStringify from './stable-stringify';
import { Loader } from 'layered-loader';
import fs from 'fs/promises';
import { createHash } from 'node:crypto';

interface SmartCacheOptions {
  cacheSeconds?: number;
  cacheSize?: number;
  autoRefresh?: boolean;
  limitFunction?: LimitFunction;
  fileBackupName?: string;
}

function sha256(content: string) {
  return createHash('sha256').update(content).digest('hex');
}
function getFilePath(fileBackupName: string, key?: string) {
  if (key) {
    const hash = sha256(key);
    return `./data/cache/${fileBackupName}/${hash}.json`;
  } else {
    return `./data/cache/${fileBackupName}/`;
  }
}

export function makeSmartCached<InputType, ReturnType>(
  func: (params: InputType) => Promise<ReturnType>,
  options: SmartCacheOptions = {}
) {
  let {
    cacheSeconds = 60,
    cacheSize = 1_000,
    autoRefresh = false,
    limitFunction,
    fileBackupName,
  } = options;

  if (cacheSeconds === Infinity) {
    autoRefresh = false;
  }

  const dataLoader = limitFunction
    ? (p?: InputType) => limitFunction(() => func(p!))
    : (p?: InputType) => func(p!);

  let dataLoaderWithFileBackup: (key: string, p?: InputType) => Promise<ReturnType>;
  if (fileBackupName) {
    const jobPromises: Record<string, Promise<ReturnType>> = {};
    dataLoaderWithFileBackup = async (key: string, p?: InputType) => {
      if (!jobPromises[key]) {
        jobPromises[key] = dataLoader(p).then(async (data) => {
          await fs.mkdir(getFilePath(fileBackupName), { recursive: true });
          await fs.writeFile(getFilePath(fileBackupName, key), JSON.stringify(data));
          delete jobPromises[key];
          return data;
        });
      }
      let fileData: ReturnType | undefined;
      try {
        const fileContent = await fs.readFile(getFilePath(fileBackupName, key), 'utf8');
        fileData = JSON.parse(fileContent) as ReturnType;
      } catch (err) {
        console.log(fileBackupName, 'not found');
        fileData = undefined;
      }
      if (fileData === undefined) {
        return jobPromises[key];
      } else {
        return fileData;
      }
    };
  }

  const loader = new Loader<ReturnType, InputType>({
    inMemoryCache: {
      cacheType: 'lru-object',
      ttlInMsecs: cacheSeconds * 2 * 1000,
      ttlLeftBeforeRefreshInMsecs: cacheSeconds * 1000,
      maxItems: cacheSize,
    },

    dataSourceGetOneFn: async (key: string, params?: InputType) => {
      if (fileBackupName) {
        return dataLoaderWithFileBackup(key, params);
      }
      return dataLoader(params);
    },
  });

  const refresherTimeouts: Record<string, NodeJS.Timeout | null> = {};
  let activeTimeouts = 0;
  return function getter(params: InputType): Promise<ReturnType | null | undefined> {
    const key = stableStringify(params);
    if (refresherTimeouts[key]) {
      clearTimeout(refresherTimeouts[key]);
      activeTimeouts--;
    }
    if (autoRefresh && activeTimeouts < cacheSize * 0.8) {
      refresherTimeouts[key] = setTimeout(
        () => {
          refresherTimeouts[key] = null;
          activeTimeouts--;
          getter(params);
        },
        Math.floor(cacheSeconds * 1.5 * 1000)
      );
      activeTimeouts++;
    }

    return loader.get(key, params);
  };
}
