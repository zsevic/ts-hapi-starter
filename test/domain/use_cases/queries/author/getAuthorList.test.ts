import { Author } from 'domain/entities';
import { getAuthorList } from 'domain/use_cases/queries/author';
import { authorRepository } from 'gateways';

const getAuthorListMock = authorRepository.getAuthorList as jest.Mock;
jest.mock('gateways');

describe('getAuthorList', () => {
  it('should return author list', async () => {
    const authorList: Author[] = [{
      id: '5376ee98-5a8d-4a60-8d83-e0efc7050c5d',
      name: 'author name',
      posts: [],
    }];
    getAuthorListMock.mockResolvedValue(authorList);

    const authors = await getAuthorList();

    expect(authors.length).toEqual(1);
  });
});
