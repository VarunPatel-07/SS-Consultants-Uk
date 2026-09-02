import { HOME_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const ABOUT_PAGE_DATA: CommonPageDataInterface = {
  metadata: { title: "About SS Consultants", description: "Heating expertise, clear advice and dependable workmanship." },
  about: { header: { title: [[{ text: "Heating expertise you can rely on." }]] } },
  faq: { header: { title: [[{ text: "Questions about" }], [{ text: "your heating?", variant: "brand" }]], description: [[{ text: "Clear answers to the questions homeowners ask us most about boiler installation, servicing and repairs." }]] }, faqsItems: HOME_PAGE_FAQ_DATA },
  consultation: { email: "info@sscukltd.com", phone: "07590 514937" },
  sections: ["hero", "experience", "principles", "aboutExperience", "services", "faq", "consultation"],
};
