import type { CollectionAfterChangeHook } from "payload";

import {
  describePage,
  renderEnquiryEmailHTML,
  renderEnquiryEmailText,
  type EnquiryEmail,
} from "@/payload/emails/enquiry-notification";

type EnquiryDocument = Record<string, unknown> & { id: number | string; createdAt?: string };

// Emails the site admin once, when a new enquiry is created. Delivery problems are logged rather
// than thrown, so a mail outage never loses the enquiry itself — it is already saved in Payload.
export const notifyAdminOfEnquiry =
  (build: (doc: EnquiryDocument) => Omit<EnquiryEmail, "adminURL" | "submittedAt">): CollectionAfterChangeHook =>
  async ({ collection, doc, operation, req }) => {
    if (operation !== "create") return doc;

    try {
      const siteSettings = await req.payload.findGlobal({ slug: "site-settings", req });
      const adminEmails = (process.env.ADMIN_NOTIFICATION_EMAIL ?? "")
        .split(",")
        .map((address) => address.trim())
        .filter(Boolean);
      const recipient = adminEmails.length ? adminEmails : siteSettings.email;
      const email: EnquiryEmail = {
        ...build(doc),
        submittedAt: doc.createdAt,
        adminURL: `${process.env.NEXT_PUBLIC_SERVER_URL ?? ""}/admin/collections/${collection.slug}/${doc.id}`,
      };

      await req.payload.sendEmail({
        to: recipient,
        replyTo: email.customer.email,
        subject: `[${email.kind} · ${describePage(email.submittedFrom)}] ${email.customer.name} — ${email.topic}`,
        text: renderEnquiryEmailText(email),
        html: renderEnquiryEmailHTML(email),
      });
    } catch (error) {
      req.payload.logger.error({ err: error, msg: `Unable to email the admin about ${collection.slug} ${doc.id}.` });
    }

    return doc;
  };
