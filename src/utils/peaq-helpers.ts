// Utility functions for address conversion
import { Keyring } from '@polkadot/api';
import {
  keccakAsHex,
  mnemonicToMiniSecret,
  mnemonicValidate,
  ed25519PairFromSeed,
  decodeAddress,
  encodeAddress,
} from '@polkadot/util-crypto';

// Create a Peaq address from mnemonic
export function createPeaqAddressFromMnemonic(mnemonic: string): string {
  const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
  const keypair = keyring.addFromUri(mnemonic);
  // console.log(Buffer.from(keypair.publicKey).toString('hex'));
  return keypair.address;
}

// Convert Substrate address to EVM address
export function substrateAddressToEvm(substrateAddress: string): string {
  const pubKey = getPubKey(substrateAddress);
  return pubKey.slice(0, 42);
}

// Convert mnemonic directly to EVM address
export function mnemonicToEvmAddress(mnemonic: string): string {
  const peaqAddress = createPeaqAddressFromMnemonic(mnemonic);
  return substrateAddressToEvm(peaqAddress);
}

export function getPubKey(ss58addr: string): string {
  return '0x' + Buffer.from(decodeAddress(ss58addr, false, 42)).toString('hex');
}
