import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "homepage" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "about_page" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_about_page_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "contact_page" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_contact_page_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "gallery_page" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_gallery_page_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "privacy_policy" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_privacy_policy_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "terms_and_conditions" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_terms_and_conditions_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "cookie_policy" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "_cookie_policy_v" ADD COLUMN "version_seo_image_id" integer;
  ALTER TABLE "services" ADD CONSTRAINT "services_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_page_v" ADD CONSTRAINT "_about_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_contact_page_v" ADD CONSTRAINT "_contact_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gallery_page" ADD CONSTRAINT "gallery_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_page_v" ADD CONSTRAINT "_gallery_page_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "privacy_policy" ADD CONSTRAINT "privacy_policy_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_privacy_policy_v" ADD CONSTRAINT "_privacy_policy_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "terms_and_conditions" ADD CONSTRAINT "terms_and_conditions_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_terms_and_conditions_v" ADD CONSTRAINT "_terms_and_conditions_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cookie_policy" ADD CONSTRAINT "cookie_policy_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cookie_policy_v" ADD CONSTRAINT "_cookie_policy_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "services_seo_seo_image_idx" ON "services" USING btree ("seo_image_id");
  CREATE INDEX "_services_v_version_seo_version_seo_image_idx" ON "_services_v" USING btree ("version_seo_image_id");
  CREATE INDEX "homepage_seo_seo_image_idx" ON "homepage" USING btree ("seo_image_id");
  CREATE INDEX "_homepage_v_version_seo_version_seo_image_idx" ON "_homepage_v" USING btree ("version_seo_image_id");
  CREATE INDEX "about_page_seo_seo_image_idx" ON "about_page" USING btree ("seo_image_id");
  CREATE INDEX "_about_page_v_version_seo_version_seo_image_idx" ON "_about_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "contact_page_seo_seo_image_idx" ON "contact_page" USING btree ("seo_image_id");
  CREATE INDEX "_contact_page_v_version_seo_version_seo_image_idx" ON "_contact_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "gallery_page_seo_seo_image_idx" ON "gallery_page" USING btree ("seo_image_id");
  CREATE INDEX "_gallery_page_v_version_seo_version_seo_image_idx" ON "_gallery_page_v" USING btree ("version_seo_image_id");
  CREATE INDEX "privacy_policy_seo_seo_image_idx" ON "privacy_policy" USING btree ("seo_image_id");
  CREATE INDEX "_privacy_policy_v_version_seo_version_seo_image_idx" ON "_privacy_policy_v" USING btree ("version_seo_image_id");
  CREATE INDEX "terms_and_conditions_seo_seo_image_idx" ON "terms_and_conditions" USING btree ("seo_image_id");
  CREATE INDEX "_terms_and_conditions_v_version_seo_version_seo_image_idx" ON "_terms_and_conditions_v" USING btree ("version_seo_image_id");
  CREATE INDEX "cookie_policy_seo_seo_image_idx" ON "cookie_policy" USING btree ("seo_image_id");
  CREATE INDEX "_cookie_policy_v_version_seo_version_seo_image_idx" ON "_cookie_policy_v" USING btree ("version_seo_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services" DROP CONSTRAINT "services_seo_image_id_media_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "homepage" DROP CONSTRAINT "homepage_seo_image_id_media_id_fk";
  
  ALTER TABLE "_homepage_v" DROP CONSTRAINT "_homepage_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "about_page" DROP CONSTRAINT "about_page_seo_image_id_media_id_fk";
  
  ALTER TABLE "_about_page_v" DROP CONSTRAINT "_about_page_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "contact_page" DROP CONSTRAINT "contact_page_seo_image_id_media_id_fk";
  
  ALTER TABLE "_contact_page_v" DROP CONSTRAINT "_contact_page_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "gallery_page" DROP CONSTRAINT "gallery_page_seo_image_id_media_id_fk";
  
  ALTER TABLE "_gallery_page_v" DROP CONSTRAINT "_gallery_page_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "privacy_policy" DROP CONSTRAINT "privacy_policy_seo_image_id_media_id_fk";
  
  ALTER TABLE "_privacy_policy_v" DROP CONSTRAINT "_privacy_policy_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "terms_and_conditions" DROP CONSTRAINT "terms_and_conditions_seo_image_id_media_id_fk";
  
  ALTER TABLE "_terms_and_conditions_v" DROP CONSTRAINT "_terms_and_conditions_v_version_seo_image_id_media_id_fk";
  
  ALTER TABLE "cookie_policy" DROP CONSTRAINT "cookie_policy_seo_image_id_media_id_fk";
  
  ALTER TABLE "_cookie_policy_v" DROP CONSTRAINT "_cookie_policy_v_version_seo_image_id_media_id_fk";
  
  DROP INDEX "services_seo_seo_image_idx";
  DROP INDEX "_services_v_version_seo_version_seo_image_idx";
  DROP INDEX "homepage_seo_seo_image_idx";
  DROP INDEX "_homepage_v_version_seo_version_seo_image_idx";
  DROP INDEX "about_page_seo_seo_image_idx";
  DROP INDEX "_about_page_v_version_seo_version_seo_image_idx";
  DROP INDEX "contact_page_seo_seo_image_idx";
  DROP INDEX "_contact_page_v_version_seo_version_seo_image_idx";
  DROP INDEX "gallery_page_seo_seo_image_idx";
  DROP INDEX "_gallery_page_v_version_seo_version_seo_image_idx";
  DROP INDEX "privacy_policy_seo_seo_image_idx";
  DROP INDEX "_privacy_policy_v_version_seo_version_seo_image_idx";
  DROP INDEX "terms_and_conditions_seo_seo_image_idx";
  DROP INDEX "_terms_and_conditions_v_version_seo_version_seo_image_idx";
  DROP INDEX "cookie_policy_seo_seo_image_idx";
  DROP INDEX "_cookie_policy_v_version_seo_version_seo_image_idx";
  ALTER TABLE "services" DROP COLUMN "seo_image_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "homepage" DROP COLUMN "seo_image_id";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "about_page" DROP COLUMN "seo_image_id";
  ALTER TABLE "_about_page_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "contact_page" DROP COLUMN "seo_image_id";
  ALTER TABLE "_contact_page_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "gallery_page" DROP COLUMN "seo_image_id";
  ALTER TABLE "_gallery_page_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "privacy_policy" DROP COLUMN "seo_image_id";
  ALTER TABLE "_privacy_policy_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "terms_and_conditions" DROP COLUMN "seo_image_id";
  ALTER TABLE "_terms_and_conditions_v" DROP COLUMN "version_seo_image_id";
  ALTER TABLE "cookie_policy" DROP COLUMN "seo_image_id";
  ALTER TABLE "_cookie_policy_v" DROP COLUMN "version_seo_image_id";`)
}
