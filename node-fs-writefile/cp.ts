import { writeFile, readFile } from 'node:fs/promises';

const [, , copy, paste] = process.argv;

try {
  const read = await readFile(copy, 'utf-8');
  await writeFile(paste, read);
} catch (error) {
  console.error(error);
}
