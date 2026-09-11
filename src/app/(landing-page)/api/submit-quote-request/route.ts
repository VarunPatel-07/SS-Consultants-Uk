import config from "@payload-config";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import { toUKMobileE164 } from "@/utils/uk-mobile";

type Submission = {
  selections?: Array<{
    questionId?: string;
    questionLabel?: string;
    optionId?: string;
    optionLabel?: string;
  }>;
  postcode?: string;
  address?: string;
  contact?: { firstName?: string; lastName?: string; email?: string; mobile?: string };
};

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  const submission = (await request.json()) as Submission;
  const firstName = text(submission.contact?.firstName, 100);
  const lastName = text(submission.contact?.lastName, 100);
  const email = text(submission.contact?.email, 320);
  const mobile = toUKMobileE164(text(submission.contact?.mobile, 30));
  const postcode = text(submission.postcode, 12).toUpperCase();
  const address = text(submission.address, 500);
  const answers = (submission.selections ?? []).slice(0, 20).map((selection) => ({
    questionId: text(selection.questionId, 100),
    question: text(selection.questionLabel, 200),
    optionId: text(selection.optionId, 100),
    answer: text(selection.optionLabel, 200),
  }));

  if (!firstName || !lastName || !/^\S+@\S+\.\S+$/.test(email) || !mobile || !postcode || !address || !answers.length) {
    return NextResponse.json({ error: "The quote request is incomplete." }, { status: 400 });
  }

  try {
    const payload = await getPayload({ config });
    const quoteRequest = await payload.create({
      collection: "quote-requests",
      data: {
        status: "new",
        firstName,
        lastName,
        email,
        mobile,
        postcode,
        address,
        answers,
        mobileVerification: "development-code-entered",
      },
    });

    return NextResponse.json({ submitted: true, id: quoteRequest.id }, { status: 201 });
  } catch (error) {
    console.error("Unable to store quote request in Payload.", error);
    return NextResponse.json({ error: "We couldn’t save your request. Please try again." }, { status: 500 });
  }
}
