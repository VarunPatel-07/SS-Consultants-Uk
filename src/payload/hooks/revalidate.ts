import { revalidatePath } from "next/cache";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from "payload";

type VersionedDocument = {
  _status?: "draft" | "published" | null;
};

const wasOrIsPublished = (doc?: VersionedDocument | null, previousDoc?: VersionedDocument | null) =>
  doc?._status === "published" || previousDoc?._status === "published";

export const revalidateGlobalPath = (path: string): GlobalAfterChangeHook =>
  ({ doc, previousDoc, req }) => {
    if (!wasOrIsPublished(doc, previousDoc)) return doc;

    req.payload.logger.info(`Revalidating ${path}`);
    revalidatePath(path);
    return doc;
  };

export const revalidateSiteLayout: GlobalAfterChangeHook = ({ doc, req }) => {
  req.payload.logger.info("Revalidating the public site layout");
  revalidatePath("/", "layout");
  return doc;
};

const homepageCardChanged = (doc: Record<string, unknown>, previousDoc: Record<string, unknown>) =>
  doc.slug !== previousDoc.slug ||
  doc.title !== previousDoc.title ||
  doc.label !== previousDoc.label ||
  JSON.stringify(doc.homepageCard) !== JSON.stringify(previousDoc.homepageCard);

export const revalidateService: CollectionAfterChangeHook = ({ doc, previousDoc, req }) => {
  if (!wasOrIsPublished(doc, previousDoc)) return doc;

  const currentPath = `/services/${doc.slug}`;
  req.payload.logger.info(`Revalidating ${currentPath}`);
  revalidatePath(currentPath);

  if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
    revalidatePath(`/services/${previousDoc.slug}`);
    revalidatePath("/sitemap.xml");
    revalidatePath("/sitemap");
  }

  if (homepageCardChanged(doc, previousDoc ?? {})) {
    revalidatePath("/");
    revalidatePath("/about");
  }

  return doc;
};

export const revalidateDeletedService: CollectionAfterDeleteHook = ({ doc, req }) => {
  if (doc._status && doc._status !== "published") return doc;

  req.payload.logger.info(`Revalidating deleted service /services/${doc.slug}`);
  revalidatePath(`/services/${doc.slug}`);
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/sitemap");
  revalidatePath("/sitemap.xml");
  return doc;
};
