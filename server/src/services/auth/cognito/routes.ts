import { loginAction } from './actions/login_action';
import { returnCallbackAction } from './actions/return_callback_action';

export const loginRoute = async (req: any, res: any) => {
  const { state, code_verifier, congnitoLoginURL } = await loginAction();

  res.cookie('state', state, { httpOnly: true, signed: true });
  res.cookie('code_verifier', code_verifier, { httpOnly: true, signed: true });
  res.send(JSON.stringify({ congnitoLoginURL }));
};

export const callbackRoute = async (req: any, res: any) => {
  try {
    const tokens = await returnCallbackAction(req);
    res.cookie('ACCESS_TOKEN', tokens.access_token, { httpOnly: true, signed: true });
    res.cookie('REFRESH_TOKEN', tokens.refresh_token, { httpOnly: true, signed: true });
    res.cookie('ID_TOKEN', tokens.id_token);
    res.clearCookie('state');
    res.clearCookie('code_verifier');
    res.send(tokens);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export const logoutRoute = async (req: any, res: any) => {
  req.session.destroy();
  const logoutUrl = `https://${process.env.COGNITO_USER_POOL_ID}.auth.${process.env.AWS_REGION}.amazoncognito.com/logout?client_id=${process.env.COGNITO_CLIENT_ID}&logout_uri=${process.env.COGNITO_LOGOUT_URL}`;
  res.redirect(logoutUrl);
  res.clearCookie('ACCESS_TOKEN');
  res.clearCookie('REFRESH_TOKEN');
  res.clearCookie('ID_TOKEN');
  res.send('Logged out');
};
