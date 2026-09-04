import installingBoilerImage from "@/assets/images/webp/installing-boiler-1700X900.webp";
import boilerBreakdownImage from "@/assets/images/webp/service/boiler-breakdown-repairs.webp";
import boilerServicingImage from "@/assets/images/webp/service/boiler-servicing.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import powerflushingImage from "@/assets/images/webp/service/powerflushing.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import type { GalleryImage } from "@/utils/interface/gallery.interface";

// Add new admin-uploaded images to this list. The gallery layout and virtualization
// will adapt automatically as the collection grows.
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "boiler-installation", image: boilerInstallationImage, alt: "Boiler installation in progress" },
  { id: "central-heating", image: centralHeatingImage, alt: "Central heating pipework" },
  { id: "installing-boiler", image: installingBoilerImage, alt: "Heating engineer installing a boiler" },
  { id: "boiler-servicing", image: boilerServicingImage, alt: "Engineer servicing a boiler" },
  { id: "powerflushing", image: powerflushingImage, alt: "Powerflushing heating system" },
  { id: "underfloor-heating", image: underfloorHeatingImage, alt: "Underfloor heating installation" },
  { id: "boiler-breakdown", image: boilerBreakdownImage, alt: "Boiler breakdown repair" },
];
