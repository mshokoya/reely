import client from 'openid-client';
import { cognitoClient } from '../client';

export const returnCallbackAction = async (req: any) => {
  console.log('returnCallbackAction 11');
  const { config } = await cognitoClient;
  console.log('returnCallbackAction 22');
  console.log(config);
  const { state, code_verifier } = req.signedCookies;
  console.log('returnCallbackAction 33');
  console.log(state, code_verifier);
  console.log(state, code_verifier, config, getCurrentUrl(req));
  let tokens = await client.authorizationCodeGrant(config, getCurrentUrl(req), {
    pkceCodeVerifier: code_verifier,
    expectedState: state,
  });

  return tokens;
};

const getCurrentUrl = (req: any) => {
  const currentUrl = process.env.COGNITO_CALLBACK_URL + req['_parsedUrl'].search;
  return new URL(currentUrl);
};
