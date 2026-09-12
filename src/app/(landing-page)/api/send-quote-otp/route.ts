import { NextResponse, type NextRequest } from "next/server";
import twilio from "twilio";
import { toUKMobileE164 } from "@/utils/uk-mobile";

export const runtime = "nodejs";

const recentRequests = new Map<string, number>();
const ONE_MINUTE = 60_000;

export async function POST(request: NextRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!accountSid || !authToken || !from) {
    return NextResponse.json({ sent: false, developmentFallback: true });
  }

  const body = (await request.json()) as { mobile?: string };
  const mobile = toUKMobileE164(body.mobile ?? "");
  if (!mobile) {
    return NextResponse.json({ error: "Enter a valid UK mobile number, for example 07123 456789." }, { status: 400 });
  }

  const clientKey = `${request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local"}:${mobile}`;
  const lastRequest = recentRequests.get(clientKey) ?? 0;
  if (Date.now() - lastRequest < ONE_MINUTE) {
    return NextResponse.json({ error: "Please wait one minute before requesting another code." }, { status: 429 });
  }

  try {
    const client = twilio(accountSid, authToken);
    const message = await client.messages.create({
      body: "sms_2fa",
      from,
      to: mobile,
    });

    recentRequests.set(clientKey, Date.now());
    return NextResponse.json({ sent: true, messageId: message.sid });
  } catch (error) {
    const twilioError = error as { message?: string; status?: number };
    console.error("Unable to send the quote verification SMS.", twilioError.message || error);
    return NextResponse.json({ sent: false, developmentFallback: true });
  }
}
