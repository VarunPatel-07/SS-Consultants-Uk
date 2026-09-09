import baxiLogo from "@/assets/images/svg/boiler-company-logo/baxi.svg";
import boschLogo from "@/assets/images/svg/boiler-company-logo/bosch.svg";
import glowWormLogo from "@/assets/images/svg/boiler-company-logo/glow-worm.svg";
import idealLogo from "@/assets/images/svg/boiler-company-logo/ideal-heating.svg";
import megafloLogo from "@/assets/images/svg/boiler-company-logo/megaflo.svg";
import pottertonLogo from "@/assets/images/svg/boiler-company-logo/potterton.svg";
import vaillantLogo from "@/assets/images/svg/boiler-company-logo/vaillant.svg";
import flameDeviceIcon from "@/assets/images/svg/boiler-installation-icon.svg";
import boilerServicingIcon from "@/assets/images/svg/boiler-servicing-icon.svg";
import centralHeatingIcon from "@/assets/images/svg/central-heating-icon.svg";
import underfloorHeatingIcon from "@/assets/images/svg/underfloor-heating-icon.svg";
import type { BoilerBrand, HeatingService } from "@/utils/interface//homepage.interface";

export const BOILER_BRANDS: BoilerBrand[] = [
  { name: "Vaillant", logo: vaillantLogo, alt: "Vaillant boiler brand logo" },
  { name: "Glow-worm", logo: glowWormLogo, alt: "Glow-worm boiler brand logo" },
  { name: "Potterton", logo: pottertonLogo, alt: "Potterton boiler brand logo" },
  { name: "Bosch", logo: boschLogo, alt: "Worcester Bosch boiler brand logo" },
  { name: "Baxi", logo: baxiLogo, alt: "Baxi boiler brand logo" },
  { name: "Megaflo", logo: megafloLogo, alt: "Megaflo boiler brand logo" },
  { name: "Ideal Heating", logo: idealLogo, alt: "Ideal Heating boiler brand logo" },
];

export const HEATING_SERVICES: HeatingService[] = [
  { name: "Boiler Installation", icon: flameDeviceIcon },
  { name: "Boiler Servicing", icon: boilerServicingIcon },
  { name: "Underfloor Heating", icon: underfloorHeatingIcon },
  { name: "Central Heating", icon: centralHeatingIcon },
];
