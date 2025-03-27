/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CpinVirtualPanel,
  CpinVirtualPanelInterface,
} from "../../contracts/CpinVirtualPanel";

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
    name: "ERC721EnumerableForbiddenBatchMint",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
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
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
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
    name: "ERC721InvalidReceiver",
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
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ERC721OutOfBoundsIndex",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "capacity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "expireDate",
        type: "uint32",
      },
    ],
    name: "PanelInfoUpdated",
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
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128[]",
        name: "capacities",
        type: "uint128[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "newTokenIds",
        type: "uint256[]",
      },
    ],
    name: "TokenSplited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTokenId",
        type: "uint256",
      },
    ],
    name: "TokensMerged",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "mergeTokens",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "panelInfos",
    outputs: [
      {
        internalType: "uint128",
        name: "capacity",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "expireDate",
        type: "uint32",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "capacity",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "expireDate",
        type: "uint32",
      },
    ],
    name: "safeMint",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint128[]",
        name: "capacities",
        type: "uint128[]",
      },
    ],
    name: "splitToken",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "updateBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6001600b5560e060405260296080818152906200279160a039600c9062000027908262000262565b503480156200003557600080fd5b50604051620027ba380380620027ba83398101604081905262000058916200032e565b6040518060400160405280601081526020016f10dc1a5b959a5c9d1d585b14185b995b60821b8152506040518060400160405280600781526020016604350494e2d56560cc1b8152508160009081620000b2919062000262565b506001620000c1828262000262565b50620000d39150600090508262000108565b50620001007f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68262000108565b505062000360565b6000828152600a602090815260408083206001600160a01b038516845290915281205460ff16620001b1576000838152600a602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001683390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001b5565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001e657607f821691505b6020821081036200020757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025d576000816000526020600020601f850160051c81016020861015620002385750805b601f850160051c820191505b81811015620002595782815560010162000244565b5050505b505050565b81516001600160401b038111156200027e576200027e620001bb565b62000296816200028f8454620001d1565b846200020d565b602080601f831160018114620002ce5760008415620002b55750858301515b600019600386901b1c1916600185901b17855562000259565b600085815260208120601f198616915b82811015620002ff57888601518255948401946001909101908401620002de565b50858210156200031e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200034157600080fd5b81516001600160a01b03811681146200035957600080fd5b9392505050565b61242180620003706000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806370a0823111610104578063b88d4fde116100a2578063d547741f11610071578063d547741f14610436578063e985e9c514610449578063ec41fa1d1461045c578063f13e6a8d1461046f57600080fd5b8063b88d4fde1461038d578063c87b56dd146103a0578063d3757854146103b3578063d53913931461040f57600080fd5b806395d89b41116100de57806395d89b4114610357578063a217fddf1461035f578063a22cb46514610367578063a2d564d81461037a57600080fd5b806370a082311461031e57806391d1485414610331578063931688cb1461034457600080fd5b80632f2ff15d1161017157806342842e0e1161014b57806342842e0e146102d257806342966c68146102e55780634f6ccce7146102f85780636352211e1461030b57600080fd5b80632f2ff15d146102995780632f745c59146102ac57806336568abe146102bf57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c57806318160ddd1461025157806323b872dd14610263578063248a9ca31461027657600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611bca565b610482565b60405190151581526020015b60405180910390f35b610204610493565b6040516101f39190611c37565b61022461021f366004611c4a565b610525565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611c7f565b61054e565b005b6008545b6040519081526020016101f3565b61024f610271366004611ca9565b61055d565b610255610284366004611c4a565b6000908152600a602052604090206001015490565b61024f6102a7366004611ce5565b6105ed565b6102556102ba366004611c7f565b610612565b61024f6102cd366004611ce5565b610677565b61024f6102e0366004611ca9565b6106af565b61024f6102f3366004611c4a565b6106ca565b610255610306366004611c4a565b6106d6565b610224610319366004611c4a565b61072f565b61025561032c366004611d11565b61073a565b6101e761033f366004611ce5565b610782565b61024f610352366004611dcb565b6107ad565b6102046107c4565b610255600081565b61024f610375366004611e14565b6107d3565b61024f610388366004611e8b565b6107de565b61024f61039b366004611f34565b610b26565b6102046103ae366004611c4a565b610b3d565b6103eb6103c1366004611c4a565b600d602052600090815260409020546001600160801b03811690600160801b900463ffffffff1682565b604080516001600160801b03909316835263ffffffff9091166020830152016101f3565b6102557f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61024f610444366004611ce5565b610ba5565b6101e7610457366004611fb0565b610bca565b61024f61046a366004611fda565b610bf8565b61024f61047d36600461202a565b610d9d565b600061048d82611042565b92915050565b6060600080546104a2906120bb565b80601f01602080910402602001604051908101604052809291908181526020018280546104ce906120bb565b801561051b5780601f106104f05761010080835404028352916020019161051b565b820191906000526020600020905b8154815290600101906020018083116104fe57829003601f168201915b5050505050905090565b600061053082611067565b506000828152600460205260409020546001600160a01b031661048d565b6105598282336110a0565b5050565b6001600160a01b03821661058c57604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006105998383336110ad565b9050836001600160a01b0316816001600160a01b0316146105e7576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610583565b50505050565b6000828152600a6020526040902060010154610608816110c2565b6105e783836110cf565b600061061d8361073a565b821061064e5760405163295f44f760e21b81526001600160a01b038416600482015260248101839052604401610583565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6001600160a01b03811633146106a05760405163334bd91960e11b815260040160405180910390fd5b6106aa8282611163565b505050565b6106aa83838360405180602001604052806000815250610b26565b610559600082336110ad565b60006106e160085490565b821061070a5760405163295f44f760e21b81526000600482015260248101839052604401610583565b6008828154811061071d5761071d6120f5565b90600052602060002001549050919050565b600061048d82611067565b60006001600160a01b038216610766576040516322718ad960e21b815260006004820152602401610583565b506001600160a01b031660009081526003602052604090205490565b6000918252600a602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60006107b8816110c2565b600c6106aa838261215b565b6060600180546104a2906120bb565b6105593383836111d0565b336107e88361072f565b6001600160a01b03161461082b5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606401610583565b600181511161086f5760405162461bcd60e51b815260206004820152601060248201526f696e76616c696420636170616369747960801b6044820152606401610583565b6000828152600d60209081526040918290208251808401909352546001600160801b0381168352600160801b900463ffffffff1690820181905242106108e75760405162461bcd60e51b815260206004820152600d60248201526c1d1bdad95b88195e1c1a5c9959609a1b6044820152606401610583565b600080835167ffffffffffffffff81111561090457610904611d2c565b60405190808252806020026020018201604052801561092d578160200160208202803683370190505b50905060005b8451811015610a68576000858281518110610950576109506120f5565b6020026020010151905080846109669190612231565b600b8054919550600091908261097b83612258565b909155506040805180820182526001600160801b03808616825260208a81015163ffffffff9081168285019081526000878152600d90935294909120925183549451909116600160801b026001600160a01b031990941691161791909117905590506109e7338261126f565b808484815181106109fa576109fa6120f5565b602002602001018181525050807f2dbb8963867e5a43e0c401389222791211823553a882606cf77197d92233e3d2838860200151604051610a569291906001600160801b0392909216825263ffffffff16602082015260400190565b60405180910390a25050600101610933565b5082516001600160801b03838116911614610abc5760405162461bcd60e51b815260206004820152601460248201527377726f6e6720746f74616c20636170616369747960601b6044820152606401610583565b610ac585611289565b6000858152600d60205260409081902080546001600160a01b031916905551859033907f0c36362de81b7ae8567c58e72ecf646792ce43eec5f5e41ec880634d02c4ea6a90610b1790889086906122ad565b60405180910390a35050505050565b610b3184848461055d565b6105e7848484846112c4565b6060610b4882611067565b506000610b536113ed565b90506000815111610b735760405180602001604052806000815250610b9e565b80610b7d846113fc565b604051602001610b8e92919061230e565b6040516020818303038152906040525b9392505050565b6000828152600a6020526040902060010154610bc0816110c2565b6105e78383611163565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610c22816110c2565b6001600160a01b038416610c6a5760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206164647265737360881b6044820152606401610583565b6000836001600160801b031611610cb65760405162461bcd60e51b815260206004820152601060248201526f696e76616c696420636170616369747960801b6044820152606401610583565b610cc34262093a8061233d565b8263ffffffff1611610cd457600080fd5b600b805460009182610ce583612258565b909155506040805180820182526001600160801b03808816825263ffffffff80881660208085019182526000878152600d90915294909420925183549451909116600160801b026001600160a01b03199094169116179190911790559050610d4d858261126f565b604080516001600160801b038616815263ffffffff8516602082015282917f2dbb8963867e5a43e0c401389222791211823553a882606cf77197d92233e3d2910160405180910390a25050505050565b6000815111610ddc5760405162461bcd60e51b815260206004820152600b60248201526a656d70747920617272617960a81b6044820152606401610583565b600063ffffffff815b8351811015610f36576000848281518110610e0257610e026120f5565b60200260200101519050336001600160a01b0316610e1f8261072f565b6001600160a01b031614610e625760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606401610583565b6000818152600d60209081526040918290208251808401909352546001600160801b0381168352600160801b900463ffffffff169082018190524210610eda5760405162461bcd60e51b815260206004820152600d60248201526c1d1bdad95b88195e1c1a5c9959609a1b6044820152606401610583565b8051610ee69086612231565b94508363ffffffff16816020015163ffffffff161015610f0857806020015193505b610f11826106ca565b506000908152600d6020526040902080546001600160a01b0319169055600101610de5565b50600b805460009182610f4883612258565b909155506040805180820182526001600160801b03808716825263ffffffff80871660208085019182526000878152600d90915294909420925183549451909116600160801b026001600160a01b03199094169116179190911790559050610fb0338261126f565b604080516001600160801b038516815263ffffffff8416602082015282917f2dbb8963867e5a43e0c401389222791211823553a882606cf77197d92233e3d2910160405180910390a2336001600160a01b03167f9888782f81e330cbc70fc3ef69c7b90f52bfd85168dc8196e14c47a6d3fee1178583604051611034929190612350565b60405180910390a250505050565b60006001600160e01b03198216637965db0b60e01b148061048d575061048d8261148f565b6000818152600260205260408120546001600160a01b03168061048d57604051637e27328960e01b815260048101849052602401610583565b6106aa83838360016114b4565b60006110ba8484846115ba565b949350505050565b6110cc8133611687565b50565b60006110db8383610782565b61115b576000838152600a602090815260408083206001600160a01b03861684529091529020805460ff191660011790556111133390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161048d565b50600061048d565b600061116f8383610782565b1561115b576000838152600a602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161048d565b6001600160a01b03821661120257604051630b61174360e31b81526001600160a01b0383166004820152602401610583565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6105598282604051806020016040528060008152506116c0565b600061129860008360006110ad565b90506001600160a01b03811661055957604051637e27328960e01b815260048101839052602401610583565b6001600160a01b0383163b156105e757604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611306903390889087908790600401612372565b6020604051808303816000875af1925050508015611341575060408051601f3d908101601f1916820190925261133e918101906123a5565b60015b6113aa573d80801561136f576040519150601f19603f3d011682016040523d82523d6000602084013e611374565b606091505b5080516000036113a257604051633250574960e11b81526001600160a01b0385166004820152602401610583565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b146113e657604051633250574960e11b81526001600160a01b0385166004820152602401610583565b5050505050565b6060600c80546104a2906120bb565b60606000611409836116d7565b600101905060008167ffffffffffffffff81111561142957611429611d2c565b6040519080825280601f01601f191660200182016040528015611453576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461145d57509392505050565b60006001600160e01b0319821663780e9d6360e01b148061048d575061048d826117af565b80806114c857506001600160a01b03821615155b1561158a5760006114d884611067565b90506001600160a01b038316158015906115045750826001600160a01b0316816001600160a01b031614155b801561151757506115158184610bca565b155b156115405760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610583565b81156115885783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806115c88585856117ff565b90506001600160a01b0381166116255761162084600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611648565b846001600160a01b0316816001600160a01b0316146116485761164881856118f8565b6001600160a01b0385166116645761165f84611989565b6110ba565b846001600160a01b0316816001600160a01b0316146110ba576110ba8585611a38565b6116918282610782565b6105595760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610583565b6116ca8383611a88565b6106aa60008484846112c4565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106117165772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611742576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061176057662386f26fc10000830492506010015b6305f5e1008310611778576305f5e100830492506008015b612710831061178c57612710830492506004015b6064831061179e576064830492506002015b600a831061048d5760010192915050565b60006001600160e01b031982166380ac58cd60e01b14806117e057506001600160e01b03198216635b5e139f60e01b145b8061048d57506301ffc9a760e01b6001600160e01b031983161461048d565b6000828152600260205260408120546001600160a01b039081169083161561182c5761182c818486611aed565b6001600160a01b0381161561186a576118496000856000806114b4565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615611899576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60006119038361073a565b600083815260076020526040902054909150808214611956576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061199b906001906123c2565b600083815260096020526040812054600880549394509092849081106119c3576119c36120f5565b9060005260206000200154905080600883815481106119e4576119e46120f5565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611a1c57611a1c6123d5565b6001900381819060005260206000200160009055905550505050565b60006001611a458461073a565b611a4f91906123c2565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160a01b038216611ab257604051633250574960e11b815260006004820152602401610583565b6000611ac0838360006110ad565b90506001600160a01b038116156106aa576040516339e3563760e11b815260006004820152602401610583565b611af8838383611b51565b6106aa576001600160a01b038316611b2657604051637e27328960e01b815260048101829052602401610583565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610583565b60006001600160a01b038316158015906110ba5750826001600160a01b0316846001600160a01b03161480611b8b5750611b8b8484610bca565b806110ba5750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b0319811681146110cc57600080fd5b600060208284031215611bdc57600080fd5b8135610b9e81611bb4565b60005b83811015611c02578181015183820152602001611bea565b50506000910152565b60008151808452611c23816020860160208601611be7565b601f01601f19169290920160200192915050565b602081526000610b9e6020830184611c0b565b600060208284031215611c5c57600080fd5b5035919050565b80356001600160a01b0381168114611c7a57600080fd5b919050565b60008060408385031215611c9257600080fd5b611c9b83611c63565b946020939093013593505050565b600080600060608486031215611cbe57600080fd5b611cc784611c63565b9250611cd560208501611c63565b9150604084013590509250925092565b60008060408385031215611cf857600080fd5b82359150611d0860208401611c63565b90509250929050565b600060208284031215611d2357600080fd5b610b9e82611c63565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d6b57611d6b611d2c565b604052919050565b600067ffffffffffffffff831115611d8d57611d8d611d2c565b611da0601f8401601f1916602001611d42565b9050828152838383011115611db457600080fd5b828260208301376000602084830101529392505050565b600060208284031215611ddd57600080fd5b813567ffffffffffffffff811115611df457600080fd5b8201601f81018413611e0557600080fd5b6110ba84823560208401611d73565b60008060408385031215611e2757600080fd5b611e3083611c63565b915060208301358015158114611e4557600080fd5b809150509250929050565b600067ffffffffffffffff821115611e6a57611e6a611d2c565b5060051b60200190565b80356001600160801b0381168114611c7a57600080fd5b60008060408385031215611e9e57600080fd5b8235915060208084013567ffffffffffffffff811115611ebd57600080fd5b8401601f81018613611ece57600080fd5b8035611ee1611edc82611e50565b611d42565b81815260059190911b82018301908381019088831115611f0057600080fd5b928401925b82841015611f2557611f1684611e74565b82529284019290840190611f05565b80955050505050509250929050565b60008060008060808587031215611f4a57600080fd5b611f5385611c63565b9350611f6160208601611c63565b925060408501359150606085013567ffffffffffffffff811115611f8457600080fd5b8501601f81018713611f9557600080fd5b611fa487823560208401611d73565b91505092959194509250565b60008060408385031215611fc357600080fd5b611fcc83611c63565b9150611d0860208401611c63565b600080600060608486031215611fef57600080fd5b611ff884611c63565b925061200660208501611e74565b9150604084013563ffffffff8116811461201f57600080fd5b809150509250925092565b6000602080838503121561203d57600080fd5b823567ffffffffffffffff81111561205457600080fd5b8301601f8101851361206557600080fd5b8035612073611edc82611e50565b81815260059190911b8201830190838101908783111561209257600080fd5b928401925b828410156120b057833582529284019290840190612097565b979650505050505050565b600181811c908216806120cf57607f821691505b6020821081036120ef57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b601f8211156106aa576000816000526020600020601f850160051c810160208610156121345750805b601f850160051c820191505b8181101561215357828155600101612140565b505050505050565b815167ffffffffffffffff81111561217557612175611d2c565b6121898161218384546120bb565b8461210b565b602080601f8311600181146121be57600084156121a65750858301515b600019600386901b1c1916600185901b178555612153565b600085815260208120601f198616915b828110156121ed578886015182559484019460019091019084016121ce565b508582101561220b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b6001600160801b038181168382160190808211156122515761225161221b565b5092915050565b60006001820161226a5761226a61221b565b5060010190565b60008151808452602080850194506020840160005b838110156122a257815187529582019590820190600101612286565b509495945050505050565b604080825283519082018190526000906020906060840190828701845b828110156122ef5781516001600160801b0316845292840192908401906001016122ca565b50505083810360208501526123048186612271565b9695505050505050565b60008351612320818460208801611be7565b835190830190612334818360208801611be7565b01949350505050565b8082018082111561048d5761048d61221b565b6040815260006123636040830185612271565b90508260208301529392505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061230490830184611c0b565b6000602082840312156123b757600080fd5b8151610b9e81611bb4565b8181038181111561048d5761048d61221b565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a9728fec18f428c3f90848da42e8880e382ed11174e14914cd8460efdee5aeab64736f6c6343000817003368747470733a2f2f6170692e6370696e2e746563682f6e66742f7669727475616c2d70616e656c732f";

type CpinVirtualPanelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CpinVirtualPanelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CpinVirtualPanel__factory extends ContractFactory {
  constructor(...args: CpinVirtualPanelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    defaultAdmin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<CpinVirtualPanel> {
    return super.deploy(
      defaultAdmin,
      overrides || {}
    ) as Promise<CpinVirtualPanel>;
  }
  override getDeployTransaction(
    defaultAdmin: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(defaultAdmin, overrides || {});
  }
  override attach(address: string): CpinVirtualPanel {
    return super.attach(address) as CpinVirtualPanel;
  }
  override connect(signer: Signer): CpinVirtualPanel__factory {
    return super.connect(signer) as CpinVirtualPanel__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CpinVirtualPanelInterface {
    return new utils.Interface(_abi) as CpinVirtualPanelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CpinVirtualPanel {
    return new Contract(address, _abi, signerOrProvider) as CpinVirtualPanel;
  }
}
