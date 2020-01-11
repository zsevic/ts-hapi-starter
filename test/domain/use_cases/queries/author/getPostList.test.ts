import { Post } from 'domain/entities';
import { getPostList } from 'domain/use_cases/queries/author';
import { postRepository } from 'gateways';

const getPostListMock = postRepository.getPostList as jest.Mock;
jest.mock('gateways');

describe('getPostList', () => {
  it('should return post list', async () => {
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

    const posts = await getPostList(postList[0].author.id);

    expect(posts.length).toEqual(1);
  });
});
