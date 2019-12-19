import { Author } from 'domain/entities';
import { authorRepository } from 'gateways';
import { PostEntity } from 'gateways/database/entities';

export async function getPostList(authorId: string): Promise<PostEntity[]> {
  return authorRepository.getPostList(authorId);
}