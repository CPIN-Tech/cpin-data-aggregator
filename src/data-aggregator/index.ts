import { getAllSppInfos } from '../spp-updater/spp-list';
import { Sdk } from '@peaq-network/sdk';
import { formatBalance, hexToString, stringToHex } from '@polkadot/util';
import config from '../config';

/*
DID key pattern:
  cpin-production-<year>-<month>-<day>-<hour>
  ex: cpin-production-2025-03-26-12
*/

type DataHour = {
  year: number; // full year like 2025
  month: number; // 1-12
  day: number; // 1-31
  hour: number; // 0-23
};

async function getRegisteredDids(sppId: number) {
  const sppInfos = await getAllSppInfos();
  const sppInfo = sppInfos.find((spp) => spp.sppId === sppId);
  if (!sppInfo) {
    throw new Error(`SPP ${sppId} not found`);
  }
  return sppInfo.dids;
}

async function getDataForHour(
  sdk: Sdk,
  startHour: DataHour
): Promise<{ outputAC: number; outputDC: number } | null> {
  const item = await sdk.storage.getItem({
    itemType: `cpin-production-${formatDataHour(startHour)}`,
  });
  if (!item) {
    return null;
  }
  const itemJson = JSON.parse(hexToString(item?.data));
  return itemJson;
}

async function checkDid(sdk: Sdk, didAccount: string) {
  const did = await sdk.did.read({
    name: 'cpin-spp-facility',
  });
  if (!did) {
    throw new Error(`DID ${didAccount} not found`);
  }
  return did;
}

export async function getSppProduction(sppId: number) {
  const dids = await getRegisteredDids(sppId);
  const sdk = await Sdk.createInstance({
    baseUrl: config.PEAQ_API_URL,
  });
  await sdk.connect();

  let totalProduction = 0;

  for (const did of dids) {
    await checkDid(sdk, did.didAccount);
    const latestHour = getLatestHour();
    const data = await getDataForHour(sdk, latestHour);
    if (data) {
      totalProduction += data.outputAC;
    }
  }

  return totalProduction;
}

function getLatestHour(): DataHour {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: now.getHours(),
  };
}

function formatDataHour(hour: DataHour): string {
  const month = hour.month.toString().padStart(2, '0');
  const day = hour.day.toString().padStart(2, '0');
  const hourStr = hour.hour.toString().padStart(2, '0');
  return `${hour.year}-${month}-${day}-${hourStr}`;
}
