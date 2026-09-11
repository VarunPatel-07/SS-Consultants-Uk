import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_boiler_options_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "_homepage_v_version_boiler_options_items" ADD COLUMN "image_id" integer;
  ALTER TABLE "homepage_boiler_options_items" ADD CONSTRAINT "homepage_boiler_options_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_boiler_options_items" ADD CONSTRAINT "_homepage_v_version_boiler_options_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "homepage_boiler_options_items_image_idx" ON "homepage_boiler_options_items" USING btree ("image_id");
  CREATE INDEX "_homepage_v_version_boiler_options_items_image_idx" ON "_homepage_v_version_boiler_options_items" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_boiler_options_items" DROP CONSTRAINT "homepage_boiler_options_items_image_id_media_id_fk";
  
  ALTER TABLE "_homepage_v_version_boiler_options_items" DROP CONSTRAINT "_homepage_v_version_boiler_options_items_image_id_media_id_fk";
  
  DROP INDEX "homepage_boiler_options_items_image_idx";
  DROP INDEX "_homepage_v_version_boiler_options_items_image_idx";
  ALTER TABLE "homepage_boiler_options_items" DROP COLUMN "image_id";
  ALTER TABLE "_homepage_v_version_boiler_options_items" DROP COLUMN "image_id";`)
}
