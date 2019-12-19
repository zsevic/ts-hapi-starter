import { Post } from 'domain/entities/Post';

export class Author {
    readonly id?: string;

    readonly name: string;

    readonly posts?: Post[];
}
