import { readFile } from 'node:fs/promises';

try {
  const message = await readFile('./dijkstra.txt', { encoding: 'utf8' });
  console.log(message);
} catch (err) {
  console.log(err);
}
