import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// Media served from the public R2 domain must be allowed for next/image optimisation.
const r2PublicURL = process.env.R2_PUBLIC_URL ? new URL(process.env.R2_PUBLIC_URL) : null;

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: r2PublicURL
      ? [{ protocol: r2PublicURL.protocol === "http:" ? "http" : "https", hostname: r2PublicURL.hostname, pathname: "/**" }]
      : [],
  },
};

export default withPayload(nextConfig);
