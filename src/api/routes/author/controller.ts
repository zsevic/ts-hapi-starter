import * as hapi from '@hapi/hapi';
import { Author, Post } from 'domain/entities';
import { getAuthorList, getPostList } from 'domain/use_cases/queries/author';
import { createAuthor } from 'domain/use_cases/commands/author';
import { CreateAuthorDTO } from 'domain/dto';

export async function getAuthorListHandler(): Promise<Author[]> {
  return getAuthorList();
}

export async function createAuthorHandler(request: hapi.Request): Promise<Author> {
  const newAuthor = request.payload as CreateAuthorDTO;

  return createAuthor(newAuthor);
}

export async function getPostListHandler(request: hapi.Request): Promise<Post[]> {
  const { authorId } = request.params;
  
  return getPostList(authorId);
}