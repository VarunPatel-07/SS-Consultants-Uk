import { CalendarDays, MapPin, ShieldCheck, Umbrella } from "lucide-react";
import type { AboutFeature } from "@/utils/interface/about.interface";

export const ABOUT_FEATURES: AboutFeature[] = [
  { title: "Gas Safe registered", description: "Qualified heating professionals", icon: ShieldCheck },
  { title: "£5m insured", description: "Public liability cover", icon: Umbrella },
  { title: "24-month guarantee", description: "On completed installations", icon: CalendarDays },
  { title: "Local and dependable", description: "Hatfield, Hertfordshire & London", icon: MapPin },
];
