import * as controller from './controller';
import { postQuery, postSchema } from './validation';

export default [{
  method: 'GET',
  path: '/api/posts',
  handler: controller.getPostListHandler,
  options: {
    description: 'Get post list',
    notes: 'Returns a post list',
    validate: {
      query: postQuery,
    },
    tags: ['api'],
  },
}, {
  method: 'POST',
  path: '/api/posts',
  handler: controller.createPostHandler,
  options: {
    description: 'Create a post',
    notes: 'Creates a post',
    validate: {
      payload: postSchema,
    },
    tags: ['api'],
  },
}];
