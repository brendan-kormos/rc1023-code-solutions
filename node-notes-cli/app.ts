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

async function createNote(value: string): Promise<void> {
  const data = await getData();
  if (!value) throw new Error('Pass an argument for the notes value!');
  data.notes[data.nextId] = value;
  data.nextId++;
  await writeData(data);
}

async function deleteNote(key: string): Promise<void> {
  const data = await getData();
  if (!data.notes[key]) throw new Error('Note does not exist!');
  delete data.notes[key];
  await writeData(data);
}

async function updateNote(key: string, value: string): Promise<void> {
  const data = await getData();
  const found = data.notes[key];
  if (!found) throw new Error('Note does not exist!');
  data.notes[key] = value;
  await writeData(data);
}

try {
  switch (action) {
    case 'create':
      await createNote(arg1);
      break;
    case 'read':
      await readNotes();
      break;
    case 'update':
      await updateNote(arg1, arg2);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;

    default:
      console.log('invalid action. try: create, read, update, delete');
  }
} catch (error) {
  console.error(error);
}
