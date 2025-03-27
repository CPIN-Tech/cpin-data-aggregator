import crypto from 'node:crypto';
import type { ContractTransaction } from 'ethers';

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function maintainAsyncJob(jobExecuter: () => Promise<void>, restartDelay: number) {
  while (true) {
    try {
      await jobExecuter();
    } catch (e) {
      console.log(e);
      console.log('Job restarting !!!');
    } finally {
      await wait(restartDelay);
    }
  }
}

export function replaceSqlParams(sql: string, params: any[]) {
  const values = params || [];
  const query = sql.replace(/\$([0-9]+)/g, (m, v) => JSON.stringify(values[parseInt(v) - 1]));
  return query;
}

export function uuid() {
  return crypto.randomUUID();
}

export async function exec(
  firstMessage: string,
  tx: ContractTransaction | Promise<ContractTransaction>,
  secondMessage?: string
) {
  tx = await Promise.resolve(tx);
  console.log(firstMessage, ' | hash =', tx.hash);
  const result = await tx.wait(2);
  if (secondMessage) {
    console.log(secondMessage);
  } else {
    console.log('Done.');
  }
  return result;
}
