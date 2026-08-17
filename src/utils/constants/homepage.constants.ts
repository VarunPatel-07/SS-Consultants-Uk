import boilerServicingIcon from "@/assets/images/svg/boiler-servicing-icon.svg";
import centralHeatingIcon from "@/assets/images/svg/central-heating-icon.svg";
import flameDeviceIcon from "@/assets/images/svg/flame-device-icon.svg";
import underfloorHeatingIcon from "@/assets/images/svg/underfloor-heating-icon.svg";
import baxiLogo from "@/assets/images/svg/boiler-company-logo/baxi.svg";
import boschLogo from "@/assets/images/svg/boiler-company-logo/bosch.svg";
import glowWormLogo from "@/assets/images/svg/boiler-company-logo/glow-worm.svg";
import idealLogo from "@/assets/images/svg/boiler-company-logo/ideal-heating.svg";
import megafloLogo from "@/assets/images/svg/boiler-company-logo/megaflo.svg";
import pottertonLogo from "@/assets/images/svg/boiler-company-logo/potterton.svg";
import vaillantLogo from "@/assets/images/svg/boiler-company-logo/vaillant.svg";
import type { BoilerBrand, HeatingService } from "@/utils/interface/homepage.interface";

export const BOILER_BRANDS: BoilerBrand[] = [
  { name: "Vaillant", logo: vaillantLogo },
  { name: "Glow-worm", logo: glowWormLogo },
  { name: "Potterton", logo: pottertonLogo },
  { name: "Bosch", logo: boschLogo },
  { name: "Baxi", logo: baxiLogo },
  { name: "Megaflo", logo: megafloLogo },
  { name: "Ideal Heating", logo: idealLogo },
];

export const HEATING_SERVICES: HeatingService[] = [
  { name: "Boiler Installation", icon: flameDeviceIcon },
  { name: "Boiler Servicing", icon: boilerServicingIcon },
  { name: "Underfloor Heating", icon: underfloorHeatingIcon },
  { name: "Central Heating", icon: centralHeatingIcon },
];
