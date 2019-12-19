import * as hapi from '@hapi/hapi';
import { Author } from 'domain/entities';
import { getAuthorList, getPostList } from 'domain/use_cases/queries/author';
import { createAuthor } from 'domain/use_cases/commands/author';
import { AuthorEntity, PostEntity } from 'gateways/database/entities';
import { CreateAuthorDTO } from 'domain/dto';

export async function getAuthorListHandler(): Promise<AuthorEntity[]> {
  return getAuthorList();
}

export async function createAuthorHandler(request: hapi.Request): Promise<AuthorEntity> {
  const newAuthor = request.payload as CreateAuthorDTO;

  return createAuthor(newAuthor);
}

export async function getPostListHandler(request: hapi.Request): Promise<PostEntity[]> {
  const { authorId } = request.params;
  
  return getPostList(authorId);
}