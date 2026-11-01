import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_quote_requests_mobile_verification" ADD VALUE 'sms-verified' BEFORE 'development-code-entered';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "quote_requests" ALTER COLUMN "mobile_verification" SET DATA TYPE text;
  ALTER TABLE "quote_requests" ALTER COLUMN "mobile_verification" SET DEFAULT 'development-code-entered'::text;
  DROP TYPE "public"."enum_quote_requests_mobile_verification";
  CREATE TYPE "public"."enum_quote_requests_mobile_verification" AS ENUM('development-code-entered');
  ALTER TABLE "quote_requests" ALTER COLUMN "mobile_verification" SET DEFAULT 'development-code-entered'::"public"."enum_quote_requests_mobile_verification";
  ALTER TABLE "quote_requests" ALTER COLUMN "mobile_verification" SET DATA TYPE "public"."enum_quote_requests_mobile_verification" USING "mobile_verification"::"public"."enum_quote_requests_mobile_verification";`)
}
