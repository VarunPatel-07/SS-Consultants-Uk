import { Headphones, House, ShieldCheck, Wrench } from "lucide-react";
import type { ConsultationFeature } from "@/utils/interface/consultation.interface";

export const CONSULTATION_POINTS = [
  "No pushy sales tactics",
  "Qualified engineer advice",
  "Transparent pricing",
  "Quiet, efficient systems",
];

export const CONSULTATION_FEATURES: ConsultationFeature[] = [
  { label: "A-rated options", icon: House },
  { label: "Careful installation", icon: Wrench },
  { label: "24-month guarantee", icon: ShieldCheck },
  { label: "Ongoing support", icon: Headphones },
];
