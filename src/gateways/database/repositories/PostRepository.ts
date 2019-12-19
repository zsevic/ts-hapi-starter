/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Post } from 'domain/entities';
import { CreatePostDTO } from 'domain/dto';
import { PostEntity } from 'gateways/database/entities';

export class PostRepository {
  async getPostList(): Promise<Post[]> {
    const postList = await getRepository(PostEntity).find({ relations: ['author'] });

    return plainToClass(Post, postList);
  }

  async createPost(post: CreatePostDTO): Promise<Post> {
    const newPost = await getRepository(PostEntity).save(post);

    return plainToClass(Post, newPost);
  }
}
