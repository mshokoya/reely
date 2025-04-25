import { Request, Response } from 'express';
import { Router } from 'express';
import { users } from '../services/database/dynamodb/schemas';
import { checkAuth } from '../services/server/express/middleware';

const userRouter = Router();
const childRouter = Router();

userRouter.use('/user', checkAuth, childRouter);
// @ts-expect-error req res types not workin
childRouter.get('/me', me);

export { userRouter };

async function me(req: Request, res: Response) {
  if (!req.session.user) {
    return res.status(403).send('Unauthorized');
  }
  return await getAndReturnUser(req, res);
}

async function getAndReturnUser(req: Request, res: Response) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = await users.actions.getById(req.session.user!.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
}
