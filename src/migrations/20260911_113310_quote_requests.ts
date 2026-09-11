import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_quote_requests_status" AS ENUM('new', 'contacted', 'quote-prepared', 'closed');
  CREATE TYPE "public"."enum_quote_requests_mobile_verification" AS ENUM('development-code-entered');
  CREATE TABLE "quote_requests_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question_id" varchar NOT NULL,
  	"question" varchar NOT NULL,
  	"option_id" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "quote_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "enum_quote_requests_status" DEFAULT 'new' NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"mobile" varchar NOT NULL,
  	"postcode" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"mobile_verification" "enum_quote_requests_mobile_verification" DEFAULT 'development-code-entered' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "quote_requests_id" integer;
  ALTER TABLE "quote_requests_answers" ADD CONSTRAINT "quote_requests_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quote_requests"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "quote_requests_answers_order_idx" ON "quote_requests_answers" USING btree ("_order");
  CREATE INDEX "quote_requests_answers_parent_id_idx" ON "quote_requests_answers" USING btree ("_parent_id");
  CREATE INDEX "quote_requests_email_idx" ON "quote_requests" USING btree ("email");
  CREATE INDEX "quote_requests_mobile_idx" ON "quote_requests" USING btree ("mobile");
  CREATE INDEX "quote_requests_updated_at_idx" ON "quote_requests" USING btree ("updated_at");
  CREATE INDEX "quote_requests_created_at_idx" ON "quote_requests" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quote_requests_fk" FOREIGN KEY ("quote_requests_id") REFERENCES "public"."quote_requests"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_quote_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("quote_requests_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "quote_requests_answers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "quote_requests" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "quote_requests_answers" CASCADE;
  DROP TABLE "quote_requests" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_quote_requests_fk";
  
  DROP INDEX "payload_locked_documents_rels_quote_requests_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "quote_requests_id";
  DROP TYPE "public"."enum_quote_requests_status";
  DROP TYPE "public"."enum_quote_requests_mobile_verification";`)
}
