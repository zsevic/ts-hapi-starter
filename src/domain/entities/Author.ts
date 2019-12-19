import { Post } from 'domain/entities/Post';

export interface Author {
    readonly id?: string;
    readonly name: string;
    readonly posts?: Post[];
}
