import { NextFunction } from 'express';

export const checkAuth = (req: Express.Request, res: Express.Response, next: NextFunction) => {
  if (!req.session.userInfo) {
    req.isAuthenticated = false;
  } else {
    req.isAuthenticated = true;
  }
  next();
};
