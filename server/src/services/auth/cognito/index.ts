import client from 'openid-client';
import { createPublicKey } from 'node:crypto';
// Initialize OpenID Client

export const cognitoClient = async () => {
  // Initialize OpenID Client
  let server = new URL(
    `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
  );
  let clientId = process.env.COGNITO_CLIENT_ID;
  let clientSecret = process.env.COGNITO_CLIENT_SECRET;
  const config = await client.discovery(
    server,
    clientId,
    clientSecret,
  )
  // Fetch PEM Key to verfiy ACCESS Token
  const jwtSigningKey = await getCognitoJWTPublicKey(server.href + "/.well-known/jwks.json ")

  return {
    config,
    jwtSigningKey,
  };
};

const getCognitoJWTPublicKey = async (tokenSigningKeyUrl: string) => {
  const res = await fetch(tokenSigningKeyUrl);
  const data = await res.json();
  // console.log(data);
  const jwtSigningKey = createPublicKey({ format: 'jwk', key: data.keys[1] }).export({ format: 'pem', type: 'spki' })
  // console.log(jwtSigningKey);
  return jwtSigningKey
}
