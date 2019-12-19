import { AuthorRepository, PostRepository } from 'gateways/database/repositories';

export const authorRepository: AuthorRepository = new AuthorRepository();
export const postRepository: PostRepository = new PostRepository();