import {MigrationInterface, QueryRunner} from "typeorm";

export class modelagemCompleta1616987178250 implements MigrationInterface {
    name = 'modelagemCompleta1616987178250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contents" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "link_content" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "lessonId" varchar, CONSTRAINT "REL_87fa34627ff1511113d3c6f1d0" UNIQUE ("lessonId"))`);
        await queryRunner.query(`CREATE TABLE "lessons" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "classeId" varchar)`);
        await queryRunner.query(`CREATE TABLE "students" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(45) NOT NULL, "key" varchar(45) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "classes" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(255) NOT NULL, "duration" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "classes_students_students" ("classesId" varchar NOT NULL, "studentsId" varchar NOT NULL, PRIMARY KEY ("classesId", "studentsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d96b611e61c20a152a99d62cdb" ON "classes_students_students" ("classesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_934c850b62cfa4f202c17d55e5" ON "classes_students_students" ("studentsId") `);
        await queryRunner.query(`CREATE TABLE "temporary_contents" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "link_content" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "lessonId" varchar, CONSTRAINT "REL_87fa34627ff1511113d3c6f1d0" UNIQUE ("lessonId"), CONSTRAINT "FK_87fa34627ff1511113d3c6f1d0e" FOREIGN KEY ("lessonId") REFERENCES "lessons" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contents"("id", "description", "link_content", "created_at", "updated_at", "lessonId") SELECT "id", "description", "link_content", "created_at", "updated_at", "lessonId" FROM "contents"`);
        await queryRunner.query(`DROP TABLE "contents"`);
        await queryRunner.query(`ALTER TABLE "temporary_contents" RENAME TO "contents"`);
        await queryRunner.query(`CREATE TABLE "temporary_lessons" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "classeId" varchar, CONSTRAINT "FK_59fbe91c4ef1fd80b30f070b715" FOREIGN KEY ("classeId") REFERENCES "classes" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_lessons"("id", "description", "created_at", "updated_at", "classeId") SELECT "id", "description", "created_at", "updated_at", "classeId" FROM "lessons"`);
        await queryRunner.query(`DROP TABLE "lessons"`);
        await queryRunner.query(`ALTER TABLE "temporary_lessons" RENAME TO "lessons"`);
        await queryRunner.query(`DROP INDEX "IDX_d96b611e61c20a152a99d62cdb"`);
        await queryRunner.query(`DROP INDEX "IDX_934c850b62cfa4f202c17d55e5"`);
        await queryRunner.query(`CREATE TABLE "temporary_classes_students_students" ("classesId" varchar NOT NULL, "studentsId" varchar NOT NULL, CONSTRAINT "FK_d96b611e61c20a152a99d62cdbf" FOREIGN KEY ("classesId") REFERENCES "classes" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_934c850b62cfa4f202c17d55e5e" FOREIGN KEY ("studentsId") REFERENCES "students" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("classesId", "studentsId"))`);
        await queryRunner.query(`INSERT INTO "temporary_classes_students_students"("classesId", "studentsId") SELECT "classesId", "studentsId" FROM "classes_students_students"`);
        await queryRunner.query(`DROP TABLE "classes_students_students"`);
        await queryRunner.query(`ALTER TABLE "temporary_classes_students_students" RENAME TO "classes_students_students"`);
        await queryRunner.query(`CREATE INDEX "IDX_d96b611e61c20a152a99d62cdb" ON "classes_students_students" ("classesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_934c850b62cfa4f202c17d55e5" ON "classes_students_students" ("studentsId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_934c850b62cfa4f202c17d55e5"`);
        await queryRunner.query(`DROP INDEX "IDX_d96b611e61c20a152a99d62cdb"`);
        await queryRunner.query(`ALTER TABLE "classes_students_students" RENAME TO "temporary_classes_students_students"`);
        await queryRunner.query(`CREATE TABLE "classes_students_students" ("classesId" varchar NOT NULL, "studentsId" varchar NOT NULL, PRIMARY KEY ("classesId", "studentsId"))`);
        await queryRunner.query(`INSERT INTO "classes_students_students"("classesId", "studentsId") SELECT "classesId", "studentsId" FROM "temporary_classes_students_students"`);
        await queryRunner.query(`DROP TABLE "temporary_classes_students_students"`);
        await queryRunner.query(`CREATE INDEX "IDX_934c850b62cfa4f202c17d55e5" ON "classes_students_students" ("studentsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d96b611e61c20a152a99d62cdb" ON "classes_students_students" ("classesId") `);
        await queryRunner.query(`ALTER TABLE "lessons" RENAME TO "temporary_lessons"`);
        await queryRunner.query(`CREATE TABLE "lessons" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "classeId" varchar)`);
        await queryRunner.query(`INSERT INTO "lessons"("id", "description", "created_at", "updated_at", "classeId") SELECT "id", "description", "created_at", "updated_at", "classeId" FROM "temporary_lessons"`);
        await queryRunner.query(`DROP TABLE "temporary_lessons"`);
        await queryRunner.query(`ALTER TABLE "contents" RENAME TO "temporary_contents"`);
        await queryRunner.query(`CREATE TABLE "contents" ("id" varchar PRIMARY KEY NOT NULL, "description" varchar(255) NOT NULL, "link_content" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "lessonId" varchar, CONSTRAINT "REL_87fa34627ff1511113d3c6f1d0" UNIQUE ("lessonId"))`);
        await queryRunner.query(`INSERT INTO "contents"("id", "description", "link_content", "created_at", "updated_at", "lessonId") SELECT "id", "description", "link_content", "created_at", "updated_at", "lessonId" FROM "temporary_contents"`);
        await queryRunner.query(`DROP TABLE "temporary_contents"`);
        await queryRunner.query(`DROP INDEX "IDX_934c850b62cfa4f202c17d55e5"`);
        await queryRunner.query(`DROP INDEX "IDX_d96b611e61c20a152a99d62cdb"`);
        await queryRunner.query(`DROP TABLE "classes_students_students"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "lessons"`);
        await queryRunner.query(`DROP TABLE "contents"`);
    }

}
