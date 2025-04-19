import client from 'openid-client';

import { cognitoClient } from '../client';

export const loginAction = async () => {
  const { config } = await cognitoClient;
  const code_verifier = client.randomPKCECodeVerifier();
  const code_challenge = await client.calculatePKCECodeChallenge(code_verifier);
  const state = client.randomState();

  let parameters = {
    redirect_uri: process.env.COGNITO_CALLBACK_URL as string,
    code_challenge,
    code_challenge_method: 'S256',
    state,
  };

  const congnitoLoginURL = client.buildAuthorizationUrl(config, parameters).href;

  return {
    state,
    code_verifier,
    congnitoLoginURL,
  };
};
