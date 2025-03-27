import fs from 'fs/promises';

export async function deleteOldFiles() {
  const maxDate = new Date();
  maxDate.setHours(maxDate.getHours() - 72);
  const maxTimestamp = Math.floor(maxDate.getTime() / 1000);
  console.log('maxTimestamp', maxTimestamp);

  const list = await fs.readdir('./data');

  const folderNames = [];

  for (let i = 0; i < list.length; i++) {
    const folder = list[i]!;
    if (folder.startsWith('0x') && folder.length == 66) {
      folderNames.push(...(await getSubFolders(folder, maxTimestamp)));
    }
  }

  for (let i = 0; i < folderNames.length; i++) {
    //console.log(folderNames[i]);
    //await fs.rmdir(folderNames[i]!, {recursive: true});
    await fs.rm(folderNames[i]!, { recursive: true, force: true });
  }
}

async function getSubFolders(parent: string, maxTimestamp: number): Promise<string[]> {
  const path = './data/' + parent;
  const list = await fs.readdir(path);
  const rt = [];
  for (let i = 0; i < list.length; i++) {
    const folder = list[i]!;
    if (folder.includes('-')) {
      const parts = folder.split('-') as [string, string];
      if (parts.length == 2) {
        if (parts[1].startsWith('0x') && /^[0-9]+$/.test(parts[0])) {
          if (parseInt(parts[0]) < maxTimestamp) {
            rt.push(path + '/' + folder);
          }
        }
      }
    }
  }
  return rt;
}
