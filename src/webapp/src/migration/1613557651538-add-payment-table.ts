import { MigrationInterface, QueryRunner } from 'typeorm'

export class addPaymentTable1613557651538 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS payments (
            id bigserial NOT NULL ,
            account_id integer NOT NULL,
            stripe_id varchar(40),
            created timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            updated timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            status varchar(40) NOT NULL,
            data json NOT NULL,
            PRIMARY KEY (id)
          ) 
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
