import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AuthorEntity } from 'gateways/database/entities';
import { Author } from 'domain/entities';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  text: string;

  @Column()
  authorId: string;

  @ManyToOne(type => AuthorEntity, authorEntity => authorEntity.posts)
  @JoinColumn({ name: 'authorId' })
  author: AuthorEntity;
}