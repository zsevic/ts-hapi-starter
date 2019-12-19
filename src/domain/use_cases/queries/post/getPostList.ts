import { Post } from 'domain/entities';
import { postRepository } from 'gateways';

export async function getPostList(): Promise<Post[]> {
  return postRepository.getPostList();
}
