"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { WebsiteSettings } from "@/lib/payload/site-settings";

const SiteSettingsContext = createContext<WebsiteSettings | null>(null);

export function SiteSettingsProvider({ children, settings }: { children: ReactNode; settings: WebsiteSettings }) {
  return <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const settings = useContext(SiteSettingsContext);

  if (!settings) throw new Error("useSiteSettings must be used inside SiteSettingsProvider.");
  return settings;
}

export function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
