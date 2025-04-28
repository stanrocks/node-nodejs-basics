import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const dirName = import.meta.dirname;
  const srcDir = path.join(dirName, 'files');
  const destDir = path.join(dirName, 'files_copy');
  const copyMode = fs.constants.COPYFILE_EXCL;

  try {
    const filesToCopy = await fs.readdir(srcDir);

    await fs.mkdir(destDir);

    for (const file of filesToCopy) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      await fs.copyFile(srcFile, destFile, copyMode);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
