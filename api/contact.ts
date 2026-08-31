import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as postmark from "postmark";

const FROM_EMAIL = "Larry@Hacksoft.net";
const TO_EMAIL = "Larry@Hacksoft.net";

// Real visitors take at least this long to fill out the form; bots that
// submit immediately after loading the page are almost certainly spam.
const MIN_SUBMIT_TIME_MS = 3000;

type ContactPayload = {
  "your-name"?: string;
  "your-email"?: string;
  "your-subject"?: string;
  "your-message"?: string;
  "your-website"?: string; // honeypot: hidden from real users, bots fill it in
  "form-loaded-at"?: number;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body as ContactPayload;
  const name = body?.["your-name"]?.trim();
  const email = body?.["your-email"]?.trim();
  const subject = body?.["your-subject"]?.trim();
  const message = body?.["your-message"]?.trim();
  const honeypot = body?.["your-website"]?.trim();
  const loadedAt = body?.["form-loaded-at"];

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const submittedTooFast =
    typeof loadedAt !== "number" || Date.now() - loadedAt < MIN_SUBMIT_TIME_MS;

  if (honeypot || submittedTooFast) {
    // Report success without sending mail so bots don't learn to adapt.
    res.status(200).json({ ok: true });
    return;
  }

  const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN as string);

  try {
    await client.sendEmail({
      From: FROM_EMAIL,
      To: TO_EMAIL,
      ReplyTo: email,
      Subject: `Form message from Hacksoft.net: ${subject || "(no subject)"}`,
      TextBody: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(no subject)"}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
}
