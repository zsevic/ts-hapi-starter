import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { PostEntity } from './PostEntity';

@Entity({ name: 'author' })
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany((type) => PostEntity, (postEntity) => postEntity.author)
  posts: PostEntity;
}
