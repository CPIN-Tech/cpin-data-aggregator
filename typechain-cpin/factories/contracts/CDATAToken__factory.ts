/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CDATAToken,
  CDATATokenInterface,
} from "../../contracts/CDATAToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b506040516200193338038062001933833981016040819052620000359162000306565b604051806040016040528060098152602001684350494e204441544160b81b81525080604051806040016040528060018152602001603160f81b815250604051806040016040528060098152602001684350494e204441544160b81b81525060405180604001604052806005815260200164434441544160d81b8152508160039081620000c39190620003df565b506004620000d28282620003df565b50620000e491508390506006620001cf565b61012052620000f5816007620001cf565b61014052815160208084019190912060e052815190820120610100524660a0526200018360e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506200019a60008262000208565b50620001c77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68262000208565b505062000521565b6000602083511015620001ef57620001e783620002ba565b905062000202565b81620001fc8482620003df565b5060ff90505b92915050565b60008281526005602090815260408083206001600160a01b038516845290915281205460ff16620002b15760008381526005602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620002683390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000202565b50600062000202565b600080829050601f81511115620002f1578260405163305a27a960e01b8152600401620002e89190620004ab565b60405180910390fd5b8051620002fe82620004fc565b179392505050565b6000602082840312156200031957600080fd5b81516001600160a01b03811681146200033157600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200036357607f821691505b6020821081036200038457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003da576000816000526020600020601f850160051c81016020861015620003b55750805b601f850160051c820191505b81811015620003d657828155600101620003c1565b5050505b505050565b81516001600160401b03811115620003fb57620003fb62000338565b62000413816200040c84546200034e565b846200038a565b602080601f8311600181146200044b5760008415620004325750858301515b600019600386901b1c1916600185901b178555620003d6565b600085815260208120601f198616915b828110156200047c578886015182559484019460019091019084016200045b565b50858210156200049b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352835180602085015260005b81811015620004db57858101830151858201604001528201620004bd565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620003845760001960209190910360031b1b16919050565b60805160a05160c05160e0516101005161012051610140516113b76200057c6000396000610b1b01526000610aee015260006109bd01526000610995015260006108f00152600061091a0152600061094401526113b76000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806370a08231116100c3578063a217fddf1161007c578063a217fddf146102df578063a9059cbb146102e7578063d505accf146102fa578063d53913931461030d578063d547741f14610334578063dd62ed3e1461034757600080fd5b806370a082311461025a57806379cc6790146102835780637ecebe001461029657806384b0196e146102a957806391d14854146102c457806395d89b41146102d757600080fd5b80632f2ff15d116101155780632f2ff15d146101f5578063313ce5671461020a5780633644e5151461021957806336568abe1461022157806340c10f191461023457806342966c681461024757600080fd5b806301ffc9a71461015d57806306fdde0314610185578063095ea7b31461019a57806318160ddd146101ad57806323b872dd146101bf578063248a9ca3146101d2575b600080fd5b61017061016b36600461106e565b610380565b60405190151581526020015b60405180910390f35b61018d6103b7565b60405161017c91906110e5565b6101706101a8366004611114565b610449565b6002545b60405190815260200161017c565b6101706101cd36600461113e565b610461565b6101b16101e036600461117a565b60009081526005602052604090206001015490565b610208610203366004611193565b610485565b005b6040516012815260200161017c565b6101b16104b0565b61020861022f366004611193565b6104bf565b610208610242366004611114565b6104f7565b61020861025536600461117a565b61052b565b6101b16102683660046111bf565b6001600160a01b031660009081526020819052604090205490565b610208610291366004611114565b610538565b6101b16102a43660046111bf565b610551565b6102b161056f565b60405161017c97969594939291906111da565b6101706102d2366004611193565b6105b5565b61018d6105e0565b6101b1600081565b6101706102f5366004611114565b6105ef565b610208610308366004611273565b6105fd565b6101b17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610208610342366004611193565b61073c565b6101b16103553660046112e6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b14806103b157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103c690611310565b80601f01602080910402602001604051908101604052809291908181526020018280546103f290611310565b801561043f5780601f106104145761010080835404028352916020019161043f565b820191906000526020600020905b81548152906001019060200180831161042257829003601f168201915b5050505050905090565b600033610457818585610761565b5060019392505050565b60003361046f85828561076e565b61047a8585856107e6565b506001949350505050565b6000828152600560205260409020600101546104a081610845565b6104aa838361084f565b50505050565b60006104ba6108e3565b905090565b6001600160a01b03811633146104e85760405163334bd91960e11b815260040160405180910390fd5b6104f28282610a0e565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661052181610845565b6104f28383610a7b565b6105353382610ab1565b50565b61054382338361076e565b61054d8282610ab1565b5050565b6001600160a01b0381166000908152600860205260408120546103b1565b600060608060008060006060610583610ae7565b61058b610b14565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103c690611310565b6000336104578185856107e6565b834211156106265760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886106738c6001600160a01b0316600090815260086020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006106ce82610b41565b905060006106de82878787610b6e565b9050896001600160a01b0316816001600160a01b031614610725576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161061d565b6107308a8a8a610761565b50505050505050505050565b60008281526005602052604090206001015461075781610845565b6104aa8383610a0e565b6104f28383836001610b9c565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146104aa57818110156107d757604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161061d565b6104aa84848484036000610b9c565b6001600160a01b03831661081057604051634b637e8f60e11b81526000600482015260240161061d565b6001600160a01b03821661083a5760405163ec442f0560e01b81526000600482015260240161061d565b6104f2838383610c71565b6105358133610d9b565b600061085b83836105b5565b6108db5760008381526005602090815260408083206001600160a01b03861684529091529020805460ff191660011790556108933390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016103b1565b5060006103b1565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561093c57507f000000000000000000000000000000000000000000000000000000000000000046145b1561096657507f000000000000000000000000000000000000000000000000000000000000000090565b6104ba604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6000610a1a83836105b5565b156108db5760008381526005602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016103b1565b6001600160a01b038216610aa55760405163ec442f0560e01b81526000600482015260240161061d565b61054d60008383610c71565b6001600160a01b038216610adb57604051634b637e8f60e11b81526000600482015260240161061d565b61054d82600083610c71565b60606104ba7f00000000000000000000000000000000000000000000000000000000000000006006610dd4565b60606104ba7f00000000000000000000000000000000000000000000000000000000000000006007610dd4565b60006103b1610b4e6108e3565b8360405161190160f01b8152600281019290925260228201526042902090565b600080600080610b8088888888610e7f565b925092509250610b908282610f4e565b50909695505050505050565b6001600160a01b038416610bc65760405163e602df0560e01b81526000600482015260240161061d565b6001600160a01b038316610bf057604051634a1406b160e11b81526000600482015260240161061d565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156104aa57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c6391815260200190565b60405180910390a350505050565b6001600160a01b038316610c9c578060026000828254610c91919061134a565b90915550610d0e9050565b6001600160a01b03831660009081526020819052604090205481811015610cef5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161061d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610d2a57600280548290039055610d49565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d8e91815260200190565b60405180910390a3505050565b610da582826105b5565b61054d5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161061d565b606060ff8314610dee57610de783611007565b90506103b1565b818054610dfa90611310565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2690611310565b8015610e735780601f10610e4857610100808354040283529160200191610e73565b820191906000526020600020905b815481529060010190602001808311610e5657829003601f168201915b505050505090506103b1565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610eba5750600091506003905082610f44565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610f0e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610f3a57506000925060019150829050610f44565b9250600091508190505b9450945094915050565b6000826003811115610f6257610f6261136b565b03610f6b575050565b6001826003811115610f7f57610f7f61136b565b03610f9d5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610fb157610fb161136b565b03610fd25760405163fce698f760e01b81526004810182905260240161061d565b6003826003811115610fe657610fe661136b565b0361054d576040516335e2f38360e21b81526004810182905260240161061d565b6060600061101483611046565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b157604051632cd44ac360e21b815260040160405180910390fd5b60006020828403121561108057600080fd5b81356001600160e01b03198116811461109857600080fd5b9392505050565b6000815180845260005b818110156110c5576020818501810151868301820152016110a9565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000611098602083018461109f565b80356001600160a01b038116811461110f57600080fd5b919050565b6000806040838503121561112757600080fd5b611130836110f8565b946020939093013593505050565b60008060006060848603121561115357600080fd5b61115c846110f8565b925061116a602085016110f8565b9150604084013590509250925092565b60006020828403121561118c57600080fd5b5035919050565b600080604083850312156111a657600080fd5b823591506111b6602084016110f8565b90509250929050565b6000602082840312156111d157600080fd5b611098826110f8565b60ff60f81b881681526000602060e060208401526111fb60e084018a61109f565b838103604085015261120d818a61109f565b606085018990526001600160a01b038816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b8181101561126157835183529284019291840191600101611245565b50909c9b505050505050505050505050565b600080600080600080600060e0888a03121561128e57600080fd5b611297886110f8565b96506112a5602089016110f8565b95506040880135945060608801359350608088013560ff811681146112c957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156112f957600080fd5b611302836110f8565b91506111b6602084016110f8565b600181811c9082168061132457607f821691505b60208210810361134457634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b157634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220bc8d20830bf626910ae4f9f980105382ec73c50a2168c5439e0a554a05e7250164736f6c63430008170033";

type CDATATokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CDATATokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CDATAToken__factory extends ContractFactory {
  constructor(...args: CDATATokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    defaultAdmin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<CDATAToken> {
    return super.deploy(defaultAdmin, overrides || {}) as Promise<CDATAToken>;
  }
  override getDeployTransaction(
    defaultAdmin: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(defaultAdmin, overrides || {});
  }
  override attach(address: string): CDATAToken {
    return super.attach(address) as CDATAToken;
  }
  override connect(signer: Signer): CDATAToken__factory {
    return super.connect(signer) as CDATAToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CDATATokenInterface {
    return new utils.Interface(_abi) as CDATATokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CDATAToken {
    return new Contract(address, _abi, signerOrProvider) as CDATAToken;
  }
}
