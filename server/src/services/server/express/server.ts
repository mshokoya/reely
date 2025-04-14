import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const server = (() => {
  const app = express();
  const port = process.env.PORT || 5000;

  initCors(app);
  app.use(cookieParser());

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
  const allowedOrigins = [process.env.CLIENT_URL as string];

  const corsConfig = {
    origin: allowedOrigins,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // maxAge: 3600,
  };

  app.use(cors(corsConfig));
}
