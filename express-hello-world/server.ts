import express from 'express';

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  console.log('req method', req.method);
  res.send('hello string man');
  next();
});

app.listen(PORT, () => {
  console.log(PORT, ' is running');
});
