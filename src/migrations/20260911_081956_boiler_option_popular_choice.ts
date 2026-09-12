import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_boiler_options_items" ADD COLUMN "popular_choice" boolean DEFAULT false;
  ALTER TABLE "_homepage_v_version_boiler_options_items" ADD COLUMN "popular_choice" boolean DEFAULT false;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_boiler_options_items" DROP COLUMN "popular_choice";
  ALTER TABLE "_homepage_v_version_boiler_options_items" DROP COLUMN "popular_choice";`)
}
