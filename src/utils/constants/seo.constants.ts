// Same variable Payload uses for its server URL: localhost in development, the live domain in production.
export const SITE_URL = (process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "SS Consultants UK Ltd";

// Used whenever a page has no meta image uploaded in the CMS.
export const DEFAULT_META_IMAGE = {
  url: "/images/meta-image.png",
  width: 1200,
  height: 630,
  alt: "SS Consultants UK boiler and heating engineers",
};
