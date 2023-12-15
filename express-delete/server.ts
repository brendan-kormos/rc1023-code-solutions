import express from 'express';
const app = express();
const PORT = 8080;
type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});

app.get('/api/grades', (req, res, next) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
  next();
});

app.delete('/api/grades/:userId', (req, res) => {
  const params = req.params;
  const userId = Number(params.userId);
  if (grades[userId]) {
    delete grades[userId];
    res.sendStatus(204);
    return;
  }
  res.sendStatus(404);
});
