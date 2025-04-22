import { server as svr } from './server';
import { routes } from './routes';

routes(svr.app);

export const server = svr;
