import fs from 'node:fs/promises';
import path from 'node:path';

const dirName = import.meta.dirname;
const oldPath = path.join(dirName, 'files', 'wrongFilename.txt');
const newPath = path.join(dirName, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(newPath);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
