import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
