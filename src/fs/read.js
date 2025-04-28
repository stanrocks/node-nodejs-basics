import fs from 'node:fs/promises';
import path from 'node:path';

const dirName = import.meta.dirname;
const filePath = path.join(dirName, 'files', 'fileToRead.txt');
const options = { encoding: 'utf-8' };

const read = async () => {
  try {
    const contents = await fs.readFile(filePath, options);
    console.log(contents);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
