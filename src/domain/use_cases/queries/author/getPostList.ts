import { Post } from 'domain/entities';
import { authorRepository } from 'gateways';

export async function getPostList(authorId: string): Promise<Post[]> {
  return authorRepository.getPostList(authorId);
}