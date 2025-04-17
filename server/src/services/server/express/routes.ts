import { Express } from 'express';

export const routes = (app: Express) => {
  app.get('/health', (req, res) => {
    res.status(200).end();
  });
};
