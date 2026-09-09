import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { FAQs } from "@/collections/FAQs";
import { Media } from "@/collections/Media";
import { Services } from "@/collections/Services";
import { Testimonials } from "@/collections/Testimonials";
import { AboutPage } from "@/globals/AboutPage";
import { ContactPage } from "@/globals/ContactPage";
import { GalleryPage } from "@/globals/GalleryPage";
import { Homepage } from "@/globals/Homepage";
import { CookiePolicy, PrivacyPolicy, TermsAndConditions } from "@/globals/LegalPages";
import { SiteSettings } from "@/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const r2IsConfigured = Boolean(
  process.env.R2_BUCKET_NAME &&
    process.env.R2_BUCKET_ACCESS_KEY_ID &&
    process.env.R2_BUCKET_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET_ENDPOINT,
);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Services, Testimonials, FAQs, Media],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL ?? "",
    },
  }),
  editor: lexicalEditor(),
  globals: [
    Homepage,
    AboutPage,
    ContactPage,
    GalleryPage,
    PrivacyPolicy,
    TermsAndConditions,
    CookiePolicy,
    SiteSettings,
  ],
  plugins: [
    s3Storage({
      bucket: process.env.R2_BUCKET_NAME ?? "",
      collections: { media: true },
      config: {
        credentials: {
          accessKeyId: process.env.R2_BUCKET_ACCESS_KEY_ID ?? "",
          secretAccessKey: process.env.R2_BUCKET_SECRET_ACCESS_KEY ?? "",
        },
        endpoint: process.env.R2_BUCKET_ENDPOINT,
        forcePathStyle: true,
        region: "auto",
      },
      enabled: r2IsConfigured,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET ?? "",
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
