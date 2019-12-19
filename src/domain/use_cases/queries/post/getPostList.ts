import { Post } from 'domain/entities';
import { postRepository } from 'gateways';
import { PostEntity } from 'gateways/database/entities';

export async function getPostList(): Promise<PostEntity[]> {
  return postRepository.getPostList();
}
