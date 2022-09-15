import { MigrationInterface, QueryRunner } from 'typeorm'

export class updatePlansStructure1627552793068 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS plans
    `)

    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS plans (
            id bigserial NOT NULL,
            created timestamp NOT NULL DEFAULT current_timestamp(6),
            updated timestamp NOT NULL DEFAULT current_timestamp(6),
            data json NOT NULL,
            PRIMARY KEY (id)
        ) 
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}

/*
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`)),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
*/
