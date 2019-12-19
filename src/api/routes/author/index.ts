import * as controller from './controller';
import { authorQuery, authorSchema, authorParam } from './validation';

export default [{
  method: 'GET',
  path: '/api/authors',
  handler: controller.getAuthorListHandler,
  options: {
    description: 'Get author list',
    notes: 'Returns an author list',
    validate: {
      query: authorQuery,
    },
    tags: ['api'],
  },
}, {
  method: 'POST',
  path: '/api/authors',
  handler: controller.createAuthorHandler,
  options: {
    description: 'Create an author',
    notes: 'Creates an author',
    validate: {
      payload: authorSchema,
    },
    tags: ['api'],
  },
}, {
  method: 'GET',
  path: '/api/authors/{authorId}/posts',
  handler: controller.getPostListHandler,
  options: {
    description: 'Get post list by author id',
    notes: 'Returns a post list by author id',
    validate: {
      params: authorParam,
    },
    tags: ['api'],
  },
}, {
  method: 'GET',
  path: '/',
  handler: (): string => 'hello world',
}];
