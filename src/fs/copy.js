import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const srcDir = path.join(__dirname, 'files');
  const destDir = path.join(__dirname, 'files_copy');
  const copyMode = fs.constants.COPYFILE_EXCL;

  const pathExists = async (filePath) => {
    try {
      await fs.access(filePath);
      return true;
    } catch (error) {
      if (error.code === 'ENOENT') return false;
      throw error;
    }
  };

  const srcExists = await pathExists(srcDir);
  const destExists = await pathExists(destDir);

  if (!srcExists || destExists) {
    throw new Error('FS operation failed');
  }

  await fs.mkdir(destDir);

  const filesToCopy = await fs.readdir(srcDir);

  for (const file of filesToCopy) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    await fs.copyFile(srcFile, destFile, copyMode);
  }
};

await copy();
