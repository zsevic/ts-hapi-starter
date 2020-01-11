import { Post } from 'domain/entities';
import { postRepository } from 'gateways';

export async function getPostList(authorId: string): Promise<Post[]> {
  return postRepository.getPostList(authorId);
}
