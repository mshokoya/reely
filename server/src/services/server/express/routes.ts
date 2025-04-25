import { Express, Router } from 'express';
import { callbackRoute, loginRoute, logoutRoute } from '../../auth/cognito/routes';
import { userRouter } from '../../../routes/users';

export const routes = (app: Express) => {
  app.use('/api', childRoutes());
};

function childRoutes() {
  const router = Router();

  router.get('/health', (req, res) => {
    res.status(200).end();
  });
  router.use('/auth', authRoutes());
  router.use(userRouter);
  return router;
}

function authRoutes() {
  const router = Router();
  router.get('/login', loginRoute);
  router.get('/logout', logoutRoute);
  // router.get(process.env.COGNITO_REDIRECT_LOGOUT_PATH_0 as string, logoutRedirectRoute);
  router.get('/token', callbackRoute);
  return router;
}
