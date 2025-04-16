import { ethers } from 'ethers';
import { sppStakingAddress, rpcUrl } from './constants';
import { CpinSppStaking__factory } from '../../typechain-cpin';
import { makeSmartCached } from '../utils/smart-cached';
import config from '../config';
import { encodeAddress } from '@polkadot/util-crypto';

export interface DidInfo {
  didAccount: string;
  publicKey: string;
}

interface SppIpfsData {
  id: string;
  name: string;
  desc: string;
  country: string;
  city: string;
  status: 'active' | 'passive';
  sppCode: string;
  installedPower: string;
  monthlyProduction: string;
  location: string;
  moduleCount: number;
  maxCapacity: number;
  images: string[];
}

export interface SppInfo {
  sppId: number;
  maxCapacity: number;
  name: string;
  desc: string;
  country: string;
  city: string;
  status: 'active' | 'passive';
  sppCode: string;
  installedPower: string;
  monthlyProduction: string;
  moduleCount: number;
  images: string[];
  dids: DidInfo[];
}

const getSppInfoFromIpfs = makeSmartCached(
  async (cid: string) => {
    let info: SppIpfsData | null = null;
    const path = `https://${config.PINATA_GATEWAY_URL}/ipfs/${cid}`;
    const res = await fetch(path);
    info = (await res.json()) as SppIpfsData;
    return info;
  },
  {
    cacheSeconds: Infinity,
    fileBackupName: 'ipfs-spp-data',
  }
);

const getSppDidPubKeys = makeSmartCached(
  async (sppId: number) => {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const sppStaking = CpinSppStaking__factory.connect(sppStakingAddress, provider);
    const count = (await sppStaking.getSppDidCount(sppId)).toNumber() || 0;
    console.log('spp', sppId, 'count', count);
    const dids: string[] = [];
    for (let i = 0; i < count; i++) {
      const didAccount = await sppStaking.getSppDidByIndex(sppId, i);
      dids.push(didAccount);
    }
    return dids;
  },
  {
    cacheSeconds: 300,
    fileBackupName: 'spp-dids',
  }
);

export async function getAllSppInfos() {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const sppStaking = CpinSppStaking__factory.connect(sppStakingAddress, provider);
  const maxSppId = 10;
  const sppInfos: SppInfo[] = [];

  for (let i = 1; i <= maxSppId; i++) {
    const data = await sppStaking.sppDatas(i);
    if (!data || data.startTime < 1) {
      continue;
    }
    const ipfsCid = await sppStaking.sppIpfsCids(i);
    const ipfsData = (await getSppInfoFromIpfs(ipfsCid))!;
    const didPubKeys = (await getSppDidPubKeys(i)) || [];
    console.log('spp', i, 'dids', didPubKeys);

    const didsWithAddress: DidInfo[] = didPubKeys
      .map((publicKey) => {
        return {
          didAccount: encodeAddress(publicKey, 42),
          publicKey: publicKey,
        };
      })
      .filter((did) => did != null);

    if (ipfsData && didsWithAddress.length > 0) {
      sppInfos.push({
        sppId: i,
        ...ipfsData,
        dids: didsWithAddress,
      });
    }
  }
  return sppInfos;
}
