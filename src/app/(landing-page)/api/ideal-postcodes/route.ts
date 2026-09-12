import { NextResponse, type NextRequest } from "next/server";

type IdealAddress = {
  uprn?: string;
  line_1?: string;
  line_2?: string;
  line_3?: string;
  post_town?: string;
  county?: string;
  postcode?: string;
};

type IdealPostcodesResponse = { result?: IdealAddress[]; message?: string };

export async function GET(request: NextRequest) {
  const postcode = request.nextUrl.searchParams.get("postcode")?.trim();
  const apiKey = process.env.IDEAL_POSTCODES_API_KEY;

  if (!postcode || postcode.replace(/\s/g, "").length < 5) {
    return NextResponse.json({ error: "A valid postcode is required." }, { status: 400 });
  }
  if (!apiKey) {
    return NextResponse.json({ error: "Address lookup is not configured." }, { status: 503 });
  }

  const response = await fetch(`https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(postcode)}`, {
    cache: "no-store",
    headers: { Authorization: `api_key="${apiKey}"` },
  });
  const data = (await response.json()) as IdealPostcodesResponse;
  if (!response.ok) {
    return NextResponse.json({ error: data.message || "No addresses were found for this postcode." }, { status: response.status });
  }

  const addresses = (data.result ?? []).map((item, index) => ({
    id: item.uprn || `${postcode}-${index}`,
    label: [item.line_1, item.line_2, item.line_3, item.post_town, item.county, item.postcode].filter(Boolean).join(", "),
  }));
  return NextResponse.json({ addresses });
}
