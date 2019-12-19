import { Author } from 'domain/entities/Author';

export interface Post {
  readonly id?: string;
  readonly name: string;
  readonly text: string;
  readonly author?: Author;
}