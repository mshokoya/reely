import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
// import { dynamoDBSessionStorage } from 'src/services/database/dynamodb/session_storage';

export const server = (() => {
  const app = express();
  const port = process.env.PORT || 5000;

  initCors(app);
  initSession(app);
  app.use(cookieParser(process.env.COOKIE_SECRET));

  const startServer = () => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  };

  return {
    startServer,
    app,
  };
})();

function initCors(app: express.Application) {
  const allowedOrigins = [process.env.FRONTEND_URL as string];

  const corsConfig = {
    origin: allowedOrigins,
    credentials: true,
    // allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // maxAge: 3600,
  };

  app.use(cors(corsConfig));
}

function initSession(app: express.Application) {
  const sessionConfig = {
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    // signed: !!process.env.____,
    // store: dynamoDBSessionStorage(),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as 'strict',
      // maxAge: 3600000,
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days in milliseconds
    },
  };

  app.use(session(sessionConfig));
}
