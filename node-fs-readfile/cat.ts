import { readFile } from 'node:fs/promises';

const [, , ...args] = process.argv;

const promises = args.map(async (path) => {
  const content = readFile('./' + path, { encoding: 'utf8' });
  return content;
});

try {
  const messages = await Promise.all(promises);
  let str: string = '';
  for (let i = 0; i < messages.length; i++) {
    str += messages[i];
  }
  console.log(str);
} catch (err) {
  console.error(err);
}
