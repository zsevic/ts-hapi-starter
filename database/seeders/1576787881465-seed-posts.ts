import { MigrationInterface, QueryRunner } from 'typeorm';
import { PostEntity } from 'gateways/database/entities';

export class SeedPosts1576787881465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(PostEntity, [{
      id: 'e9408c4a-e4a0-4136-b1f6-c79cec6bedac',
      name: 'post name',
      text: 'post text',
      authorId: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
    }, {
      id: '1d7ac79b-511c-4f73-9887-0a1549c7075f',
      name: 'post 2 name',
      text: 'post 2 text',
      authorId: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
    }, {
      id: '11ac2014-73d4-420e-b9f7-bc175a6d7913',
      name: 'post 3 name',
      text: 'post 3 text',
      authorId: '43b8fc49-0875-4484-b84e-c04a30223cc1',
    }, {
      id: '8cb33a28-ebe8-4d7b-ab47-656a757b6293',
      name: 'post 4 name',
      text: 'post 4 text',
      authorId: '43b8fc49-0875-4484-b84e-c04a30223cc1',
    }, {
      id: '19bf793f-377a-481b-9d54-9bc9e7ddd3f2',
      name: 'post 5 name',
      text: 'post 5 text',
      authorId: '43b8fc49-0875-4484-b84e-c04a30223cc1',
    }]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.clear(PostEntity);
  }
}
