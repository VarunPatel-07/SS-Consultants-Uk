import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "homepage" ALTER COLUMN "about_header_description" SET DATA TYPE jsonb USING
    CASE WHEN "about_header_description" IS NULL THEN NULL ELSE
      jsonb_build_object('root', jsonb_build_object(
        'type', 'root', 'children', jsonb_build_array(jsonb_build_object(
          'type', 'paragraph', 'children', jsonb_build_array(jsonb_build_object(
            'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal', 'style', '',
            'text', "about_header_description", 'version', 1
          )), 'direction', 'ltr', 'format', '', 'indent', 0, 'version', 1,
          'textFormat', 0, 'textStyle', ''
        )), 'direction', 'ltr', 'format', '', 'indent', 0, 'version', 1
      ))
    END;
  ALTER TABLE "_homepage_v" ALTER COLUMN "version_about_header_description" SET DATA TYPE jsonb USING
    CASE WHEN "version_about_header_description" IS NULL THEN NULL ELSE
      jsonb_build_object('root', jsonb_build_object(
        'type', 'root', 'children', jsonb_build_array(jsonb_build_object(
          'type', 'paragraph', 'children', jsonb_build_array(jsonb_build_object(
            'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal', 'style', '',
            'text', "version_about_header_description", 'version', 1
          )), 'direction', 'ltr', 'format', '', 'indent', 0, 'version', 1,
          'textFormat', 0, 'textStyle', ''
        )), 'direction', 'ltr', 'format', '', 'indent', 0, 'version', 1
      ))
    END;
  ALTER TABLE "homepage" ADD COLUMN IF NOT EXISTS "about_image_id" integer;
  ALTER TABLE "_homepage_v" ADD COLUMN IF NOT EXISTS "version_about_image_id" integer;
  DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'homepage_about_image_id_media_id_fk') THEN
      ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_image_id_media_id_fk" FOREIGN KEY ("about_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_homepage_v_version_about_image_id_media_id_fk') THEN
      ALTER TABLE "_homepage_v" ADD CONSTRAINT "_homepage_v_version_about_image_id_media_id_fk" FOREIGN KEY ("version_about_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    END IF;
  END $$;
  CREATE INDEX IF NOT EXISTS "homepage_about_about_image_idx" ON "homepage" USING btree ("about_image_id");
  CREATE INDEX IF NOT EXISTS "_homepage_v_version_about_version_about_image_idx" ON "_homepage_v" USING btree ("version_about_image_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" DROP CONSTRAINT "homepage_about_image_id_media_id_fk";
  
  ALTER TABLE "_homepage_v" DROP CONSTRAINT "_homepage_v_version_about_image_id_media_id_fk";
  
  DROP INDEX "homepage_about_about_image_idx";
  DROP INDEX "_homepage_v_version_about_version_about_image_idx";
  ALTER TABLE "homepage" ALTER COLUMN "about_header_description" SET DATA TYPE varchar USING
    "about_header_description" #>> '{root,children,0,children,0,text}';
  ALTER TABLE "_homepage_v" ALTER COLUMN "version_about_header_description" SET DATA TYPE varchar USING
    "version_about_header_description" #>> '{root,children,0,children,0,text}';
  ALTER TABLE "homepage" DROP COLUMN "about_image_id";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_about_image_id";
  `);
}
