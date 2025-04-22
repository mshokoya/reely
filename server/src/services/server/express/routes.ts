import { Express, Router } from 'express';
import { callbackRoute, loginRoute, logoutRoute } from '../../auth/cognito/routes';

export const routes = (app: Express) => {
  app.get('/health', (req, res) => {
    res.status(200).end();
  });
  app.use('/api/auth', authRoutes());
};

function authRoutes() {
  const router = Router();
  router.get('/login', loginRoute);
  router.get('/logout', logoutRoute);
  router.get('/token', callbackRoute);
  return router;
}
