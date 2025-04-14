import { server } from './server';
import { routes } from './routes';

routes(server.app);

export default server;
