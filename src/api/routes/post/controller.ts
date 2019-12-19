import * as hapi from '@hapi/hapi';
import { Post } from 'domain/entities';
import { getPostList } from 'domain/use_cases/queries/post';
import { createPost } from 'domain/use_cases/commands/post';
import { PostEntity } from 'gateways/database/entities';
import { CreatePostDTO } from 'domain/dto';

export async function getPostListHandler(): Promise<PostEntity[]> {
  return getPostList();
}

export async function createPostHandler(request: hapi.Request): Promise<PostEntity> {
  const newPost = request.payload as CreatePostDTO;

  return createPost(newPost);
}