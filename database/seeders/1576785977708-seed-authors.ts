import { MigrationInterface, QueryRunner } from 'typeorm';
import { AuthorEntity } from 'gateways/database/entities';

export class seedAuthors1576785977708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager
            .insert(AuthorEntity, [{
                id: 'ff64b6b7-deb6-425c-8511-fdc3666c4add',
                name: 'author 1',
            }, {
                id: '43b8fc49-0875-4484-b84e-c04a30223cc1',
                name: 'author 2',
            }]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.manager
            .clear(AuthorEntity);
    }

}
