import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  source?: string;
  projectSummary?: Record<string, unknown>;
};

function safe(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const source = payload.source?.trim();

  if (!name || !email || !source || !email.includes("@")) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL || "info@hepburnarchitects.com";
  const fromEmail = process.env.LEAD_FROM_EMAIL || "Hepburn Architects <info@hepburnarchitects.com>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Lead delivery has not been configured." },
      { status: 503 }
    );
  }

  const rows = Object.entries(payload.projectSummary || {})
    .map(([key, value]) => {
      const rendered = Array.isArray(value) ? value.join(", ") : String(value);
      return `<tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>${safe(key)}</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${safe(rendered)}</td></tr>`;
    })
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New ${source === "build-cost" ? "build-cost" : "architect-fee"} lead: ${name}`,
      html: `
        <h1>New website calculator lead</h1>
        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Calculator:</strong> ${safe(source)}</p>
        <table style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table>
      `,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend lead delivery failed:", detail);
    return NextResponse.json({ error: "Unable to deliver lead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
