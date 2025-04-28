import path from 'node:path';
import os from 'node:os';
import { Worker } from 'node:worker_threads';

const dirName = import.meta.dirname;
const workerPath = path.join(dirName, 'worker.js');
const logicalCoresNumber = os.cpus().length;

const performCalculations = async () => {
  const workers = [];
  const results = new Array(logicalCoresNumber);

  for (let i = 0; i < logicalCoresNumber; i++) {
    const worker = new Worker(workerPath, { workerData: i + 10 });

    workers.push(worker);

    worker.on('message', (result) => {
      results[i] = { status: 'resolved', data: result };
    });

    worker.on('error', (error) => {
      results[i] = { status: 'error', data: null };
      console.error('Worker error:', error);
    });
  }

  await Promise.allSettled(
    workers.map(
      (worker) => new Promise((resolve) => worker.on('exit', resolve))
    )
  );

  console.log(results);

  workers.forEach((worker) => worker.terminate());
};

await performCalculations();
