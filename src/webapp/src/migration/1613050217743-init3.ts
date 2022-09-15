import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1613050217743 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS accounts_users (
            id bigserial  NOT NULL,
            account_id integer NOT NULL,
            user_id integer NOT NULL,
            PRIMARY KEY (id)
          ) 
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
