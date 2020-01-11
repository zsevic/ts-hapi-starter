import { createConnection, getRepository } from 'typeorm';
import { authorRepository } from 'gateways';
import { AuthorEntity } from 'gateways/database/entities';
import ormConfig from 'root/ormconfig';

const config = ormConfig.find((c) => c.name === 'test');

describe('AuthorRepository', () => {
  let connection;

  beforeAll(async () => {
    connection = await createConnection(config);
    await getRepository(AuthorEntity, config.name).clear();
  });

  afterEach(async () => {
    await getRepository(AuthorEntity, config.name).clear();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should return author list', async () => {
    const author = { name: 'author name' };
    await authorRepository.createAuthor(author);

    const authorList = await authorRepository.getAuthorList();

    expect(authorList.length).toEqual(1);
  });
});
