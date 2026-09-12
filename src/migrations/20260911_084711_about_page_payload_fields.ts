import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "about_page" ADD COLUMN "hero_image_id" integer;
  ALTER TABLE "about_page" ADD COLUMN "hero_badge_title" varchar;
  ALTER TABLE "about_page" ADD COLUMN "hero_badge_description" varchar;
  ALTER TABLE "about_page" ADD COLUMN "hero_reassurance" varchar;
  ALTER TABLE "about_page" ADD COLUMN "principles_image_id" integer;
  ALTER TABLE "about_page" ADD COLUMN "principles_callout_title" varchar;
  ALTER TABLE "about_page" ADD COLUMN "principles_callout_description" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_hero_image_id" integer;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_hero_badge_title" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_hero_badge_description" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_hero_reassurance" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_principles_image_id" integer;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_principles_callout_title" varchar;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_principles_callout_description" varchar;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_principles_image_id_media_id_fk" FOREIGN KEY ("principles_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_page_v" ADD CONSTRAINT "_about_page_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_page_v" ADD CONSTRAINT "_about_page_v_version_principles_image_id_media_id_fk" FOREIGN KEY ("version_principles_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "about_page_hero_hero_image_idx" ON "about_page" USING btree ("hero_image_id");
  CREATE INDEX "about_page_principles_principles_image_idx" ON "about_page" USING btree ("principles_image_id");
  CREATE INDEX "_about_page_v_version_hero_version_hero_image_idx" ON "_about_page_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_about_page_v_version_principles_version_principles_imag_idx" ON "_about_page_v" USING btree ("version_principles_image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "about_page" DROP CONSTRAINT "about_page_hero_image_id_media_id_fk";
  
  ALTER TABLE "about_page" DROP CONSTRAINT "about_page_principles_image_id_media_id_fk";
  
  ALTER TABLE "_about_page_v" DROP CONSTRAINT "_about_page_v_version_hero_image_id_media_id_fk";
  
  ALTER TABLE "_about_page_v" DROP CONSTRAINT "_about_page_v_version_principles_image_id_media_id_fk";
  
  DROP INDEX "about_page_hero_hero_image_idx";
  DROP INDEX "about_page_principles_principles_image_idx";
  DROP INDEX "_about_page_v_version_hero_version_hero_image_idx";
  DROP INDEX "_about_page_v_version_principles_version_principles_imag_idx";
  ALTER TABLE "about_page" DROP COLUMN "hero_image_id";
  ALTER TABLE "about_page" DROP COLUMN "hero_badge_title";
  ALTER TABLE "about_page" DROP COLUMN "hero_badge_description";
  ALTER TABLE "about_page" DROP COLUMN "hero_reassurance";
  ALTER TABLE "about_page" DROP COLUMN "principles_image_id";
  ALTER TABLE "about_page" DROP COLUMN "principles_callout_title";
  ALTER TABLE "about_page" DROP COLUMN "principles_callout_description";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_hero_image_id";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_hero_badge_title";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_hero_badge_description";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_hero_reassurance";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_principles_image_id";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_principles_callout_title";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_principles_callout_description";`)
}
