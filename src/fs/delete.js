import fs from 'node:fs/promises';
import path from 'node:path';

const dirName = import.meta.dirname;
const filePath = path.join(dirName, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
