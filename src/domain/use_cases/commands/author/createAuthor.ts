import { Author } from 'domain/entities';
import { authorRepository } from 'gateways';
import { AuthorEntity } from 'gateways/database/entities';
import { CreateAuthorDTO } from 'domain/dto';

export async function createAuthor(author: CreateAuthorDTO): Promise<AuthorEntity> {
  return authorRepository.createAuthor(author);
}