import { MigrationInterface, QueryRunner } from "typeorm";

export class updateSchedulesTable1666399109939 implements MigrationInterface {
    name = 'updateSchedulesTable1666399109939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIMESTAMP NOT NULL`);
    }

}
