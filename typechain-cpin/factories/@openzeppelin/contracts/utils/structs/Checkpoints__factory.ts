/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Checkpoints,
  CheckpointsInterface,
} from "../../../../../@openzeppelin/contracts/utils/structs/Checkpoints";

const _abi = [
  {
    inputs: [],
    name: "CheckpointUnorderedInsertion",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122016e356bbb9c63fdd0d9825a9ebd2a41e03d8eaadfc1f3945945863c3edb123cb64736f6c63430008170033";

type CheckpointsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheckpointsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Checkpoints__factory extends ContractFactory {
  constructor(...args: CheckpointsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Checkpoints> {
    return super.deploy(overrides || {}) as Promise<Checkpoints>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Checkpoints {
    return super.attach(address) as Checkpoints;
  }
  override connect(signer: Signer): Checkpoints__factory {
    return super.connect(signer) as Checkpoints__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheckpointsInterface {
    return new utils.Interface(_abi) as CheckpointsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Checkpoints {
    return new Contract(address, _abi, signerOrProvider) as Checkpoints;
  }
}
