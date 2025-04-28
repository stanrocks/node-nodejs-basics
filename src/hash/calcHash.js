import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const dirName = import.meta.dirname;
const filePath = path.join(dirName, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const readable = fs.createReadStream(filePath);

  readable.pipe(hash).setEncoding('hex').pipe(process.stdout);

  readable.on('end', () => {
    process.stdout.write('\n');
  });
};

await calculateHash();
