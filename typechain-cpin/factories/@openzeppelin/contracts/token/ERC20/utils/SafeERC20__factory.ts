/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafeERC20,
  SafeERC20Interface,
} from "../../../../../../@openzeppelin/contracts/token/ERC20/utils/SafeERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentAllowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestedDecrease",
        type: "uint256",
      },
    ],
    name: "SafeERC20FailedDecreaseAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203df89adf46a1482acc31caadb3bf59d1c7aa822f387fed2658bb9fc79115dd8f64736f6c63430008170033";

type SafeERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeERC20__factory extends ContractFactory {
  constructor(...args: SafeERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<SafeERC20> {
    return super.deploy(overrides || {}) as Promise<SafeERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeERC20 {
    return super.attach(address) as SafeERC20;
  }
  override connect(signer: Signer): SafeERC20__factory {
    return super.connect(signer) as SafeERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeERC20Interface {
    return new utils.Interface(_abi) as SafeERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeERC20 {
    return new Contract(address, _abi, signerOrProvider) as SafeERC20;
  }
}
