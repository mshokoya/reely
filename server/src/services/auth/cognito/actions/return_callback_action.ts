import client from 'openid-client';
import { cognitoClient } from '../client';

export const returnCallbackAction = async (req: any) => {
  const { config } = await cognitoClient;
  const { state, code_verifier } = req.signedCookies;
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
