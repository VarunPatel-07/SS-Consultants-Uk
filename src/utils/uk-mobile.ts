const UK_MOBILE_NATIONAL_PATTERN = /^07\d{9}$/;
const UK_MOBILE_INTERNATIONAL_PATTERN = /^(?:\+44|0044)7\d{9}$/;

const compactPhoneNumber = (value: string) => value.trim().replace(/[\s()-]/g, "");

export const isUKMobileNumber = (value: string) => {
  if (!/^[\d\s()+-]+$/.test(value)) return false;

  const compact = compactPhoneNumber(value);
  return UK_MOBILE_NATIONAL_PATTERN.test(compact) || UK_MOBILE_INTERNATIONAL_PATTERN.test(compact);
};

export const toUKMobileE164 = (value: string) => {
  if (!isUKMobileNumber(value)) return null;

  const compact = compactPhoneNumber(value);
  if (compact.startsWith("07")) return `+44${compact.slice(1)}`;
  if (compact.startsWith("0044")) return `+${compact.slice(2)}`;
  return compact;
};
