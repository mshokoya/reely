import client from 'openid-client';

export const loginRoute = () => {
  const code_verifier = client.randomPKCECodeVerifier();
  const code_challenge = await client.calculatePKCECodeChallenge(code_verifier);
  const state = client.randomState();
  let parameters = {
    redirect_uri: process.env.COGNITO_CALLBACK_URL,
    code_challenge,
    code_challenge_method: 'S256',
    state
  }
  const congnitoLoginURL = client.buildAuthorizationUrl(config, parameters).href;
  res.cookie('state', state, { httpOnly: true, signed: true });
  res.cookie('code_verifier', code_verifier, { httpOnly: true, signed: true });
  res.send(JSON.stringify({ congnitoLoginURL }));
}