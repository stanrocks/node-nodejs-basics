import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  const dirName = import.meta.dirname;
  const filePath = path.join(dirName, 'files', 'fresh.txt');
  const content = 'I am fresh and young';
  const options = { flag: 'wx' };

  try {
    await fs.writeFile(filePath, content, options);
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }

    throw error;
  }
};

await create();
