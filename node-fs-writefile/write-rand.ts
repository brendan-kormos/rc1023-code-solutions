import { writeFile } from 'node:fs/promises';
const random = Math.random();
try {
  await writeFile('random.txt', String(random) + '\n');
} catch (error) {
  console.error(error);
}
