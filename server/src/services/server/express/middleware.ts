// @ts-nocheck

import { NextFunction } from 'express';
import { cognitoClient } from 'src/services/auth/cognito/client';
import { verifyAuthToken } from './utils/token_util';

export const checkAuth = async (
  req: Express.Request,
  res: Express.Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['Authorization'];
  let refreshToken = req.headers['x-refresh-token'];

  let accessToken = authHeader && authHeader.split(' ')[1];
  if (!accessToken || !req.session || !req.session.user)
    return res.status(401).json({ error: 'Access token required' });

  try {
    console.log('1');
    accessToken = await verifyAuthToken(accessToken);
    console.log('2');
    if (accessToken.sub !== req.session.user.id) {
      console.log('3');
      return res.status(403).json({ error: 'Invalid access token' });
    }
    console.log('4');
    return next();
  } catch (err) {
    console.log('5');
    if (err.name !== 'TokenExpiredError') {
      console.log('6');
      if (!refreshToken) {
        console.log('7');
        removeUserAuth(req, res);
        return res.status(401).json({ error: 'Session expired. Please log in again.' });
      }
      console.log('8');
      try {
        await verifyAuthToken(refreshToken);
        console.log('9');
        const tkns = await validateRefreshToken(refreshToken);
        console.log('10');
        res.set('Authorization', `Bearer ${tkns.accessToken}`);
      } catch (err) {
        console.log('11');
        removeUserAuth(req, res);
        console.log('13');
        return res.status(401).json({ error: 'Invalid refresh token' });
      }
    }
  }
  console.log('13');
  removeUserAuth(req, res);
  console.log('14');
  return res.status(403).json({ error: 'Invalid access token' });
};

async function validateRefreshToken(refreshToken: string) {
  return (await cognitoClient)
    .refreshMyToken(refreshToken)
    .then(async (d) => await d.json())
    .then((res) => {
      console.log('validateRefreshToken');
      console.log(res);
      return {
        accessToken: res.access_token,
        idToken: res.id_token,
      };
    });
}

async function removeUserAuth(req, res) {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  req.session.destroy();
}
