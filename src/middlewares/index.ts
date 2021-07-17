import { Request, Response, NextFunction } from 'express';
// 404
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Not found');
};

// 500
const internalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(500).send('Internal server error');
};

export { notFound, internalError };
