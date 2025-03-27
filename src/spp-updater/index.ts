import { ethers } from 'ethers';
import { maintainAsyncJob } from '../utils';
import { decrypt } from '../utils/encryption';
import config from '../config';
import { getAllSppInfos } from './spp-list';
import updateSppData from './update-spp-data';
import { getSppProduction } from '../data-aggregator';
import { sppStakingAddress, rpcUrl } from './constants';
import { CpinSppStaking__factory } from '../../typechain-cpin';

async function updateAllIncentives() {
  if (!config.ENCRYPTED_PASS && !config.PASS) {
    throw new Error('No config.PASS value');
  }
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const selectedBlock = await provider.getBlock(-1);
  if (selectedBlock) {
    const pass = config.PASS || decrypt(config.ENCRYPTED_PASS, 'n2x9p5');
    const wallet = new ethers.Wallet(decrypt(config.ENCRYPTED_PK, pass), provider);
    const sppStaking = CpinSppStaking__factory.connect(sppStakingAddress, wallet);
    const sppInfos = await getAllSppInfos();
    for (var i = 0; i < sppInfos.length; i++) {
      try {
        await updateSppData(
          sppStaking,
          sppInfos[i]!,
          await getSppProduction(sppInfos[i]!.sppId),
          selectedBlock.number,
          selectedBlock.timestamp
        );
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    throw 'selectedBlock is null';
  }
}

export async function startSppUpdater() {
  maintainAsyncJob(updateAllIncentives, 5 * 60 * 1000);
  //await wait(60 * 1000);
  //maintainAsyncJob(deleteOldFiles, 5 * 60 * 1000);
}
