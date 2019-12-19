import { Post } from 'domain/entities';
import { postRepository } from 'gateways';
import { PostEntity } from 'gateways/database/entities';
import { CreatePostDTO } from 'domain/dto';

export async function createPost(post: CreatePostDTO): Promise<PostEntity> {
  return postRepository.createPost(post);
}