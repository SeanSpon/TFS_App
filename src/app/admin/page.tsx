"use client";

import { leads, dailyLeads, leadSourceData } from "@/lib/admin/mock-data";
import StatCard from "@/components/admin/StatCard";
import LeadsTable from "@/components/admin/LeadsTable";
import BarChart from "@/components/admin/BarChart";
import DonutChart from "@/components/admin/DonutChart";
import MiniSparkline from "@/components/admin/MiniSparkline";

export default function AdminDashboard() {
  const totalLeads = leads.length;
  const thisWeekLeads = leads.filter((l) => l.date >= "2026-02-12").length;
  const converted = leads.filter((l) => l.status === "converted").length;
  const conversionRate = ((converted / totalLeads) * 100).toFixed(1);
  const topReferrer = "Google";

  const weeklySparkline = dailyLeads.slice(-7).map((d) => d.count);
  const convSparkline = [12, 14, 13, 16, 18, 17, 19.7];

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Leads"
          value={String(totalLeads)}
          change="+16%"
          changeType="up"
          sparklineData={dailyLeads.map((d) => d.count)}
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
        <StatCard
          title="This Week"
          value={String(thisWeekLeads)}
          change="+33%"
          changeType="up"
          sparklineData={weeklySparkline}
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
        <StatCard
          title="Conversion Rate"
          value={`${conversionRate}%`}
          change="+2.1%"
          changeType="up"
          sparklineData={convSparkline}
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <StatCard
          title="Top Referrer"
          value={topReferrer}
          change="45%"
          changeType="neutral"
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          }
        />
      </div>

      {/* Charts + Recent Leads */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Leads — Last 14 Days</h2>
          <BarChart
            data={dailyLeads.map((d) => ({
              label: d.date.slice(5),
              value: d.count,
            }))}
            height={220}
            barColor="#0f1b2d"
          />
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Lead Sources</h2>
          <DonutChart
            data={leadSourceData.map((d) => ({
              label: d.source,
              value: d.percentage,
              color: d.color,
            }))}
            size={180}
            centerLabel="Sources"
            centerValue={String(totalLeads)}
          />
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy">Recent Leads</h2>
          <a href="/admin/leads" className="text-sm text-gold hover:text-gold-dark font-medium transition-colors">
            View all →
          </a>
        </div>
        <LeadsTable leads={leads} compact limit={5} />
      </div>
    </div>
  );
}
