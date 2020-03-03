import {
  Server, Request, ResponseToolkit, Lifecycle,
} from '@hapi/hapi';
import plugins from 'api/plugins';
import routes from 'api/routes';
import config from 'config';

export const server = new Server({
  port: config.PORT,
  host: config.HOST,
  routes: {
    cors: true,
    validate: {
      failAction: (request: Request, h: ResponseToolkit, err: Error): Lifecycle.Method => {
        throw err;
      },
      options: {
        abortEarly: false,
      },
    },
  },
});

export const init = async (): Promise<void> => {
  await server.register(plugins);

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err: Error): void => {
  console.log(err);
  process.exit(1);
});
