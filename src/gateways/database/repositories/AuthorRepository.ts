/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { AuthorEntity, PostEntity } from 'gateways/database/entities';
import { CreateAuthorDTO } from 'domain/dto';
import { Author, Post } from 'domain/entities';

export class AuthorRepository {
  async getAuthorList(): Promise<Author[]> {
    const authorList = await getRepository(AuthorEntity).find({ relations: ['posts'] });

    return plainToClass(Author, authorList);
  }

  async getPostList(authorId: string): Promise<Post[]> {
    const postList = await getRepository(PostEntity).find({
      where: {
        authorId,
      },
    });

    return plainToClass(Post, postList);
  }

  async createAuthor(author: CreateAuthorDTO): Promise<Author> {
    const newAuthor = await getRepository(AuthorEntity).save(author);

    return plainToClass(Author, newAuthor);
  }
}
