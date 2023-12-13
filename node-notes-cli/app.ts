import { writeFile, readFile } from 'node:fs/promises';

const path = 'data.json';
const [, , action, arg1, arg2] = process.argv;
type Data = {
  nextId: number;
  notes: Record<string, string>;
};

function stringify(data: Data): string {
  return JSON.stringify(data, null, 2);
}
async function getData(): Promise<Data> {
  const data = await readFile(path, 'utf-8');
  return JSON.parse(data);
}
async function writeData(data: Data): Promise<void> {
  await writeFile(path, stringify(data));
}
async function readNotes(): Promise<void> {
  const data = await getData();
  for (const key in data.notes) console.log(`${key}: ${data.notes[key]}`);
}

async function addNote(): Promise<void> {
  const data = await getData();
  data.notes[data.nextId] = arg1;
  data.nextId++;
  await writeData(data);
}

async function deleteNote(): Promise<void> {
  const data = await getData();
  delete data.notes[arg1];
  await writeData(data);
}

async function updateNote(): Promise<void> {
  const data = await getData();
  data.notes[arg1] = arg2;
  await writeData(data);
}

try {
  switch (action) {
    case 'add':
      console.log('add');
      await addNote();
      break;
    case 'read':
      console.log('read');
      await readNotes();
      break;
    case 'update':
      console.log('update');
      await updateNote();
      break;
    case 'delete':
      await deleteNote();
      console.log('delete');
      break;

    default:
      console.log('invalid action. try: add, read, update, delete');
  }
} catch (error) {
  console.error(error);
}
