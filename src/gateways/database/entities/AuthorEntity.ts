import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostEntity } from 'gateways/database/entities';
import { Post } from 'domain/entities';

@Entity()
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(type => PostEntity, postEntity => postEntity.author)
  posts: PostEntity;
}