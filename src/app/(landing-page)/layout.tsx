import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import SmoothScrollProvider from "@/components/sections/common/smoothScrollProvider";
import { SiteSettingsProvider } from "@/components/providers/site-settings-provider";
import { getWebsiteSettings } from "@/lib/payload/site-settings";
import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ssc-uk.netlify.app";
const META_IMAGE = "/images/meta-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SS Consultants UK Limited | Gas Engineering",
  description: "Reliable boiler installation, servicing and heating repairs across the UK.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "SS Consultants UK Ltd",
    title: "SS Consultants UK Limited | Gas Engineering",
    description: "Reliable boiler installation, servicing and heating repairs across Hatfield, Hertfordshire and London.",
    images: [{ url: META_IMAGE, width: 1200, height: 630, alt: "SS Consultants UK boiler and heating engineers" }],
  },
  twitter: { card: "summary_large_image", images: [META_IMAGE] },
  icons: {
    icon: "/images/favicon/favicon.ico",
    shortcut: "/images/favicon/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const siteSettings = await getWebsiteSettings();

  return (
    <html lang="en" className={`${plusJakarta.variable} ${lora.variable} h-full antialiased`}>
      <body className="bg-(--ssc-uk-main-black-color)!">
        {" "}
        <SiteSettingsProvider settings={siteSettings}>
          <SmoothScrollProvider>
            <NavbarSection navigation={siteSettings.navigation} />
            {children}
            <FooterBarSection />
          </SmoothScrollProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
