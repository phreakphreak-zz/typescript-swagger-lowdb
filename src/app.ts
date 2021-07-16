import {
  Server,
  createServer,
  RequestListener,
  IncomingMessage,
  ServerResponse
} from 'http';

interface IRoute {
  path: string;
  status: number;
  content: string;
}

const Routes: IRoute[] = [
  {
    path: '/',
    status: 200,
    content: '<h1>Hello World!</h1>'
  },
  {
    path: '/about',
    status: 200,
    content: '<h1>About</h1>'
  },
  {
    path: '/contact',
    status: 200,
    content: '<h1>Contact</h1>'
  }
];

const handleRoutes = (path: string | undefined): Promise<IRoute> => {
  return new Promise((resolve, reject) => {
    try {
      if (!path) throw new Error('Invalid path');
      const route = Routes.find((route) => route.path === path);
      if (!route) throw new Error('Route not found');
      resolve(route);
    } catch (error) {
      console.log(error.message);
      reject({
        path: null,
        status: 404,
        content: '<h1>404 Not Found</h1>'
      });
    }
  });
};

const handleResponse = (res: ServerResponse, route: IRoute) => {
  res.writeHead(route.status, { 'Content-Type': 'text/html' });
  res.end(route.content);
};

const requestListener: RequestListener = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  try {
    const path: string | undefined = req.url?.split('?')[0].toLowerCase();
    const route: IRoute = await handleRoutes(path);
    handleResponse(res, route);
  } catch (error) {
    handleResponse(res, error);
  }
};

const app: Server = createServer(requestListener);

export default app;
