import { type MigrateDownArgs, type MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "homepage_rels" ADD COLUMN IF NOT EXISTS "media_id" integer;
    ALTER TABLE "_homepage_v_rels" ADD COLUMN IF NOT EXISTS "media_id" integer;
    ALTER TABLE "about_page_rels" ADD COLUMN IF NOT EXISTS "media_id" integer;
    ALTER TABLE "_about_page_v_rels" ADD COLUMN IF NOT EXISTS "media_id" integer;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'homepage_rels_media_fk') THEN
        ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_homepage_v_rels_media_fk') THEN
        ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'about_page_rels_media_fk') THEN
        ALTER TABLE "about_page_rels" ADD CONSTRAINT "about_page_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = '_about_page_v_rels_media_fk') THEN
        ALTER TABLE "_about_page_v_rels" ADD CONSTRAINT "_about_page_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    CREATE INDEX IF NOT EXISTS "homepage_rels_media_id_idx" ON "homepage_rels" USING btree ("media_id");
    CREATE INDEX IF NOT EXISTS "_homepage_v_rels_media_id_idx" ON "_homepage_v_rels" USING btree ("media_id");
    CREATE INDEX IF NOT EXISTS "about_page_rels_media_id_idx" ON "about_page_rels" USING btree ("media_id");
    CREATE INDEX IF NOT EXISTS "_about_page_v_rels_media_id_idx" ON "_about_page_v_rels" USING btree ("media_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "homepage_rels" DROP CONSTRAINT "homepage_rels_media_fk";
    ALTER TABLE "_homepage_v_rels" DROP CONSTRAINT "_homepage_v_rels_media_fk";
    ALTER TABLE "about_page_rels" DROP CONSTRAINT "about_page_rels_media_fk";
    ALTER TABLE "_about_page_v_rels" DROP CONSTRAINT "_about_page_v_rels_media_fk";

    DROP INDEX "homepage_rels_media_id_idx";
    DROP INDEX "_homepage_v_rels_media_id_idx";
    DROP INDEX "about_page_rels_media_id_idx";
    DROP INDEX "_about_page_v_rels_media_id_idx";

    ALTER TABLE "homepage_rels" DROP COLUMN "media_id";
    ALTER TABLE "_homepage_v_rels" DROP COLUMN "media_id";
    ALTER TABLE "about_page_rels" DROP COLUMN "media_id";
    ALTER TABLE "_about_page_v_rels" DROP COLUMN "media_id";
  `);
}
