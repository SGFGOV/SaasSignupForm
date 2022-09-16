import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1613050217744 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS users_credentials (
            id bigserial NOT NULL,
            credential varchar(255) NOT NULL UNIQUE,
            "userId" integer NOT NULL,
            json json NOT NULL,
            PRIMARY KEY (id)
            )
          `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
