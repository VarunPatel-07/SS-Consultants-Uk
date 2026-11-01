// Admin notification email for website enquiries. Email clients ignore <style> blocks and modern
// layout, so this is table-based with inline styles only.

export type EnquiryRow = [label: string, value: unknown];

export type EnquiryEmail = {
  kind: string;
  topic: string;
  customer: { name: string; email?: string; phone?: string };
  sections: Array<{ title: string; rows: EnquiryRow[] }>;
  message?: string;
  submittedFrom: string;
  submittedAt?: string;
  adminURL: string;
};

const COLORS = {
  page: "#eef2f0",
  header: "#111714",
  card: "#ffffff",
  brand: "#003e33",
  highlight: "#5dbbae",
  highlightSoft: "#e7f5f2",
  text: "#14201b",
  muted: "#66736e",
  border: "#e3e9e6",
  messageBackground: "#f5f8f7",
};
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const escapeHTML = (value: string) => value.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`);

export const formatValue = (value: unknown) =>
  value === null || value === undefined || value === "" ? "—" : String(value);

// Turns a stored path into something the admin recognises at a glance.
export const describePage = (path: string) => {
  if (path === "/") return "Homepage";
  if (path === "/boiler-quote") return "Boiler quote form";
  const service = path.match(/^\/services\/([^/]+)/)?.[1];
  if (service) return `Service page: ${service.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())}`;
  const page = path.replace(/^\/|\/$/g, "").replace(/-/g, " ");
  return page ? `${page.charAt(0).toUpperCase()}${page.slice(1)} page` : path;
};

const formatDate = (value?: string) =>
  new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/London" }).format(
    value ? new Date(value) : new Date(),
  );

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const rowHTML = ([label, value]: EnquiryRow, index: number) => {
  const text = escapeHTML(formatValue(value));
  const linked =
    label === "Email" && value
      ? `<a href="mailto:${text}" style="color:${COLORS.brand};text-decoration:underline">${text}</a>`
      : label === "Phone" && value
        ? `<a href="${escapeHTML(telHref(String(value)))}" style="color:${COLORS.brand};text-decoration:underline">${text}</a>`
        : text;
  return `<tr>
    <td valign="top" style="padding:12px 16px 12px 0;width:38%;font-family:${FONT};font-size:13px;color:${COLORS.muted};${index ? `border-top:1px solid ${COLORS.border};` : ""}">${escapeHTML(label)}</td>
    <td valign="top" style="padding:12px 0;font-family:${FONT};font-size:14px;font-weight:600;color:${COLORS.text};white-space:pre-wrap;word-break:break-word;${index ? `border-top:1px solid ${COLORS.border};` : ""}">${linked}</td>
  </tr>`;
};

const sectionHTML = ({ title, rows }: EnquiryEmail["sections"][number]) => `
  <tr><td style="padding:28px 32px 0">
    <p style="margin:0 0 8px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${COLORS.highlight}">${escapeHTML(title)}</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">${rows.map(rowHTML).join("")}</table>
  </td></tr>`;

export const renderEnquiryEmailHTML = (email: EnquiryEmail) => {
  const firstName = email.customer.name.split(" ")[0] || "customer";

  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${escapeHTML(email.kind)}</title></head>
<body style="margin:0;padding:0;background:${COLORS.page}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHTML(`${email.customer.name} · ${email.topic} · ${describePage(email.submittedFrom)}`)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${COLORS.page}">
    <tr><td align="center" style="padding:32px 12px">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;border-collapse:separate">
        <tr><td style="background:${COLORS.header};border-radius:16px 16px 0 0;padding:24px 32px">
          <p style="margin:0;font-family:${FONT};font-size:18px;font-weight:800;letter-spacing:0.5px;color:#ffffff">SS Consultants</p>
          <p style="margin:4px 0 0;font-family:${FONT};font-size:12px;color:${COLORS.highlight}">Heating &amp; boiler specialists · Website enquiries</p>
        </td></tr>
        <tr><td style="background:${COLORS.card};border-radius:0 0 16px 16px;padding:0 0 32px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr><td style="padding:32px 32px 0">
              <span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${COLORS.highlightSoft};font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${COLORS.brand}">${escapeHTML(email.kind)}</span>
              <h1 style="margin:16px 0 8px;font-family:${FONT};font-size:24px;line-height:1.3;font-weight:800;color:${COLORS.text}">New enquiry from ${escapeHTML(email.customer.name)}</h1>
              <p style="margin:0;font-family:${FONT};font-size:14px;line-height:1.6;color:${COLORS.muted}">
                <strong style="color:${COLORS.text}">${escapeHTML(email.topic)}</strong><br>
                Sent from the <strong style="color:${COLORS.text}">${escapeHTML(describePage(email.submittedFrom))}</strong> · ${escapeHTML(formatDate(email.submittedAt))}
              </p>
            </td></tr>
            ${email.message ? `<tr><td style="padding:28px 32px 0">
              <p style="margin:0 0 8px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${COLORS.highlight}">Message</p>
              <div style="padding:16px 18px;border-left:3px solid ${COLORS.highlight};border-radius:0 8px 8px 0;background:${COLORS.messageBackground};font-family:${FONT};font-size:14px;line-height:1.6;color:${COLORS.text};white-space:pre-wrap;word-break:break-word">${escapeHTML(email.message)}</div>
            </td></tr>` : ""}
            ${email.sections.map(sectionHTML).join("")}
            <tr><td align="center" style="padding:32px 32px 0">
              <a href="${escapeHTML(email.adminURL)}" style="display:block;padding:14px 20px;border-radius:999px;background:${COLORS.highlight};font-family:${FONT};font-size:15px;font-weight:800;color:${COLORS.brand};text-decoration:none">Open in the admin panel →</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:20px 32px;text-align:center;font-family:${FONT};font-size:12px;line-height:1.6;color:${COLORS.muted}">
          Sent automatically by the SS Consultants website.<br>Reply to this email to answer ${escapeHTML(firstName)} directly.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
};

export const renderEnquiryEmailText = (email: EnquiryEmail) =>
  [
    `${email.kind}: ${email.customer.name}`,
    `${email.topic} · sent from the ${describePage(email.submittedFrom)} · ${formatDate(email.submittedAt)}`,
    ...(email.message ? ["", "Message:", email.message] : []),
    ...email.sections.flatMap(({ title, rows }) => ["", title.toUpperCase(), ...rows.map(([label, value]) => `${label}: ${formatValue(value)}`)]),
    "",
    `Open in the admin panel: ${email.adminURL}`,
  ].join("\n");
