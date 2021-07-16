import { IncomingMessage, RequestListener, ServerResponse } from 'http';
import { IRoute } from './IRoute';
import { Routes } from '.';

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

export const requestListener: RequestListener = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    const path: string | undefined = req.url?.split('?')[0].toLowerCase();
    const route: IRoute = await handleRoutes(path);
    res.writeHead(route.status, { 'Content-Type': 'text/html' });
    res.end(route.content);
  } catch (error) {
    res.writeHead(error.status, { 'Content-Type': 'text/html' });
    res.end(error.content);
  }
};
