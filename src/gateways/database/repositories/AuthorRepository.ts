/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { AuthorEntity, PostEntity } from 'gateways/database/entities';
import { CreateAuthorDTO } from 'domain/dto';

export class AuthorRepository {
  async getAuthorList(): Promise<AuthorEntity[]> {
    return getRepository(AuthorEntity).find(/* { relations: ['posts'] } */);
  }

  async getPostList(authorId: string): Promise<PostEntity[]> {
    return getRepository(PostEntity).find({
      where: {
        authorId,
      },
    });
  }

  async createAuthor(author: CreateAuthorDTO): Promise<AuthorEntity> {
    return getRepository(AuthorEntity).save(author);
  }
}