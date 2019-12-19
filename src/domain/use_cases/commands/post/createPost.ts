import { Post } from 'domain/entities';
import { postRepository } from 'gateways';
import { CreatePostDTO } from 'domain/dto';

export async function createPost(post: CreatePostDTO): Promise<Post> {
  return postRepository.createPost(post);
}
