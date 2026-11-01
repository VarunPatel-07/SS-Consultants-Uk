import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contact_enquiries_status" AS ENUM('new', 'contacted', 'closed');
  CREATE TABLE "contact_enquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "enum_contact_enquiries_status" DEFAULT 'new' NOT NULL,
  	"submitted_from" varchar NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"service" varchar NOT NULL,
  	"subject" varchar,
  	"message" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "contact_enquiries_id" integer;
  CREATE INDEX "contact_enquiries_submitted_from_idx" ON "contact_enquiries" USING btree ("submitted_from");
  CREATE INDEX "contact_enquiries_email_idx" ON "contact_enquiries" USING btree ("email");
  CREATE INDEX "contact_enquiries_updated_at_idx" ON "contact_enquiries" USING btree ("updated_at");
  CREATE INDEX "contact_enquiries_created_at_idx" ON "contact_enquiries" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_enquiries_fk" FOREIGN KEY ("contact_enquiries_id") REFERENCES "public"."contact_enquiries"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_contact_enquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_enquiries_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_enquiries" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "contact_enquiries" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_enquiries_fk";
  
  DROP INDEX "payload_locked_documents_rels_contact_enquiries_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "contact_enquiries_id";
  DROP TYPE "public"."enum_contact_enquiries_status";`)
}
