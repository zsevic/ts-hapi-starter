import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { AuthorEntity } from './AuthorEntity';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  text: string;

  @Column()
  authorId: string;

  @ManyToOne((type) => AuthorEntity, (authorEntity) => authorEntity.posts)
  @JoinColumn({ name: 'authorId' })
  author: AuthorEntity;
}
