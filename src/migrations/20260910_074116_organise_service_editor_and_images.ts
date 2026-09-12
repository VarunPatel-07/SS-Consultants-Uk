import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_included_items" ADD COLUMN IF NOT EXISTS "number" varchar;
  ALTER TABLE "services_included_items" ADD COLUMN IF NOT EXISTS "image_id" integer;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "homepage_card_title" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "homepage_card_description" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "homepage_card_image_id" integer;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "homepage_card_cta_label" varchar DEFAULT 'View service';
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "homepage_card_badge" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "hero_image_id" integer;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "cta_header_eyebrow" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "cta_header_title" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "cta_header_highlight" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "cta_header_description" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "cta_reassurance" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "faq_header_eyebrow" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "faq_header_title" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "faq_header_highlight" varchar;
  ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "faq_header_description" varchar;
  ALTER TABLE "_services_v_version_included_items" ADD COLUMN IF NOT EXISTS "number" varchar;
  ALTER TABLE "_services_v_version_included_items" ADD COLUMN IF NOT EXISTS "image_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_homepage_card_title" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_homepage_card_description" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_homepage_card_image_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_homepage_card_cta_label" varchar DEFAULT 'View service';
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_homepage_card_badge" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_hero_image_id" integer;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_cta_header_eyebrow" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_cta_header_title" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_cta_header_highlight" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_cta_header_description" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_cta_reassurance" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_faq_header_eyebrow" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_faq_header_title" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_faq_header_highlight" varchar;
  ALTER TABLE "_services_v" ADD COLUMN IF NOT EXISTS "version_faq_header_description" varchar;
  DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_included_items_image_id_media_id_fk') THEN
      ALTER TABLE "services_included_items" ADD CONSTRAINT "services_included_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_homepage_card_image_id_media_id_fk') THEN
      ALTER TABLE "services" ADD CONSTRAINT "services_homepage_card_image_id_media_id_fk" FOREIGN KEY ("homepage_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_hero_image_id_media_id_fk') THEN
      ALTER TABLE "services" ADD CONSTRAINT "services_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_services_v_version_included_items_image_id_media_id_fk') THEN
      ALTER TABLE "_services_v_version_included_items" ADD CONSTRAINT "_services_v_version_included_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_services_v_version_homepage_card_image_id_media_id_fk') THEN
      ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_homepage_card_image_id_media_id_fk" FOREIGN KEY ("version_homepage_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_services_v_version_hero_image_id_media_id_fk') THEN
      ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
  END $$;
  CREATE INDEX IF NOT EXISTS "services_included_items_image_idx" ON "services_included_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "services_homepage_card_homepage_card_image_idx" ON "services" USING btree ("homepage_card_image_id");
  CREATE INDEX IF NOT EXISTS "services_hero_image_idx" ON "services" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_included_items_image_idx" ON "_services_v_version_included_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_homepage_card_version_homepage_card__idx" ON "_services_v" USING btree ("version_homepage_card_image_id");
  CREATE INDEX IF NOT EXISTS "_services_v_version_version_hero_image_idx" ON "_services_v" USING btree ("version_hero_image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_included_items" DROP CONSTRAINT "services_included_items_image_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_homepage_card_image_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_hero_image_id_media_id_fk";
  
  ALTER TABLE "_services_v_version_included_items" DROP CONSTRAINT "_services_v_version_included_items_image_id_media_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_homepage_card_image_id_media_id_fk";
  
  ALTER TABLE "_services_v" DROP CONSTRAINT "_services_v_version_hero_image_id_media_id_fk";
  
  DROP INDEX "services_included_items_image_idx";
  DROP INDEX "services_homepage_card_homepage_card_image_idx";
  DROP INDEX "services_hero_image_idx";
  DROP INDEX "_services_v_version_included_items_image_idx";
  DROP INDEX "_services_v_version_homepage_card_version_homepage_card__idx";
  DROP INDEX "_services_v_version_version_hero_image_idx";
  ALTER TABLE "services_included_items" DROP COLUMN "number";
  ALTER TABLE "services_included_items" DROP COLUMN "image_id";
  ALTER TABLE "services" DROP COLUMN "homepage_card_title";
  ALTER TABLE "services" DROP COLUMN "homepage_card_description";
  ALTER TABLE "services" DROP COLUMN "homepage_card_image_id";
  ALTER TABLE "services" DROP COLUMN "homepage_card_cta_label";
  ALTER TABLE "services" DROP COLUMN "homepage_card_badge";
  ALTER TABLE "services" DROP COLUMN "hero_image_id";
  ALTER TABLE "services" DROP COLUMN "cta_header_eyebrow";
  ALTER TABLE "services" DROP COLUMN "cta_header_title";
  ALTER TABLE "services" DROP COLUMN "cta_header_highlight";
  ALTER TABLE "services" DROP COLUMN "cta_header_description";
  ALTER TABLE "services" DROP COLUMN "cta_reassurance";
  ALTER TABLE "services" DROP COLUMN "faq_header_eyebrow";
  ALTER TABLE "services" DROP COLUMN "faq_header_title";
  ALTER TABLE "services" DROP COLUMN "faq_header_highlight";
  ALTER TABLE "services" DROP COLUMN "faq_header_description";
  ALTER TABLE "_services_v_version_included_items" DROP COLUMN "number";
  ALTER TABLE "_services_v_version_included_items" DROP COLUMN "image_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_homepage_card_title";
  ALTER TABLE "_services_v" DROP COLUMN "version_homepage_card_description";
  ALTER TABLE "_services_v" DROP COLUMN "version_homepage_card_image_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_homepage_card_cta_label";
  ALTER TABLE "_services_v" DROP COLUMN "version_homepage_card_badge";
  ALTER TABLE "_services_v" DROP COLUMN "version_hero_image_id";
  ALTER TABLE "_services_v" DROP COLUMN "version_cta_header_eyebrow";
  ALTER TABLE "_services_v" DROP COLUMN "version_cta_header_title";
  ALTER TABLE "_services_v" DROP COLUMN "version_cta_header_highlight";
  ALTER TABLE "_services_v" DROP COLUMN "version_cta_header_description";
  ALTER TABLE "_services_v" DROP COLUMN "version_cta_reassurance";
  ALTER TABLE "_services_v" DROP COLUMN "version_faq_header_eyebrow";
  ALTER TABLE "_services_v" DROP COLUMN "version_faq_header_title";
  ALTER TABLE "_services_v" DROP COLUMN "version_faq_header_highlight";
  ALTER TABLE "_services_v" DROP COLUMN "version_faq_header_description";`)
}
