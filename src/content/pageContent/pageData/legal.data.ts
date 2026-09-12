import type { CommonPageDataInterface } from "@/utils/interface/data.interface";

export interface LegalPageData extends CommonPageDataInterface {
  title: string;
  description: string;
  content?: LegalContentSection[];
}

export interface LegalContentSection {
  heading: string;
  body?: string;
  bullets?: string[];
  note?: string;
}

export const LEGAL_PAGE_DATA: Record<string, LegalPageData> = {
  "/cookie-policy": {
    title: "Cookie Policy",
    description:
      "This page explains how cookies may be used to help the website work effectively and improve your browsing experience.",
    metadata: { title: "Cookie Policy", description: "How SS Consultants uses cookies." },
    consultation: { email: "info@sscukltd.com", phone: "07590 514937" },
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "We respect your privacy and only use information shared with us to respond to enquiries and provide our services.",
    metadata: { title: "Privacy Policy", description: "The SS Consultants privacy policy." },
    consultation: { email: "info@sscukltd.com", phone: "07590 514937" },
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions",
    description:
      "Our services are provided with clear communication, professional workmanship and agreed terms for each project.",
    metadata: { title: "Terms & Conditions", description: "SS Consultants terms and conditions." },
    consultation: { email: "info@sscukltd.com", phone: "07590 514937" },
    content: [
      {
        heading: "1. Estimate",
        body: "With our extensive experience and Gas Safe registration, you can rest assured that you are in safe hands with SS Consultants UK Ltd. We understand how frustrating a boiler breakdown can be, which is why our qualified team works efficiently to complete repairs on time and restore your boiler as quickly as possible. For contact details, please refer to the information below.",
      },
      {
        heading: "2. Written Quotation",
        body: "A written quotation will follow the initial estimate, outlining the final price for the agreed-upon work, including labour, materials, expenses (if applicable), and taxes.",
        bullets: [
          "Any changes to the scope of work, including unforeseen circumstances, may require a revised quotation.",
          "You have the right to accept or decline any revised quotation.",
          "If you decline, all work will cease, and you must settle any outstanding payments for work already completed under the original quotation.",
        ],
      },
      {
        heading: "3. Client Obligations",
        body: "As our client, you agree to:",
        bullets: [
          "Provide accurate measurements if you are responsible for sourcing materials. You bear the cost of replacing any incorrect items.",
          "Supply fault-free and suitable materials if providing your own. Any necessary replacements are at your expense.",
          "Inform us before work begins of any hazards at the site.",
          "Ensure our team has access to the premises and obtain any necessary permissions or licences.",
          "Take responsibility for the security of any materials or equipment left on-site with your permission.",
          "Handle any redecorating or restoration work needed after completion, unless specified in the quotation.",
        ],
      },
      {
        heading: "4. Supplier Obligations",
        bullets: [
          "Supply high-quality materials and products, unless you choose to provide them. If we supply faulty materials, we will replace them at no extra cost.",
          "Take care of your property and ensure waste materials are removed after completion.",
          "Maintain valid Public Liability Insurance of £5 million and, where applicable, Employers Liability Insurance.",
        ],
      },
      {
        heading: "5. Materials and Products",
        body: "All materials and products supplied by us remain the property of SS Consultants UK Ltd until full payment has been received. Ownership is transferred to you only upon complete payment.",
      },
      {
        heading: "6. Force Majeure",
        body: "Neither party shall be held liable for delays or failure to fulfil obligations due to unforeseen circumstances beyond their control, including:",
        bullets: [
          "Natural disasters or acts of God.",
          "Fire, government regulations, or supply shortages.",
          "Industrial action or labour disputes.",
        ],
      },
      {
        heading: "7. Cancellation",
        body: "Under the Consumer Contract Regulations 2013, you have the right to cancel your contract within 14 days of accepting our quotation. If any services are provided within this period, you must pay for the work completed up to the cancellation date.",
        note: "Please double-check this legal reference and cancellation wording before publishing, as UK consumer contract law may have changed since the original terms were written.",
      },
      {
        heading: "8. Payments",
        bullets: [
          "Payment terms, including instalment payments where applicable, will be outlined in your quotation.",
          "For jobs where material costs exceed £300, a 50% deposit is required.",
          "All invoices must be paid in full upon receipt. Late payments will incur interest at the Bank of England base rate.",
        ],
      },
      {
        heading: "9. Complaints",
        body: "We take pride in our workmanship and aim for 100% customer satisfaction. If you have any concerns, please contact us, and we will do everything possible to resolve the issue promptly.",
      },
    ],
  },
};
