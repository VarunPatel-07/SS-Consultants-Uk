// Read in both server and browser code, so it must be NEXT_PUBLIC_ and is fixed at build time.
// Anything other than "development" (including unset) is treated as production.
export const isDevelopmentEnvironment = process.env.NEXT_PUBLIC_APP_ENV === "development";
