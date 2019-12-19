import { Author } from 'domain/entities';
import { authorRepository } from 'gateways';

export async function getAuthorList(): Promise<Author[]> {
  return authorRepository.getAuthorList();
}
