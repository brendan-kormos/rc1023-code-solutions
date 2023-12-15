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

app.post('/api/grades', (req, res, next) => {
  const body = req.body;
  const newObj = {
    name: body.name,
    score: body.score,
    course: body.course,
    id: nextID,
  };
  grades[newObj.id] = newObj;
  nextID++;
  res.status(201).send(newObj);
  next();
});
