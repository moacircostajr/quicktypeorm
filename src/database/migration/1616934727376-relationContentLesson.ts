import {MigrationInterface, QueryRunner} from "typeorm";

export class relationContentLesson1616934727376 implements MigrationInterface {
    name = 'relationContentLesson1616934727376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contents" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "UQ_87fa34627ff1511113d3c6f1d0e" UNIQUE ("lessonId")`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_87fa34627ff1511113d3c6f1d0e" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_87fa34627ff1511113d3c6f1d0e"`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "UQ_87fa34627ff1511113d3c6f1d0e"`);
        await queryRunner.query(`ALTER TABLE "contents" DROP COLUMN "lessonId"`);
    }

}
