import { IRoute } from './IRoute';

export const Routes: IRoute[] = [
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
