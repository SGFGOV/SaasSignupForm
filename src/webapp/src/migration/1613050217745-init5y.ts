import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1613050217745 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS users (
            id bigserial NOT NULL,
            email varchar(255) NOT NULL UNIQUE,
            password varchar(255) NOT NULL,
            "isAdmin" integer NOT NULL DEFAULT 0,
            "isActive" integer NOT NULL DEFAULT 1,
            created timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            updated timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            "emailConfirmationToken" varchar(255) NOT NULL DEFAULT '',
            "resetPasswordToken" varchar(255) NOT NULL DEFAULT '',
            data json NOT NULL ,
            PRIMARY KEY (id)
            )
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
