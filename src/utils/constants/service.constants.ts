import boilerBreakdownRepairsHero from "@/assets/images/webp/service/hero-images/boiler-breakdown-repairs.webp";
import boilerInstallationHero from "@/assets/images/webp/service/hero-images/boiler-installation.webp";
import boilerServicingHero from "@/assets/images/webp/service/hero-images/boiler-servicing.webp";
import centralHeatingHero from "@/assets/images/webp/service/hero-images/central-heating.webp";
import powerflushingHero from "@/assets/images/webp/service/hero-images/powerflushing.webp";
import underfloorHeatingHero from "@/assets/images/webp/service/hero-images/underfloor-heating.webp";
import type { StaticImageData } from "next/image";

export interface ServiceContent {
  slug: string;
  label: string;
  title: string;
  highlight: string;
  ending: string;
  description: string;
  cta: string;
  heroImage: StaticImageData;
  eyebrow: string;
  options: Array<{ name: string; price: string }>;
  note: string;
  reassurance: string[];
}

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: "boiler-servicing",
    label: "Boiler Servicing",
    title: "Keep your boiler",
    highlight: "safe, efficient",
    ending: "and reliable.",
    description: "Professional servicing and dependable repairs for all leading boiler brands, completed by Gas Safe registered engineers.",
    cta: "Book a Boiler Service",
    heroImage: boilerServicingHero,
    eyebrow: "Boiler servicing across London",
    options: [
      { name: "Essential inspection", price: "£80 + VAT" },
      { name: "Full maintenance", price: "£120 + VAT" },
    ],
    note: "Parts charged separately where required",
    reassurance: ["Gas Safe registered", "All major boiler brands", "Clear, fixed service options"],
  },
  {
    slug: "boiler-breakdown-repairs",
    label: "Boiler Breakdown Repairs",
    title: "Get your heating",
    highlight: "working again",
    ending: "without the stress.",
    description: "Fast fault-finding and dependable boiler repairs from experienced engineers who explain the problem clearly.",
    cta: "Book a Repair",
    heroImage: boilerBreakdownRepairsHero,
    eyebrow: "Boiler breakdown repairs across London",
    options: [
      { name: "Diagnostic visit", price: "£80 + VAT" },
      { name: "Repair labour", price: "From £120 + VAT" },
    ],
    note: "Parts quoted separately where required",
    reassurance: ["Fast fault-finding", "Experienced engineers", "Clear repair advice"],
  },
  {
    slug: "boiler-installation",
    label: "Boiler Installation",
    title: "A better boiler",
    highlight: "for your home",
    ending: "and your budget.",
    description: "Professional boiler installation with honest advice, careful workmanship and an efficient system chosen around your home.",
    cta: "Book a Boiler Consultation",
    heroImage: boilerInstallationHero,
    eyebrow: "Boiler installation across London",
    options: [
      { name: "Home assessment", price: "Free" },
      { name: "Installation quote", price: "Tailored" },
    ],
    note: "Every quote is based on your home and heating needs",
    reassurance: ["A-rated options", "Qualified installation", "Manufacturer guarantees"],
  },
  {
    slug: "underfloor-heating",
    label: "Underfloor Heating",
    title: "Warm every room",
    highlight: "from the ground up",
    ending: "with lasting comfort.",
    description: "Comfortable, evenly distributed heating designed and installed with care for the way your home is used.",
    cta: "Discuss Your Heating",
    heroImage: underfloorHeatingHero,
    eyebrow: "Underfloor heating across London",
    options: [
      { name: "System assessment", price: "Free" },
      { name: "Installation plan", price: "Tailored" },
    ],
    note: "We recommend the right system for your space",
    reassurance: ["Even room temperatures", "Thoughtful design", "Careful installation"],
  },
  {
    slug: "powerflushing",
    label: "Powerflushing",
    title: "Clear your system",
    highlight: "for better heating",
    ending: "and improved efficiency.",
    description: "Deep system cleaning that removes sludge, improves circulation and helps your heating perform at its best.",
    cta: "Book a Powerflush",
    heroImage: powerflushingHero,
    eyebrow: "Powerflushing across London",
    options: [
      { name: "System assessment", price: "From £80 + VAT" },
      { name: "Powerflush", price: "From £450 + VAT" },
    ],
    note: "Final pricing depends on system size and condition",
    reassurance: ["Improved circulation", "Less system sludge", "Clear recommendations"],
  },
  {
    slug: "central-heating",
    label: "Central Heating",
    title: "A heating system",
    highlight: "that works together",
    ending: "through every season.",
    description: "Complete central heating solutions, upgrades and repairs for dependable comfort throughout your home.",
    cta: "Plan Your Heating",
    heroImage: centralHeatingHero,
    eyebrow: "Central heating across London",
    options: [
      { name: "Home assessment", price: "Free" },
      { name: "Heating improvements", price: "Tailored" },
    ],
    note: "We work around your home, usage and budget",
    reassurance: ["Whole-home solutions", "Efficient upgrades", "Reliable support"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_CONTENT.find((service) => service.slug === slug);
}
