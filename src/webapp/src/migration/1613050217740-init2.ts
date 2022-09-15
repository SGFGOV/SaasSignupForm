import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1613050217740 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS settings (
            id bigserial NOT NULL ,
            category varchar(255) NOT NULL,
            json json NOT NULL,
            created timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            updated timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            PRIMARY KEY (id)
          )
        `.replace("\n","\r"))
  }

   public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
