import { writeFile } from 'node:fs/promises';

const [, , arg] = process.argv;

try {
  await writeFile('note.txt', arg + '\n');
} catch (error) {
  console.error(error);
}
