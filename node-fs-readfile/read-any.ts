import { readFile } from 'node:fs/promises';
const arg = process.argv[2];
try {
  const message = await readFile('./' + arg, { encoding: 'utf8' });
  console.log(message);
} catch (err) {
  console.log(err);
}
