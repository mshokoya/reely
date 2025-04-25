import jwt from 'jsonwebtoken';
import { cognitoClient } from '../../../../services/auth/cognito/client';

// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

export function verifyAuthToken(token: string) {
  return cognitoClient.then(({ jwtSigningKey }) => {
    return jwt.verify(token, jwtSigningKey);
  });
}

// export function verifyAccessToken(token: string) {
//   return jwt.verify(token, ACCESS_TOKEN_SECRET);
// }

// export function verifyRefreshToken(token: string) {
//   return jwt.verify(token, REFRESH_TOKEN_SECRET);
// }

// export function generateAccessToken(user: Record<string, string>) {
//   return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
// }
