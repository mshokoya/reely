import { jwtDecode } from 'jwt-decode';
import { users } from '../../../services/database/dynamodb/schemas';
import { loginAction } from './actions/login_action';
import { returnCallbackAction } from './actions/return_callback_action';
import { sanitizeUser } from '../../../services/server/express/utils/helpers';

export const loginRoute = async (req: any, res: any) => {
  const { state, code_verifier, congnitoLoginURL } = await loginAction();

  res.cookie('state', state, { httpOnly: true, signed: true });
  res.cookie('code_verifier', code_verifier, { httpOnly: true, signed: true });
  res.send(JSON.stringify({ congnitoLoginURL }));
};

export const callbackRoute = async (req: any, res: any) => {
  try {
    const tokens = await returnCallbackAction(req);
    const { sub, email } = jwtDecode<{ sub: string; email: string }>(tokens.id_token as string);
    let user = await users.actions.getById(sub);

    if (!user) {
      user = await users.actions.create(sub, email);
    }

    req.session.user = user;

    res.cookie('at', tokens.access_token, { httpOnly: true, signed: true });
    res.cookie('rt', tokens.refresh_token, { httpOnly: true, signed: true });
    res.clearCookie('state');
    res.clearCookie('code_verifier');
    res.json({ data: sanitizeUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export const logoutRoute = async (req: any, res: any) => {
  const logoutUrl = `${process.env.COGNITO_LOGOUT_URL}?client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=${process.env.FRONTEND_URL}`;
  req.session.destroy();
  res.clearCookie('at');
  res.clearCookie('rt');
  res.clearCookie('connect.sid');
  return fetch(logoutUrl)
    .then(() => res.status(200).json({}))
    .catch((err) => {
      console.error(err);
      return res.status(500).send('Internal server error');
    });
};
