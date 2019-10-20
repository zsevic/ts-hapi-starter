import * as hapi from '@hapi/hapi';
import * as controller from './controller';
import { customQuery } from './validation';

export default [{
  method: 'GET',
  path: '/api/custom',
  handler: controller.getCustomListHandler,
  options: {
    description: 'Get custom list',
    notes: 'Returns a custom list',
    validate: {
      query: customQuery,
    },
    tags: ['api'],
  },
}, {
  method: 'GET',
  path: '/',
  handler: (request: hapi.Request, h: hapi.ResponseToolkit): string => 'hello world',
}];
