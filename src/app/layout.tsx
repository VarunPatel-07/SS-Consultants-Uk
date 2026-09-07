import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import SmoothScrollProvider from "@/components/sections/common/smoothScrollProvider";
import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SS Consultants UK Limited | Gas Engineering",
  description: "Reliable boiler installation, servicing and heating repairs across the UK.",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${lora.variable} h-full antialiased`}>
      <body className="bg-(--ssc-uk-main-black-color)!">
        {" "}
        <SmoothScrollProvider>
          <NavbarSection />
          {children}
          <FooterBarSection />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
