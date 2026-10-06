import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

import type { QuoteQuestion } from '@/payload-types'

type SeedOption = { value: string; label: string; icon: QuoteQuestion['options'][number]['icon']; description?: string; next?: string }
type SeedQuestion = Pick<QuoteQuestion, 'key' | 'eyebrow' | 'label'> & {
  description?: string
  summaryLabel?: string
  isFirstQuestion?: boolean
  options: SeedOption[]
}

// The questions previously hard-coded in boiler-quote.constants.ts. Ordered so every `next`
// question is created before the options that point at it.
const seedQuestions: SeedQuestion[] = [
  {
    key: 'location',
    eyebrow: 'A final detail',
    label: 'Where will the boiler be installed?',
    description: 'Choose the closest match. We can confirm the exact position during your survey.',
    options: [
      { value: 'kitchen', label: 'Kitchen', icon: 'home' },
      { value: 'utility-room', label: 'Utility room', icon: 'home' },
      { value: 'garage', label: 'Garage', icon: 'home' },
      { value: 'airing-cupboard', label: 'Airing cupboard', icon: 'home' },
      { value: 'other', label: 'Somewhere else', icon: 'settings' },
    ],
  },
  {
    key: 'fuel',
    eyebrow: 'About your property',
    label: 'What fuel does your home use?',
    options: [
      { value: 'mains-gas', label: 'Mains gas', icon: 'flame', next: 'location' },
      { value: 'lpg', label: 'LPG', icon: 'flame', next: 'location' },
      { value: 'oil', label: 'Oil', icon: 'flame', next: 'location' },
      { value: 'electric', label: 'Electric', icon: 'sparkles', next: 'location' },
      { value: 'not-sure', label: 'I’m not sure', icon: 'settings', next: 'location' },
    ],
  },
  {
    key: 'boiler-type',
    eyebrow: 'Your boiler',
    label: 'Which type of boiler do you need?',
    description: 'If you are unsure, choose that option and our engineer will advise you.',
    summaryLabel: 'Boiler',
    options: [
      { value: 'combi', label: 'Combi boiler', icon: 'boiler', description: 'Heating and hot water from one compact unit', next: 'fuel' },
      { value: 'system', label: 'System boiler', icon: 'radiator', description: 'Works with a separate hot-water cylinder', next: 'fuel' },
      { value: 'regular', label: 'Regular boiler', icon: 'home', description: 'Traditional boiler with tanks and a cylinder', next: 'fuel' },
      { value: 'not-sure', label: 'I’m not sure', icon: 'settings', description: 'We’ll help you choose the right system', next: 'fuel' },
    ],
  },
  {
    key: 'job',
    eyebrow: 'Tell us about the job',
    label: 'What do you need help with?',
    options: [
      { value: 'new-installation', label: 'New installation', icon: 'sparkles', next: 'boiler-type' },
      { value: 'replacement', label: 'Replace my boiler', icon: 'boiler', next: 'boiler-type' },
      { value: 'repair', label: 'Boiler repair', icon: 'wrench', next: 'fuel' },
      { value: 'service', label: 'Boiler service', icon: 'shield', next: 'fuel' },
    ],
  },
  {
    key: 'service',
    eyebrow: 'Let’s build your quote',
    label: 'What can we help you with?',
    description: 'Answer a few quick questions so we can understand the work you need.',
    isFirstQuestion: true,
    options: [
      { value: 'boilers', label: 'Boilers', icon: 'boiler', description: 'Installation, replacement, repair or servicing', next: 'job' },
      { value: 'central-heating', label: 'Central heating', icon: 'radiator', description: 'Radiators, controls and complete heating systems', next: 'fuel' },
      { value: 'other', label: 'Something else', icon: 'wrench', description: 'Tell us about another heating requirement', next: 'location' },
    ],
  },
]

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_quote_questions_options_icon" AS ENUM('boiler', 'flame', 'home', 'radiator', 'settings', 'shield', 'sparkles', 'wrench');
  CREATE TABLE "quote_questions_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar,
  	"icon" "enum_quote_questions_options_icon" DEFAULT 'wrench',
  	"next_question_id" integer
  );
  
  CREATE TABLE "quote_questions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"is_first_question" boolean DEFAULT false,
  	"eyebrow" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar,
  	"summary_label" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "quote_questions_id" integer;
  ALTER TABLE "quote_questions_options" ADD CONSTRAINT "quote_questions_options_next_question_id_quote_questions_id_fk" FOREIGN KEY ("next_question_id") REFERENCES "public"."quote_questions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "quote_questions_options" ADD CONSTRAINT "quote_questions_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quote_questions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "quote_questions_options_order_idx" ON "quote_questions_options" USING btree ("_order");
  CREATE INDEX "quote_questions_options_parent_id_idx" ON "quote_questions_options" USING btree ("_parent_id");
  CREATE INDEX "quote_questions_options_next_question_idx" ON "quote_questions_options" USING btree ("next_question_id");
  CREATE UNIQUE INDEX "quote_questions_key_idx" ON "quote_questions" USING btree ("key");
  CREATE INDEX "quote_questions_updated_at_idx" ON "quote_questions" USING btree ("updated_at");
  CREATE INDEX "quote_questions_created_at_idx" ON "quote_questions" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quote_questions_fk" FOREIGN KEY ("quote_questions_id") REFERENCES "public"."quote_questions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_quote_questions_id_idx" ON "payload_locked_documents_rels" USING btree ("quote_questions_id");`)

  const idsByKey = new Map<string, number>()
  for (const { options, ...question } of seedQuestions) {
    const created = await payload.create({
      collection: 'quote-questions',
      req,
      data: {
        ...question,
        options: options.map(({ next, ...option }) => ({ ...option, nextQuestion: next ? idsByKey.get(next) : undefined })),
      },
    })
    idsByKey.set(created.key, created.id)
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "quote_questions_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "quote_questions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "quote_questions_options" CASCADE;
  DROP TABLE "quote_questions" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_quote_questions_fk";
  
  DROP INDEX "payload_locked_documents_rels_quote_questions_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "quote_questions_id";
  DROP TYPE "public"."enum_quote_questions_options_icon";`)
}
