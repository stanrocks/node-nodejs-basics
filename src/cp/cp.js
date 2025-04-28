import path from 'node:path';
import { fork } from 'node:child_process';

const dirName = import.meta.dirname;
const childScriptPath = path.join(dirName, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childProcess = fork(childScriptPath, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('error', (err) => {
    console.error('Child process error', err);
  });

  childProcess.on('exit', () => {
    process.stdin.unpipe(childProcess.stdin);
  });
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
