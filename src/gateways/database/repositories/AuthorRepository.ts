/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { AuthorEntity } from 'gateways/database/entities';
import { CreateAuthorDTO } from 'domain/dto';
import { Author } from 'domain/entities';
import { connectionName } from 'gateways/database/connection';

export class AuthorRepository {
  async getAuthorList(): Promise<Author[]> {
    const authorList = await getRepository(AuthorEntity, connectionName).find({ relations: ['posts'] });

    return plainToClass(Author, authorList);
  }

  async createAuthor(author: CreateAuthorDTO): Promise<Author> {
    const newAuthor = await getRepository(AuthorEntity, connectionName).save(author);

    return plainToClass(Author, newAuthor);
  }
}
