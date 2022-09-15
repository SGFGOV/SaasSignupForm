import { MigrationInterface, QueryRunner } from 'typeorm'

export class addPlanEntity1613553725144 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS plans (
            id bigserial NOT NULL,
            created timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            updated timestamp(6) NOT NULL DEFAULT current_timestamp(6),
            product json NOT NULL,
            prices json NOT NULL,
            plan json NOT NULL,
            PRIMARY KEY (id)
          ) 
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
