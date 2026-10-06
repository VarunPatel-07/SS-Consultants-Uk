import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "quote_questions" ADD COLUMN "admin_title" varchar;
  UPDATE "quote_questions" SET "admin_title" = "label" || ' (' || "key" || ')';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "quote_questions" DROP COLUMN "admin_title";`)
}
