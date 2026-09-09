import type { CommonPageDataInterface } from "@/utils/interfacepage.interface";
import { BOILER_BREAKDOWN_REPAIRS_PAGE_DATA } from "./boiler-breakdown-repairs.data";
import { BOILER_INSTALLATION_PAGE_DATA } from "./boiler-installation.data";
import { BOILER_SERVICING_PAGE_DATA } from "./boiler-servicing.data";
import { CENTRAL_HEATING_PAGE_DATA } from "./central-heating.data";
import { POWERFLUSHING_PAGE_DATA } from "./powerflushing.data";
import { UNDERFLOOR_HEATING_PAGE_DATA } from "./underfloor-heating.data";

export const SERVICE_PAGE_DATA: CommonPageDataInterface[] = [
  BOILER_SERVICING_PAGE_DATA,
  BOILER_BREAKDOWN_REPAIRS_PAGE_DATA,
  BOILER_INSTALLATION_PAGE_DATA,
  UNDERFLOOR_HEATING_PAGE_DATA,
  POWERFLUSHING_PAGE_DATA,
  CENTRAL_HEATING_PAGE_DATA,
];

export function getServicePageData(slug: string) {
  return SERVICE_PAGE_DATA.find((pageData) => pageData.serviceHeroSection?.slug === slug);
}

export {
  BOILER_BREAKDOWN_REPAIRS_PAGE_DATA,
  BOILER_INSTALLATION_PAGE_DATA,
  BOILER_SERVICING_PAGE_DATA,
  CENTRAL_HEATING_PAGE_DATA,
  POWERFLUSHING_PAGE_DATA,
  UNDERFLOOR_HEATING_PAGE_DATA,
};
