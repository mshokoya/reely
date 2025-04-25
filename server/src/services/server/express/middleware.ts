// @ts-nocheck

import { NextFunction } from 'express';
import { cognitoClient } from '../../../services/auth/cognito/client';
import { verifyAuthToken } from './utils/token_util';

export const checkAuth = async (
  req: Express.Request,
  res: Express.Response,
  next: NextFunction,
) => {
  let accessToken = req.signedCookies.at;
  let refreshToken = req.signedCookies.rt;

  if (!accessToken || !req.session || !req.session.user)
    return res.status(401).send('Access token required');

  try {
    accessToken = await verifyAuthToken(accessToken);
    if (accessToken.sub !== req.session.user.id) {
      return res.status(403).send('Invalid access token');
    }
    return next();
  } catch (err) {
    console.error('\n==============ERROR 1/2 START===========\n\n');
    console.error(err);
    console.error('\n\n==============ERROR 1/2 END===========\n');

    if (err.name !== 'TokenExpiredError') {
      return res.status(403).send('Invalid access token');
    }
    if (!refreshToken) {
      removeUserAuth(req, res);
      return res.status(401).send('Session expired. Please log in again.');
    }
    try {
      await verifyAuthToken(refreshToken);
      const tkns = await validateRefreshToken(refreshToken);
      res.set('at', tkns.accessToken);
    } catch (err) {
      console.error(err);
      removeUserAuth(req, res);
      return res.status(401).send('Invalid refresh token');
    }
  }
  removeUserAuth(req, res);
  return res.status(403).send('Invalid access token');
};

async function validateRefreshToken(refreshToken: string) {
  return (await cognitoClient)
    .refreshMyToken(refreshToken)
    .then(async (d) => await d.json())
    .then((res) => {
      return {
        accessToken: res.access_token,
        idToken: res.id_token,
      };
    });
}

async function removeUserAuth(req, res) {
  res.clearCookie('at');
  res.clearCookie('rt');
  req.session.destroy();
}
