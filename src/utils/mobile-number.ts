import { isDevelopmentEnvironment } from "@/utils/app-env";

// UK mobiles: 07…, +44 7… / 0044 7… / 44 7…, or 7… with the leading 0 left off.
const UK_MOBILE_PATTERN = /^(?:0|\+44|0044|44)?7\d{9}$/;
// Development only: any international number with its country code (+ or 00, then 8-15 digits).
const INTERNATIONAL_TEST_PATTERN = /^(?:\+|00)[1-9]\d{7,14}$/;

export const MOBILE_NUMBER_HINT = isDevelopmentEnvironment
  ? "Development: any mobile number. Include the country code, for example +91 98765 43210."
  : "UK mobile numbers only (07 or +44 7). New Version";
export const MOBILE_NUMBER_ERROR = isDevelopmentEnvironment
  ? "Enter a valid mobile number with its country code, for example +91 98765 43210."
  : "Enter a valid UK mobile number, for example 07123 456789. New Version";

const compactPhoneNumber = (value: string) => value.trim().replace(/[\s()-]/g, "");

export const isAllowedMobileNumber = (value: string) => {
  if (!/^[\d\s()+-]+$/.test(value)) return false;

  const compact = compactPhoneNumber(value);
  if (UK_MOBILE_PATTERN.test(compact)) return true;
  return isDevelopmentEnvironment && INTERNATIONAL_TEST_PATTERN.test(compact);
};

export const toMobileE164 = (value: string) => {
  if (!isAllowedMobileNumber(value)) return null;

  const compact = compactPhoneNumber(value);
  if (compact.startsWith("07")) return `+44${compact.slice(1)}`;
  if (compact.startsWith("7")) return `+44${compact}`;
  if (compact.startsWith("44")) return `+${compact}`;
  if (compact.startsWith("00")) return `+${compact.slice(2)}`;
  return compact;
};

// Contact form phone numbers: always UK only (mobiles and landlines), whatever the environment.
// 01/02 geographic, 03 non-geographic, 07 mobile and 08 freephone numbers, with 10 or 11 digits.
// The leading 0 is optional, since people often type 7590 514937 for 07590 514937.
const UK_PHONE_NATIONAL_PATTERN = /^0?(?:[1-3]\d{8,9}|7\d{9}|8\d{8,9})$/;

export const UK_PHONE_ERROR = "Enter a valid UK phone number, for example 07123 456789 or 01707 123456.";

export const toUKPhoneE164 = (value: string) => {
  if (!/^[\d\s()+-]+$/.test(value)) return null;

  const compact = compactPhoneNumber(value);
  const national = compact.replace(/^(?:\+|00)?44/, "0");
  return UK_PHONE_NATIONAL_PATTERN.test(national) ? `+44${national.replace(/^0/, "")}` : null;
};
