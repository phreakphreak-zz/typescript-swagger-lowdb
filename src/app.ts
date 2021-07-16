import { Server, createServer } from 'http';
import { requestListener } from './routes/requestListener';
const app: Server = createServer(requestListener);

export default app;
