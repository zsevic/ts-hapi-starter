import { CreateAuthorDTO } from 'domain/dto';
import { Author } from 'domain/entities';
import { createAuthor } from 'domain/use_cases/commands/author';
import { authorRepository } from 'gateways';

const createAuthorMock = authorRepository.createAuthor as jest.Mock;
jest.mock('gateways');

describe('createAuthor', () => {
  it('should create an author', async () => {
    const author: CreateAuthorDTO = {
      name: 'author name',
    };
    const response: Author = {
      id: '523d4e6a-c82b-4c04-98f8-6cb3fea36181',
      ...author,
    };
    createAuthorMock.mockResolvedValue(response);

    const newAuthor = await createAuthor(author);

    expect(newAuthor).toMatchObject(response);
  });
});
