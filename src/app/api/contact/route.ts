import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const MAX_BODY_BYTES = 16_384;
const buckets = new Map<string, { count: number; resetAt: number }>();

type Inquiry = {
  name: string;
  email: string;
  company: string;
  workload: string;
};

function requestId() {
  return crypto.randomUUID();
}

function rateLimit(ip: string) {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || current.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_PER_WINDOW) return false;
  current.count += 1;
  return true;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function readString(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, max);
}

function buildMessage(inquiry: Inquiry, id: string) {
  const subject = `ArcaSys inquiry — ${inquiry.company || inquiry.name}`;
  const text = [
    "New inquiry from the ArcaSys website.",
    `Source: ${site.url}/contact`,
    `Request ID: ${id}`,
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company || "—"}`,
    "",
    "Requirements:",
    inquiry.workload,
  ].join("\n");

  return { subject, text };
}

async function sendWithResend(to: string, inquiry: Inquiry, id: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    throw new Error("INQUIRY_NOT_CONFIGURED");
  }

  const { subject, text } = buildMessage(inquiry, id);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject,
      text,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(payload.message || "Email provider rejected the inquiry.");
  }

  return payload.id ?? id;
}

export async function POST(request: Request) {
  const id = requestId();
  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Inquiry is too large.", requestId: id },
      { status: 413 },
    );
  }

  if (!rateLimit(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many inquiries. Please try again later.", requestId: id },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request.", requestId: id },
      { status: 400 },
    );
  }

  if (readString(body.website, 200)) {
    return NextResponse.json({ ok: true, requestId: id });
  }

  const inquiry: Inquiry = {
    name: readString(body.name, 120),
    email: readString(body.email, 160).toLowerCase(),
    company: readString(body.company, 160),
    workload: readString(body.workload, 8000),
  };

  if (inquiry.name.length < 2 || !EMAIL_RE.test(inquiry.email) || inquiry.workload.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Please complete name, work email, and requirements.", requestId: id },
      { status: 400 },
    );
  }

  if (body.privacy !== true) {
    return NextResponse.json(
      { ok: false, error: "Please accept the privacy notice to send an inquiry.", requestId: id },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO || site.email;
  if (!to) {
    return NextResponse.json(
      { ok: false, error: "Contact inbox is not configured.", requestId: id },
      { status: 500 },
    );
  }

  try {
    const providerId = await sendWithResend(to, inquiry, id);
    return NextResponse.json({ ok: true, requestId: providerId });
  } catch (error) {
    const raw = error instanceof Error ? error.message : "Could not send the inquiry.";
    const configured = raw !== "INQUIRY_NOT_CONFIGURED";
    console.error("contact_inquiry_failed", { requestId: id, error: raw });
    return NextResponse.json(
      {
        ok: false,
        error: configured
          ? "The inquiry could not be delivered. Email us directly or try again."
          : "Inquiry email is not configured on the server yet. Use the direct email link.",
        requestId: id,
        mailto: true,
      },
      { status: configured ? 502 : 503 },
    );
  }
}
