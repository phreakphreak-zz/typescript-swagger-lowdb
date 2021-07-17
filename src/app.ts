import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import path from 'path';
import { notFound, internalError } from './middlewares';

const app = express();

// static files
app.use(express.static(path.join(path.resolve('./'), 'public')));

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(morgan('dev'));

// middlewares
app.use(cors());

// routes
app.use(routes);

// 404
app.use(notFound);

// 500
app.use(internalError);

export default app;
