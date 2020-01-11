import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAuthors1576769818650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'author',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
      }, {
        name: 'name',
        type: 'varchar',
      }],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('author');
  }
}
