import express from 'express';
import pg from 'pg';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';
const PORT = 8080;
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.use(express.json());

app.listen(PORT, () => {
  console.log('listening on port 8080');
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select * from "grades";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
        select *
          from "grades"
          where "gradeId" = $1
      `;

    const params = [gradeId];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'id could not be found');
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades/:gradeId/', async (req, res, next) => {
  try {
    const body = req.body;
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const name: string = body.name;
    const course: string = body.course;
    const score: number = Number(body.score);
    if (!name) {
      throw new ClientError(400, 'No name provided');
    }
    if (!course) {
      throw new ClientError(400, 'No course provided');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, `score is not a number: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} not between 0 and 100`);
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
    `;
    const params = [name, course, score];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(500, 'Failed to insert into database');
    }

    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId/', async (req, res, next) => {
  try {
    const body = req.body;
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const name: string = body.name;
    const course: string = body.course;
    const score: number = Number(body.score);
    if (!name) {
      throw new ClientError(400, 'No name provided');
    }
    if (!course) {
      throw new ClientError(400, 'No course provided');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, `score is not a number: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} not between 0 and 100`);
    }

    const sql = `
      update "grades"
      set
        "name" = $1,
        "course" = $2,
        "score" = $3
        where "gradeId" = $4
        returning *;
    `;
    const params = [name, course, score, gradeId];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade === undefined)
      throw new ClientError(404, `did not find gradeId: ${gradeId}`);
    if (!grade) {
      throw new ClientError(500, 'error querying database');
    }

    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId/', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade === undefined)
      throw new ClientError(404, `did not find gradeId: ${gradeId}`);
    if (!grade) {
      throw new ClientError(500, 'error querying database');
    }

    res.status(204).json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware); // has to be at end for next(err) to call this function
