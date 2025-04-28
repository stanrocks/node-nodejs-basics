import fs from 'node:fs/promises';
import path from 'node:path';

const dirName = import.meta.dirname;
const dirPath = path.join(dirName, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(dirPath);
    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
