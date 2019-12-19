import { Author } from 'domain/entities/Author';

export class Post {
  readonly id?: string;

  readonly name: string;

  readonly text: string;

  readonly authorId: string;

  readonly author?: Author;
}
