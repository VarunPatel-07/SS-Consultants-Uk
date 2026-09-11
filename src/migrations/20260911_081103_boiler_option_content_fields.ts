import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_boiler_options_items_bullet_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "_homepage_v_version_boiler_options_items_bullet_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "homepage_boiler_options_items" ADD COLUMN "highlight" varchar;
  ALTER TABLE "homepage_boiler_options_items" ADD COLUMN "note" varchar;
  ALTER TABLE "homepage_boiler_options_items" ADD COLUMN "cta_label" varchar DEFAULT 'Get a Quote for This Boiler';
  ALTER TABLE "_homepage_v_version_boiler_options_items" ADD COLUMN "highlight" varchar;
  ALTER TABLE "_homepage_v_version_boiler_options_items" ADD COLUMN "note" varchar;
  ALTER TABLE "_homepage_v_version_boiler_options_items" ADD COLUMN "cta_label" varchar DEFAULT 'Get a Quote for This Boiler';
  ALTER TABLE "homepage_boiler_options_items_bullet_points" ADD CONSTRAINT "homepage_boiler_options_items_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_boiler_options_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_boiler_options_items_bullet_points" ADD CONSTRAINT "_homepage_v_version_boiler_options_items_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_boiler_options_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_boiler_options_items_bullet_points_order_idx" ON "homepage_boiler_options_items_bullet_points" USING btree ("_order");
  CREATE INDEX "homepage_boiler_options_items_bullet_points_parent_id_idx" ON "homepage_boiler_options_items_bullet_points" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_version_boiler_options_items_bullet_points_order_idx" ON "_homepage_v_version_boiler_options_items_bullet_points" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_boiler_options_items_bullet_points_parent_id_idx" ON "_homepage_v_version_boiler_options_items_bullet_points" USING btree ("_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_boiler_options_items_bullet_points" CASCADE;
  DROP TABLE "_homepage_v_version_boiler_options_items_bullet_points" CASCADE;
  ALTER TABLE "homepage_boiler_options_items" DROP COLUMN "highlight";
  ALTER TABLE "homepage_boiler_options_items" DROP COLUMN "note";
  ALTER TABLE "homepage_boiler_options_items" DROP COLUMN "cta_label";
  ALTER TABLE "_homepage_v_version_boiler_options_items" DROP COLUMN "highlight";
  ALTER TABLE "_homepage_v_version_boiler_options_items" DROP COLUMN "note";
  ALTER TABLE "_homepage_v_version_boiler_options_items" DROP COLUMN "cta_label";`)
}
