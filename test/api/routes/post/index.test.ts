import { server } from 'api/server';
import postRoutes from 'api/routes/post';
import { Post } from 'domain/entities';
import { getPostList } from 'domain/use_cases/queries/post';
import { createPost } from 'domain/use_cases/commands/post';

const getPostListMock = getPostList as jest.Mock;
const createPostMock = createPost as jest.Mock;
jest.mock('domain/use_cases/queries/post');
jest.mock('domain/use_cases/commands/post');

describe('Post API tests', () => {
  beforeAll(() => {
    server.route(postRoutes);
  });

  describe('GET /api/posts', () => {
    it('should return post list', async () => {
      const postList: Post[] = [{
        id: 'e9408c4a-e4a0-4136-b1f6-c79cec6bedac',
        name: 'post name',
        text: 'post text',
        author: {
          id: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
          name: 'author 1',
        },
      }];

      getPostListMock.mockResolvedValue(postList);

      const posts = await server.inject('/api/posts');

      expect(posts.result).toEqual(postList);
    });
  });

  describe('POST /api/posts', () => {
    it('should create a post', async () => {
      const newPost: Post = {
        name: 'name',
        text: 'text',
        authorId: '43b8fc49-0875-4484-b84e-c04a30223cc1',
      };
      const response: Post = {
        id: '4c040813-9ee8-4ff2-98e9-186100482dce',
        ...newPost,
      };

      createPostMock.mockResolvedValue(response);

      const createdPost = await server.inject({
        method: 'POST',
        url: '/api/posts',
        payload: newPost,
      });

      expect(createdPost.result).toEqual(response);
    });
  });
});
