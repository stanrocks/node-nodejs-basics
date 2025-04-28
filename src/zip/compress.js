import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const dirName = import.meta.dirname;
const srcFile = path.join(dirName, 'files', 'fileToCompress.txt');
const destFile = path.join(dirName, 'files', 'archive.gz');
const gzip = createGzip();

const compress = async () => {
  const readable = fs.createReadStream(srcFile);
  const writable = fs.createWriteStream(destFile);

  pipeline(readable, gzip, writable, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();
