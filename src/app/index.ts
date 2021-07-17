import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from '../routes';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(morgan('dev'));

// middlewares
app.use(cors());

// routes
app.use(routes);

export default app;
