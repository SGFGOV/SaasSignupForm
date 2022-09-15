import { MigrationInterface, QueryRunner } from 'typeorm'

export class addAccountDomainTable1618069192674 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS accounts_domains (
            id bigserial NOT NULL,
            created timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            updated timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            domain varchar(255) UNIQUE NOT NULL,
            data json NOT NULL,
            PRIMARY KEY (id)
          )
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    DROP TABLE accounts_domains
    `)
  }
}
