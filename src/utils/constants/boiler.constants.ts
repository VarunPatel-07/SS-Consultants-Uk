import boilerImageOne from "@/assets/images/webp/boiler-image-1.webp";
import boilerImageTwo from "@/assets/images/webp/boiler-image-2.webp";
import boilerImageThree from "@/assets/images/webp/boiler-image-3.webp";
import type { BoilerOption } from "@/utils/interface/boiler.interface";

export const BOILER_OPTIONS: BoilerOption[] = [
  {
    name: "Vaillant ecoFIT Pure",
    image: boilerImageOne,
    tagline: "Compact and dependable",
    bestFor: "Homes where cupboard space matters",
    description: "An efficient, space-conscious option for everyday heating and hot water.",
    features: [
      "25–35kW output range",
      "Fits most kitchen cupboards",
      "Rear-flue installation option",
      "10-year warranty available",
    ],
  },
  {
    name: "Vaillant ecoTEC Plus",
    image: boilerImageTwo,
    tagline: "Smart comfort and control",
    bestFor: "Homes wanting flexible heating controls",
    description: "A versatile combi range designed for efficient performance and precise control.",
    features: [
      "Smart-home ready",
      "IoniDETECT combustion monitoring",
      "Quiet, efficient operation",
      "Multiple output options",
    ],
    popularChoice: true,
  },
  {
    name: "Vaillant ecoTEC Exclusive",
    image: boilerImageThree,
    tagline: "Premium connected performance",
    bestFor: "Homes prioritising premium connected comfort",
    description: "A high-performance boiler with intelligent controls and connected-home capability.",
    features: [
      "Advanced efficiency and control",
      "App-compatible connectivity",
      "Premium compact design",
      "Built for lasting performance",
    ],
  },
];
