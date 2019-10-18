import hapi from '@hapi/hapi';
import routes from 'api/routes';

const server = new hapi.Server({
  port: process.env.PORT || 8080,
  host: 'localhost',
});

export const init = async (): Promise<void> => {
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err: Error): void => {
  console.log(err);
  process.exit(1);
});
