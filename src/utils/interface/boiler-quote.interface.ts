export type BoilerQuoteIcon =
  | "boiler"
  | "flame"
  | "home"
  | "radiator"
  | "settings"
  | "shield"
  | "sparkles"
  | "wrench";

export interface BoilerQuoteOption {
  id: string;
  label: string;
  icon?: BoilerQuoteIcon;
  description?: string;
  suboptions: BoilerQuoteQuestion[];
}

export interface BoilerQuoteQuestion {
  id: string;
  label: string;
  eyebrow: string;
  description?: string;
  options: BoilerQuoteOption[];
}

export interface BoilerQuoteSelection {
  questionId: string;
  questionLabel: string;
  optionId: string;
  optionLabel: string;
}

export interface BoilerQuoteProgress {
  selections: BoilerQuoteSelection[];
  postcode: string;
  verifiedPostcode: string;
  address: string;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
  };
}
