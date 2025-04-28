import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const dirName = import.meta.dirname;
  const srcDir = path.join(dirName, 'files');
  const destDir = path.join(dirName, 'files_copy');

  try {
    await fs.readdir(srcDir);

    await fs.mkdir(destDir);

    await fs.cp(srcDir, destDir, { recursive: true });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
