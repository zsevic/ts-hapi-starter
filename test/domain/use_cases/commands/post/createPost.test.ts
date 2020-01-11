import { CreatePostDTO } from 'domain/dto';
import { Post } from 'domain/entities';
import { createPost } from 'domain/use_cases/commands/post';
import { postRepository } from 'gateways';

const createPostMock = postRepository.createPost as jest.Mock;
jest.mock('gateways');

describe('createPost', () => {
  it('should create a post', async () => {
    const post: CreatePostDTO = {
      name: 'post',
      text: 'text',
      authorId: 'fed47c7c-db3d-44a8-b8e3-01377f05ed91',
    };
    const response: Post = {
      id: '523d4e6a-c82b-4c04-98f8-6cb3fea36181',
      ...post,
    };
    createPostMock.mockResolvedValue(response);

    const newPost = await createPost(post);

    expect(newPost).toMatchObject(response);
  });
});
