import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1598581057826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        `);
    await queryRunner.createTable(
      new Table({
        name: "user_table",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
          },
          {
            name: "email",
            type: "varchar",
            length: "50",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            length: "50",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_table");
    await queryRunner.query(`
            DROP EXTENSION "uuid-ossp";
        `);
  }
}
