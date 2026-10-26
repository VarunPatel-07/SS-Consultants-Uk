import twilio from "twilio";
import { isDevelopmentEnvironment } from "@/utils/app-env";

// Twilio Verify generates, sends and checks the OTP, so no codes are stored on our side.
// Without credentials, the development environment falls back to accepting any six-digit code;
// production refuses to send or verify instead.
const getVerifyService = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;
  if (!accountSid || !authToken || !serviceSid) return null;
  return twilio(accountSid, authToken).verify.v2.services(serviceSid);
};

export const isDevelopmentFallback = () => !getVerifyService() && isDevelopmentEnvironment;

export const sendVerificationCode = async (mobile: string) => {
  const service = getVerifyService();
  if (!service) throw new Error("Twilio Verify is not configured.");
  await service.verifications.create({ to: mobile, channel: "sms" });
};

export const checkVerificationCode = async (mobile: string, code: string) => {
  const service = getVerifyService();
  if (!service) return isDevelopmentFallback() && /^\d{6}$/.test(code);
  try {
    const check = await service.verificationChecks.create({ to: mobile, code });
    return check.status === "approved";
  } catch (error) {
    // Twilio answers 404 once a verification has expired, been approved or hit its attempt limit.
    if ((error as { status?: number }).status === 404) return false;
    throw error;
  }
};
