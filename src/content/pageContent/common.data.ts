import { HeatingSupportCard } from "@/utils/interface//common.interface";

export { SERVICE_PAGE_DATA as SERVICE_CONTENT } from "@/content/pageContent/pageData/service";
export { ABOUT_FEATURES } from "@/utils/constants/about.constants";
export { BOILER_OPTIONS } from "@/utils/constants/boiler.constants";
export { CONSULTATION_FEATURES, CONSULTATION_POINTS } from "@/utils/constants/consultation.constants";
export { GALLERY_IMAGES } from "@/utils/constants/gallery.constants";
export { BOILER_BRANDS, HEATING_SERVICES } from "@/utils/constants/homepage.constants";
export { TESTIMONIALS } from "@/utils/constants/testimonial.constants";
export { WHY_CHOOSE_US_POINTS } from "@/utils/constants/why-choose-us.constants";

// Images

import boilerBreakdownRepairsImage from "@/assets/images/webp/service/boiler-breakdown-repairs.webp";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import boilerServicingImage from "@/assets/images/webp/service/boiler-servicing.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import powerFlushingImage from "@/assets/images/webp/service/powerflushing.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";

export const BOILER_SERVICES = [
  { label: "Boiler Servicing", slug: "boiler-servicing" },
  { label: "Boiler Breakdown Repairs", slug: "boiler-breakdown-repairs" },
  { label: "Boiler Installation", slug: "boiler-installation" },
  { label: "Underfloor Heating", slug: "underfloor-heating" },
  { label: "Powerflushing", slug: "powerflushing" },
  { label: "Central Heating", slug: "central-heating" },
] as const;

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/boiler-installation" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "Boiler Installation", href: "/services/boiler-installation" },
  { label: "Boiler Servicing", href: "/services/boiler-servicing" },
  { label: "Underfloor Heating", href: "/services/underfloor-heating" },
  { label: "Central Heating", href: "/services/central-heating" },
  { label: "Boiler Repairs", href: "/services/boiler-breakdown-repairs" },
] as const;

export const HEATING_SUPPORT_CARDS: HeatingSupportCard[] = [
  {
    slug: "boiler-servicing",
    number: "01",
    title: "Boiler Servicing",
    description: "Annual boiler servicing that keeps your system safe, efficient and reliably running all year round.",
    image: boilerServicingImage,
    imageAlt: "Engineer carrying out an annual boiler service",
    ctaLabel: "Book a Boiler Service",
  },
  {
    slug: "boiler-breakdown-repairs",
    number: "02",
    title: "Boiler Breakdown Repairs",
    description: "Fast, same-day fault-finding and dependable boiler repairs when your heating breaks down.",
    image: boilerBreakdownRepairsImage,
    imageAlt: "Engineer repairing a boiler during a breakdown callout",
    ctaLabel: "Request a Repair",
    badge: "Same-day available",
  },
  {
    slug: "boiler-installation",
    number: "03",
    title: "Boiler Installation",
    description: "Professional boiler installation, matching an efficient system to your home and budget.",
    image: boilerInstallationImage,
    imageAlt: "Engineer installing a new boiler system",
    ctaLabel: "Get an Installation Quote",
  },
  {
    slug: "underfloor-heating",
    number: "04",
    title: "Underfloor Heating",
    description: "Underfloor heating design and installation for even, comfortable warmth throughout your home.",
    image: underfloorHeatingImage,
    imageAlt: "Engineer installing underfloor heating pipework",
    ctaLabel: "Explore Underfloor Heating",
  },
  {
    slug: "powerflushing",
    number: "05",
    title: "Powerflushing",
    description: "Professional powerflushing to clear sludge and blockages and restore heating performance.",
    image: powerFlushingImage,
    imageAlt: "Engineer powerflushing a central heating system",
    ctaLabel: "Learn About Powerflushing",
  },
  {
    slug: "central-heating",
    number: "06",
    title: "Central Heating",
    description: "Central heating installation, upgrades and repairs for dependable comfort all year.",
    image: centralHeatingImage,
    imageAlt: "Engineer working on a central heating radiator installation",
    ctaLabel: "Explore Central Heating",
  },
];
