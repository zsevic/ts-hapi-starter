import { Author } from 'domain/entities';
import { authorRepository } from 'gateways';
import { AuthorEntity } from 'gateways/database/entities';

export async function getAuthorList(): Promise<AuthorEntity[]> {
  return authorRepository.getAuthorList();
}
