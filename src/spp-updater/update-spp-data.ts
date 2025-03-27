import { exec } from '../utils';
import { CpinSppStaking } from '../../typechain-cpin';
import { ethers } from 'ethers';
import { SppInfo } from './spp-list';

export default async function updateSppData(
  sppStaking: CpinSppStaking,
  sppInfo: SppInfo,
  totalProduction: number,
  blocknumber: number,
  timestamp: number
) {
  const sppContractInfo = await sppStaking.sppDatas(sppInfo.sppId);
  const now = Date.now() / 1000;
  const ONE_HOUR = 60 * 60;
  const updatePeriod = 30 * 60;

  if (sppContractInfo.lastUpdateTime > now - updatePeriod) {
    console.log(`spp ${sppInfo.sppId} updated recenly, skipping`);
    return;
  }

  const period = timestamp - sppContractInfo.lastUpdateTime;
  const stakingRate = Number(sppContractInfo.totalStakedCapacity) / sppInfo.maxCapacity;

  const cdataAmount = randomize((stakingRate * totalProduction * period) / ONE_HOUR);
  const cwattAmount = randomize((stakingRate * totalProduction * period) / ONE_HOUR);

  console.log(ethers.utils.parseEther(cdataAmount.toString()).toString());
  console.log(ethers.utils.parseEther(cwattAmount.toString()).toString());

  await exec(
    'update spp ' + sppInfo.sppId,
    sppStaking.addSppProductionInfo(
      sppInfo.sppId,
      sppContractInfo.lastUpdateTime,
      timestamp,
      totalProduction,
      ethers.utils.parseEther(cdataAmount.toString()),
      ethers.utils.parseEther(cwattAmount.toString())
    )
  );
}

function randomize(input: number) {
  const rand = getRandomArbitrary(80_000, 120_000);
  return (rand * input) / 100_000;
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
