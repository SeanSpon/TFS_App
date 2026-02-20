import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const rows = await sql`SELECT * FROM leads ORDER BY date DESC, id DESC`;
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, company, email, phone, city, state, current_software, num_returns, source, notes } = body;

  const rows = await sql`
    INSERT INTO leads (name, company, email, phone, city, state, current_software, num_returns, source, notes)
    VALUES (${name}, ${company}, ${email}, ${phone || null}, ${city || null}, ${state || null}, ${current_software || null}, ${num_returns || 0}, ${source || "Direct"}, ${notes || null})
    RETURNING *
  `;

  return NextResponse.json(rows[0], { status: 201 });
}
