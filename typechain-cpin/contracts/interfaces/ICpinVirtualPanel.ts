/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ICpinVirtualPanelInterface extends utils.Interface {
  functions: {
    "mergeTokens(uint256[])": FunctionFragment;
    "panelInfos(uint256)": FunctionFragment;
    "safeMint(address,uint128,uint32)": FunctionFragment;
    "splitToken(uint256,uint128[])": FunctionFragment;
    "updateBaseURI(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "mergeTokens"
      | "panelInfos"
      | "safeMint"
      | "splitToken"
      | "updateBaseURI"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "mergeTokens",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "panelInfos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeMint",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "splitToken",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBaseURI",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "mergeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "panelInfos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "splitToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBaseURI",
    data: BytesLike
  ): Result;

  events: {
    "PanelInfoUpdated(uint256,uint128,uint32)": EventFragment;
    "TokenSplited(address,uint256,uint128[],uint256[])": EventFragment;
    "TokensMerged(address,uint256[],uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PanelInfoUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSplited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensMerged"): EventFragment;
}

export interface PanelInfoUpdatedEventObject {
  tokenId: BigNumber;
  capacity: BigNumber;
  expireDate: number;
}
export type PanelInfoUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, number],
  PanelInfoUpdatedEventObject
>;

export type PanelInfoUpdatedEventFilter =
  TypedEventFilter<PanelInfoUpdatedEvent>;

export interface TokenSplitedEventObject {
  account: string;
  tokenId: BigNumber;
  capacities: BigNumber[];
  newTokenIds: BigNumber[];
}
export type TokenSplitedEvent = TypedEvent<
  [string, BigNumber, BigNumber[], BigNumber[]],
  TokenSplitedEventObject
>;

export type TokenSplitedEventFilter = TypedEventFilter<TokenSplitedEvent>;

export interface TokensMergedEventObject {
  account: string;
  tokenIds: BigNumber[];
  newTokenId: BigNumber;
}
export type TokensMergedEvent = TypedEvent<
  [string, BigNumber[], BigNumber],
  TokensMergedEventObject
>;

export type TokensMergedEventFilter = TypedEventFilter<TokensMergedEvent>;

export interface ICpinVirtualPanel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICpinVirtualPanelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    mergeTokens(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    panelInfos(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & { capacity: BigNumber; expireDate: number }
    >;

    safeMint(
      to: string,
      capacity: BigNumberish,
      expireDate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    splitToken(
      tokenId: BigNumberish,
      capacities: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateBaseURI(
      uri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  mergeTokens(
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  panelInfos(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { capacity: BigNumber; expireDate: number }>;

  safeMint(
    to: string,
    capacity: BigNumberish,
    expireDate: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  splitToken(
    tokenId: BigNumberish,
    capacities: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateBaseURI(
    uri: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    mergeTokens(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    panelInfos(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & { capacity: BigNumber; expireDate: number }
    >;

    safeMint(
      to: string,
      capacity: BigNumberish,
      expireDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    splitToken(
      tokenId: BigNumberish,
      capacities: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateBaseURI(uri: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "PanelInfoUpdated(uint256,uint128,uint32)"(
      tokenId?: BigNumberish | null,
      capacity?: null,
      expireDate?: null
    ): PanelInfoUpdatedEventFilter;
    PanelInfoUpdated(
      tokenId?: BigNumberish | null,
      capacity?: null,
      expireDate?: null
    ): PanelInfoUpdatedEventFilter;

    "TokenSplited(address,uint256,uint128[],uint256[])"(
      account?: string | null,
      tokenId?: BigNumberish | null,
      capacities?: null,
      newTokenIds?: null
    ): TokenSplitedEventFilter;
    TokenSplited(
      account?: string | null,
      tokenId?: BigNumberish | null,
      capacities?: null,
      newTokenIds?: null
    ): TokenSplitedEventFilter;

    "TokensMerged(address,uint256[],uint256)"(
      account?: string | null,
      tokenIds?: null,
      newTokenId?: null
    ): TokensMergedEventFilter;
    TokensMerged(
      account?: string | null,
      tokenIds?: null,
      newTokenId?: null
    ): TokensMergedEventFilter;
  };

  estimateGas: {
    mergeTokens(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    panelInfos(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeMint(
      to: string,
      capacity: BigNumberish,
      expireDate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    splitToken(
      tokenId: BigNumberish,
      capacities: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateBaseURI(
      uri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mergeTokens(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    panelInfos(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeMint(
      to: string,
      capacity: BigNumberish,
      expireDate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    splitToken(
      tokenId: BigNumberish,
      capacities: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateBaseURI(
      uri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
