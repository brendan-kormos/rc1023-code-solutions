import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';

const app = express();
const PORT = 8080;
const path = 'data.json';

type Note = {
  id: number;
  content: string;
};
type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
});
app.use(express.json());

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

app.get('/api/notes', async (req, res) => {
  try {
    const data = await getData();
    const notes: Note[] = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.status(201).json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }
    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.json(data.notes[id]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'unexpected error occurred' });
  }
});

app.post('/api/notes/:content', async (req, res) => {
  try {
    const data = await getData();
    const content = req.params.content;

    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }

    const id = data.nextId++;
    const newNote = {
      content,
      id,
    };

    data.notes[id] = newNote;

    await writeData(data);

    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'unexpected error occurred' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await getData();
    const id = Number(req.params.id);

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }

    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete data.notes[id];
    await writeData(data);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.put('/api/notes/:id/:content', async (req, res) => {
  try {
    const data = await getData();
    const id = Number(req.params.id);
    const content = req.params.content;

    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    }

    if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }

    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }
    data.notes[id].content = content;

    await writeData(data);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});
