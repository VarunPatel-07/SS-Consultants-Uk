import config from "@payload-config";
import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import { toUKPhoneE164, UK_PHONE_ERROR } from "@/utils/mobile-number";

export const runtime = "nodejs";

type Submission = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  subject?: string;
  message?: string;
  submittedFrom?: string;
  // Honeypot: hidden from people, so only bots fill it in.
  website?: string;
};

const recentRequests = new Map<string, number>();
const THIRTY_SECONDS = 30_000;

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: NextRequest) {
  const submission = (await request.json()) as Submission;
  if (text(submission.website, 200)) return NextResponse.json({ submitted: true }, { status: 201 });

  const firstName = text(submission.firstName, 100);
  const lastName = text(submission.lastName, 100);
  const email = text(submission.email, 320);
  const rawPhone = text(submission.phone, 30);
  const phone = rawPhone ? toUKPhoneE164(rawPhone) : "";
  const service = text(submission.service, 200);
  const subject = text(submission.subject, 200);
  const message = text(submission.message, 5000);
  const page = text(submission.submittedFrom, 200);
  const submittedFrom = page.startsWith("/") ? page : "unknown";

  if (!firstName || !lastName || !/^\S+@\S+\.\S+$/.test(email) || !service) {
    return NextResponse.json({ error: "Please complete your name, email and the service you need." }, { status: 400 });
  }
  if (phone === null) return NextResponse.json({ error: UK_PHONE_ERROR }, { status: 400 });

  const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "local";
  if (Date.now() - (recentRequests.get(clientKey) ?? 0) < THIRTY_SECONDS) {
    return NextResponse.json({ error: "Please wait a moment before sending another enquiry." }, { status: 429 });
  }

  try {
    const payload = await getPayload({ config });
    const enquiry = await payload.create({
      collection: "contact-enquiries",
      data: { status: "new", firstName, lastName, email, phone, service, subject, message, submittedFrom },
    });

    recentRequests.set(clientKey, Date.now());
    return NextResponse.json({ submitted: true, id: enquiry.id }, { status: 201 });
  } catch (error) {
    console.error("Unable to store contact enquiry in Payload.", error);
    return NextResponse.json({ error: "We couldn’t send your enquiry. Please try again or call us." }, { status: 500 });
  }
}
