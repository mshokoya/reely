import client from 'openid-client';
import { createPublicKey } from 'node:crypto';
// Initialize OpenID Client

export const cognitoClient = (async () => {
  const { config, jwtSigningKey } = await initOpenIdClient();

  return {
    refreshMyToken,
    config,
    jwtSigningKey,
  };
})();

async function initOpenIdClient() {
  let server = new URL(
    `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
  );
  let clientId = process.env.COGNITO_CLIENT_ID as string;
  let clientSecret = process.env.COGNITO_CLIENT_SECRET as string;

  const config = await client.discovery(server, clientId, clientSecret);
  const jwtSigningKey = await getCognitoJWTPublicKey(server.href + '/.well-known/jwks.json');

  return { config, jwtSigningKey };
}

async function getCognitoJWTPublicKey(tokenSigningKeyUrl: string) {
  const res = await fetch(tokenSigningKeyUrl);
  const data = (await res.json()) as { keys: string[] };
  const jwtSigningKey = createPublicKey({ format: 'jwk', key: data.keys[1] }).export({
    format: 'pem',
    type: 'spki',
  });

  return jwtSigningKey;
}

async function refreshMyToken(refresh_token: string) {
  const url = `https://cognito-idp.auth.${process.env.AWS_REGION}.amazoncognito.com/oauth2/token`;
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=refresh_token&client_id=${process.env.COGNITO_CLIENT_ID}&refresh_token=${refresh_token}`,
  });
}
