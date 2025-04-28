import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
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
