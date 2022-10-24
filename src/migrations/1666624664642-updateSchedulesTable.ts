import { MigrationInterface, QueryRunner } from "typeorm";

export class updateSchedulesTable1666624664642 implements MigrationInterface {
    name = 'updateSchedulesTable1666624664642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "date" TIMESTAMP NOT NULL`);
    }

}
