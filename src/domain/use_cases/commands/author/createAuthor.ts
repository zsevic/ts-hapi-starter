import { Author } from 'domain/entities';
import { authorRepository } from 'gateways';
import { CreateAuthorDTO } from 'domain/dto';

export async function createAuthor(author: CreateAuthorDTO): Promise<Author> {
  return authorRepository.createAuthor(author);
}