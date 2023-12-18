import express from 'express';


const app = express();
const PORT = 8080;

let nextID = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

type PostRequestGrade = {
  name: string;
  course: string;
  score: number;
};

const templateRequestGrade: Record<string, string> = {
  name: 'string',
  course: 'string',
  score: 'number',
};

const grades: Record<number, Grade> = {};

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
  next();
});

\

app.post('/api/grades', (req, res, next) => {
  const body: PostRequestGrade = req.body;
  const newObj: Grade = { id: nextID, ...body };

  // check data against template

  for (const key in templateRequestGrade) {
    const bodyValue = Number(body[key]) || body[key];
    if ((typeof bodyValue as string) === templateRequestGrade[key]) {
      newObj[key] = bodyValue;
    } else {
      res.status(400).json('Invalid data');
      return;
    }
  }

  grades[nextID] = newObj as Grade;
  nextID++;
  res.status(201).json(newObj);
  next();
});
