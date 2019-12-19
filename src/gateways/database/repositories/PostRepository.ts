/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { PostEntity } from 'gateways/database/entities';
import { CreatePostDTO } from 'domain/dto';

export class PostRepository {
  async getPostList(): Promise<PostEntity[]> {
    return getRepository(PostEntity).find(/* { relations: ['author'] } */);
  }

  async createPost(post: CreatePostDTO): Promise<PostEntity> {
    return getRepository(PostEntity).save(post);
  }
}
