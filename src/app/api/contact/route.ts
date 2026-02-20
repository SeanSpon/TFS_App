import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { name, company, phone, email, city, state, currentSoftware, numReturns, message } = data;

  // Build email body
  const lines = [
    `New Lead from TaxFeeder Website`,
    ``,
    `Contact Name: ${name}`,
    `Company: ${company}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    city ? `City: ${city}` : null,
    state ? `State: ${state}` : null,
    currentSoftware ? `Current Software: ${currentSoftware}` : null,
    numReturns ? `# of Returns: ${numReturns}` : null,
    message ? `\nMessage:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  // Log the lead for now — wire up email service (Resend, SendGrid, etc.) in production
  console.log("=== NEW LEAD ===");
  console.log(lines);
  console.log(`To: john@taxfeedersoftware.com`);
  console.log("================");

  // TODO: Wire up email delivery. Options:
  // 1. Resend (resend.com) — simple API, free tier
  // 2. SendGrid — established, free tier
  // 3. Nodemailer with SMTP
  // Example with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'TaxFeeder Website <noreply@taxfeedersoftware.com>',
  //   to: 'john@taxfeedersoftware.com',
  //   subject: `New Lead: ${name} - ${company}`,
  //   text: lines,
  // });

  return NextResponse.json({ success: true });
}
