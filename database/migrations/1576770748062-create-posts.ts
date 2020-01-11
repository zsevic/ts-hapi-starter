import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePosts1576770748062 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'post',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
      }, {
        name: 'name',
        type: 'varchar',
      }, {
        name: 'text',
        type: 'varchar',
      }, {
        name: 'authorId',
        type: 'uuid',
      }],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('post');
  }
}
