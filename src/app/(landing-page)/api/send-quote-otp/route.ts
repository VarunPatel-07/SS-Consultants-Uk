import { NextResponse, type NextRequest } from "next/server";
import { isDevelopmentFallback, sendVerificationCode } from "@/lib/twilio-verify";
import { MOBILE_NUMBER_ERROR, toMobileE164 } from "@/utils/mobile-number";

export const runtime = "nodejs";

const recentRequests = new Map<string, number>();
const ONE_MINUTE = 60_000;

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { mobile?: string };
  const mobile = toMobileE164(body.mobile ?? "");
  if (!mobile) {
    return NextResponse.json({ error: MOBILE_NUMBER_ERROR }, { status: 400 });
  }

  if (isDevelopmentFallback()) {
    return NextResponse.json({ sent: false, developmentFallback: true });
  }

  const clientKey = `${request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local"}:${mobile}`;
  const lastRequest = recentRequests.get(clientKey) ?? 0;
  if (Date.now() - lastRequest < ONE_MINUTE) {
    return NextResponse.json({ error: "Please wait one minute before requesting another code." }, { status: 429 });
  }

  try {
    await sendVerificationCode(mobile);
    recentRequests.set(clientKey, Date.now());
    return NextResponse.json({ sent: true });
  } catch (error) {
    console.error("Unable to send the quote verification SMS.", (error as { message?: string }).message || error);
    return NextResponse.json({ error: "We couldn’t send a code to that number. Please try again." }, { status: 502 });
  }
}
