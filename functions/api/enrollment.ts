type Env = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  ENROLLMENT_TO_EMAIL?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

const requiredFields = ["companyName", "country", "contactName", "email", "productCategory", "marketStage", "goals"];

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}

function sanitize(value: unknown) {
  return String(value || "").trim().slice(0, 3000);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fieldRow(label: string, value: string) {
  return `<tr><td style="padding:10px;border-bottom:1px solid #d9e4ee;color:#4f5f6d;width:180px;">${label}</td><td style="padding:10px;border-bottom:1px solid #d9e4ee;color:#111111;">${escapeHtml(value || "Not provided")}</td></tr>`;
}

export async function onRequestPost({ request, env }: PagesContext) {
  if (!env.RESEND_API_KEY) {
    return jsonResponse({ message: "Resend is not configured yet. Please email info@dentalmkt.us directly." }, 503);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse({ message: "Invalid form submission." }, 400);
  }

  if (sanitize(payload.companyWebsite)) {
    return jsonResponse({ message: "Submission received." });
  }

  const missing = requiredFields.filter((field) => !sanitize(payload[field]));
  if (missing.length > 0) {
    return jsonResponse({ message: "Please complete all required fields." }, 400);
  }

  const email = sanitize(payload.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ message: "Please enter a valid email address." }, 400);
  }

  const submission = {
    companyName: sanitize(payload.companyName),
    country: sanitize(payload.country),
    contactName: sanitize(payload.contactName),
    email,
    messagingContact: sanitize(payload.messagingContact),
    website: sanitize(payload.website),
    productCategory: sanitize(payload.productCategory),
    marketStage: sanitize(payload.marketStage),
    goals: sanitize(payload.goals),
    productNotes: sanitize(payload.productNotes)
  };

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111111;">
      <h1 style="font-size:24px;margin:0 0 16px;">Dental Market manufacturer review request</h1>
      <p style="margin:0 0 20px;color:#4f5f6d;">A manufacturer submitted the native Dental Market review form.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #d9e4ee;">
        ${fieldRow("Company", submission.companyName)}
        ${fieldRow("Country", submission.country)}
        ${fieldRow("Contact", submission.contactName)}
        ${fieldRow("Email", submission.email)}
        ${fieldRow("Phone / WhatsApp / WeChat", submission.messagingContact)}
        ${fieldRow("Website", submission.website)}
        ${fieldRow("Product category", submission.productCategory)}
        ${fieldRow("U.S. stage", submission.marketStage)}
        ${fieldRow("Goals", submission.goals)}
        ${fieldRow("Product notes", submission.productNotes)}
      </table>
    </div>
  `;

  const text = Object.entries(submission)
    .map(([key, value]) => `${key}: ${value || "Not provided"}`)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL || "Dental Market <onboarding@resend.dev>",
      to: [env.ENROLLMENT_TO_EMAIL || "info@dentalmkt.us"],
      reply_to: submission.email,
      subject: `Dental Market review request: ${submission.companyName}`,
      html,
      text
    })
  });

  if (!response.ok) {
    return jsonResponse({ message: "The form could not be sent. Please email info@dentalmkt.us directly." }, 502);
  }

  return jsonResponse({
    message: "Your review request was sent. Dental Market will review your information and contact qualified manufacturers."
  });
}

export function onRequestOptions() {
  return jsonResponse({});
}
