import { NextResponse } from "next/server";
import { getSQL } from "@/lib/db";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const sql = getSQL();
  const { id } = await params;
  const body = await request.json();
  const { status, notes } = body;

  const rows = await sql`
    UPDATE leads
    SET status = COALESCE(${status ?? null}, status),
        notes = COALESCE(${notes ?? null}, notes),
        updated_at = NOW()
    WHERE id = ${Number(id)}
    RETURNING *
  `;

  if (rows.length === 0) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json(rows[0]);
}
