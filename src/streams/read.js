import fs from 'node:fs';
import path from 'node:path';

const dirName = import.meta.dirname;
const filePath = path.join(dirName, 'files', 'fileToRead.txt');

const read = async () => {
  const readable = fs.createReadStream(filePath);

  readable.pipe(process.stdout);

  readable.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();
