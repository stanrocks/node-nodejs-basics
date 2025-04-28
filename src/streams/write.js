import fs from 'node:fs';
import path from 'node:path';

const dirName = import.meta.dirname;
const filePath = path.join(dirName, 'files', 'fileToWrite.txt');

const write = async () => {
  const writable = fs.createWriteStream(filePath);

  process.stdin.pipe(writable);
};

await write();
