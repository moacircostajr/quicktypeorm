import {MigrationInterface, QueryRunner} from "typeorm";

export class relationStudentsClasses1616938030943 implements MigrationInterface {
    name = 'relationStudentsClasses1616938030943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classes_students_students" ("classesId" uuid NOT NULL, "studentsId" uuid NOT NULL, CONSTRAINT "PK_44e7ec4f9fe28191e1c044dd198" PRIMARY KEY ("classesId", "studentsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d96b611e61c20a152a99d62cdb" ON "classes_students_students" ("classesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_934c850b62cfa4f202c17d55e5" ON "classes_students_students" ("studentsId") `);
        await queryRunner.query(`ALTER TABLE "classes_students_students" ADD CONSTRAINT "FK_d96b611e61c20a152a99d62cdbf" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes_students_students" ADD CONSTRAINT "FK_934c850b62cfa4f202c17d55e5e" FOREIGN KEY ("studentsId") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes_students_students" DROP CONSTRAINT "FK_934c850b62cfa4f202c17d55e5e"`);
        await queryRunner.query(`ALTER TABLE "classes_students_students" DROP CONSTRAINT "FK_d96b611e61c20a152a99d62cdbf"`);
        await queryRunner.query(`DROP INDEX "IDX_934c850b62cfa4f202c17d55e5"`);
        await queryRunner.query(`DROP INDEX "IDX_d96b611e61c20a152a99d62cdb"`);
        await queryRunner.query(`DROP TABLE "classes_students_students"`);
    }

}
