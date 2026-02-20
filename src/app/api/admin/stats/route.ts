import { NextResponse } from "next/server";
import { getSQL } from "@/lib/db";

export async function GET() {
  const sql = getSQL();
  const [totalResult, weekResult, convertedResult, sourceResult] = await Promise.all([
    sql`SELECT COUNT(*) as count FROM leads`,
    sql`SELECT COUNT(*) as count FROM leads WHERE date >= CURRENT_DATE - INTERVAL '7 days'`,
    sql`SELECT COUNT(*) as count FROM leads WHERE status = 'converted'`,
    sql`SELECT source, COUNT(*) as count FROM leads GROUP BY source ORDER BY count DESC LIMIT 1`,
  ]);

  const total = Number(totalResult[0].count);
  const thisWeek = Number(weekResult[0].count);
  const converted = Number(convertedResult[0].count);
  const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : "0";
  const topReferrer = sourceResult[0]?.source ?? "N/A";

  return NextResponse.json({
    totalLeads: total,
    thisWeekLeads: thisWeek,
    conversionRate,
    topReferrer,
  });
}
