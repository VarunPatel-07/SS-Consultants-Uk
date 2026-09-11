import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig, type GlobalConfig } from "payload";
import sharp from "sharp";

import { Users } from "@/collections/Users";
import { FAQs } from "@/collections/FAQs";
import { Media } from "@/collections/Media";
import { QuoteRequests } from "@/collections/QuoteRequests";
import { Services } from "@/collections/Services";
import { Testimonials } from "@/collections/Testimonials";
import { AboutPage } from "@/globals/AboutPage";
import { ContactPage } from "@/globals/ContactPage";
import { GalleryPage } from "@/globals/GalleryPage";
import { Homepage } from "@/globals/Homepage";
import { CookiePolicy, PrivacyPolicy, TermsAndConditions } from "@/globals/LegalPages";
import { SiteSettings } from "@/globals/SiteSettings";
import {
  revalidateDeletedService,
  revalidateGlobalPath,
  revalidateService,
  revalidateSiteLayout,
} from "@/payload/hooks/revalidate";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const databaseURL = (process.env.DATABASE_URL ?? "").replace(
  /([?&])sslmode=(prefer|require|verify-ca)(?=&|$)/,
  "$1sslmode=verify-full",
);
const r2IsConfigured = Boolean(
  process.env.R2_BUCKET_NAME &&
    process.env.R2_BUCKET_ACCESS_KEY_ID &&
    process.env.R2_BUCKET_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET_ENDPOINT,
);

const withPathRevalidation = (global: GlobalConfig, publicPath: string): GlobalConfig => ({
  ...global,
  hooks: {
    ...global.hooks,
    afterChange: [...(global.hooks?.afterChange ?? []), revalidateGlobalPath(publicPath)],
  },
});

const ServicesWithRevalidation = {
  ...Services,
  hooks: {
    ...Services.hooks,
    afterChange: [...(Services.hooks?.afterChange ?? []), revalidateService],
    afterDelete: [...(Services.hooks?.afterDelete ?? []), revalidateDeletedService],
  },
};

const SiteSettingsWithRevalidation: GlobalConfig = {
  ...SiteSettings,
  hooks: {
    ...SiteSettings.hooks,
    afterChange: [...(SiteSettings.hooks?.afterChange ?? []), revalidateSiteLayout],
  },
};

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, ServicesWithRevalidation, Testimonials, FAQs, Media, QuoteRequests],
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
    },
  }),
  editor: lexicalEditor(),
  globals: [
    withPathRevalidation(Homepage, "/"),
    withPathRevalidation(AboutPage, "/about"),
    withPathRevalidation(ContactPage, "/contact"),
    withPathRevalidation(GalleryPage, "/gallery"),
    withPathRevalidation(PrivacyPolicy, "/privacy-policy"),
    withPathRevalidation(TermsAndConditions, "/terms-and-conditions"),
    withPathRevalidation(CookiePolicy, "/cookie-policy"),
    SiteSettingsWithRevalidation,
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
