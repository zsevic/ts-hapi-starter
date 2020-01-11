import { server } from 'api/server';
import authorRoutes from 'api/routes/author';
import { Author, Post } from 'domain/entities';
import { getAuthorList, getPostList } from 'domain/use_cases/queries/author';
import { createAuthor } from 'domain/use_cases/commands/author';

const getAuthorListMock = getAuthorList as jest.Mock;
const createAuthorMock = createAuthor as jest.Mock;
const getPostListMock = getPostList as jest.Mock;
jest.mock('domain/use_cases/queries/author');
jest.mock('domain/use_cases/commands/author');

describe('Author API tests', () => {
  beforeAll(() => {
    server.route(authorRoutes);
  });

  describe('GET /api/authors', () => {
    it('should return author list', async () => {
      const authorList: Author[] = [{
        id: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
        name: 'author 1',
        posts: [{
          id: '1d7ac79b-511c-4f73-9887-0a1549c7075f',
          name: 'post 2 name',
          text: 'post 2 text',
          authorId: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
        }, {
          id: 'e9408c4a-e4a0-4136-b1f6-c79cec6bedac',
          name: 'post name',
          text: 'post text',
          authorId: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
        }],
      }];

      getAuthorListMock.mockResolvedValue(authorList);

      const authors = await server.inject('/api/authors');

      expect(authors.result).toEqual(authorList);
    });
  });

  describe('POST /api/authors', () => {
    it('should create an author', async () => {
      const newAuthor: Author = {
        name: 'author 1',
      };
      const response: Author = {
        id: 'f90477b1-8580-4611-94fc-424db5e0af26',
        name: newAuthor.name,
      };

      createAuthorMock.mockResolvedValue(response);

      const createdAuthor = await server.inject({
        method: 'POST',
        url: '/api/authors',
        payload: newAuthor,
      });

      expect(createdAuthor.result).toEqual(response);
    });
  });

  describe('GET /api/authors/{authorId}/posts', () => {
    it('should return post list by author id', async () => {
      const postList: Post[] = [{
        id: '11ac2014-73d4-420e-b9f7-bc175a6d7913',
        name: 'post 3 name',
        text: 'post 3 text',
        author: {
          id: '43b8fc49-0875-4484-b84e-c04a30223cc1',
          name: 'author 2',
        },
      }];

      getPostListMock.mockResolvedValue(postList);

      const posts = await server.inject(`/api/authors/${postList[0].author.id}/posts`);

      expect(posts.result).toEqual(postList);
    });
  });
});
