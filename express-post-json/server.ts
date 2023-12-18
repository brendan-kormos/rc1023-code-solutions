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

const requestGradeSchema: Record<string, string> = {
  name: 'string',
  course: 'string',
  score: 'number',
};

const grades: Record<string, Grade> = {};

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

app.use(express.json());

function reconcileWithSchema(
  obj1,
  schema
): [boolean, object] | [boolean, string] {
  const newObj = {};
  for (const key in schema) {
    const bodyValue = Number(obj1[key]) || obj1[key];
    if ((typeof bodyValue as string) === schema[key]) {
      newObj[key] = bodyValue;
    } else {
      return [false, 'Invalid Data'];
    }
  }
  return [true, newObj];
}

app.get('/api/grades', (req, res, next) => {
  const array: Grade[] = [];
  for (const key in grades) {
    console.log(key);
    array.push(grades[key]);
  }
  res.json(array);
  next();
});

app.post('/api/grades', (req, res, next) => {
  const body: PostRequestGrade = req.body;
  console.log('hello', body);
  const [success, value] = reconcileWithSchema(body, requestGradeSchema);
  if (success) {
    grades[nextID] = value as Grade;
    nextID++;
    res.status(201).json(value);
    next();
  } else {
    res.status(500).json(value);
  }
});
