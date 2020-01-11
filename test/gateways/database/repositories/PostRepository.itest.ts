import { createConnection, getRepository } from 'typeorm';
import { authorRepository, postRepository } from 'gateways';
import { PostEntity, AuthorEntity } from 'gateways/database/entities';
import ormConfig from 'root/ormconfig';

const config = ormConfig.find((c) => c.name === 'test');

describe('PostRepository', () => {
  let connection;

  beforeAll(async () => {
    connection = await createConnection(config);
    await getRepository(PostEntity, config.name).clear();
    await getRepository(AuthorEntity, config.name).clear();
  });

  afterEach(async () => {
    await getRepository(PostEntity, config.name).clear();
    await getRepository(AuthorEntity, config.name).clear();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should return post list', async () => {
    const author = { name: 'author name' };
    const createdAuthor = await authorRepository.createAuthor(author);

    const post = { name: 'post', text: 'post text', authorId: createdAuthor.id };
    await postRepository.createPost(post);

    const postList = await postRepository.getPostList();

    expect(postList.length).toEqual(1);
  });

  it('should return post list by author id', async () => {
    const author = { name: 'author name' };
    const createdAuthor = await authorRepository.createAuthor(author);

    const post = { name: 'post', text: 'post text', authorId: createdAuthor.id };
    await postRepository.createPost(post);

    const postList = await postRepository.getPostList(createdAuthor.id);

    expect(postList.length).toEqual(1);
  });
});
