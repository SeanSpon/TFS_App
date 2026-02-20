"use client";

import {
  dailyPageViews,
  referrerData,
  deviceData,
  funnelSteps,
  pageMetrics,
} from "@/lib/admin/mock-data";
import StatCard from "@/components/admin/StatCard";
import BarChart from "@/components/admin/BarChart";
import DonutChart from "@/components/admin/DonutChart";
import FunnelChart from "@/components/admin/FunnelChart";

export default function AnalyticsPage() {
  const totalViews = dailyPageViews.reduce((sum, d) => sum + d.views, 0);
  const viewsSparkline = dailyPageViews.slice(-14).map((d) => d.views);

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Page Views"
          value={totalViews.toLocaleString()}
          change="+24%"
          changeType="up"
          sparklineData={viewsSparkline}
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          }
        />
        <StatCard
          title="Unique Visitors"
          value="3,219"
          change="+18%"
          changeType="up"
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        <StatCard
          title="Avg. Session"
          value="3:24"
          change="+0:12"
          changeType="up"
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Bounce Rate"
          value="42%"
          change="-3%"
          changeType="up"
          icon={
            <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
      </div>

      {/* Daily Views Chart */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-navy mb-4">Daily Page Views — Last 30 Days</h2>
        <BarChart
          data={dailyPageViews.map((d) => ({
            label: d.date.slice(5),
            value: d.views,
          }))}
          height={240}
          barColor="#0f1b2d"
        />
      </div>

      {/* Page Breakdown + Donuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Page Breakdown Table */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Pages</h2>
          <div className="space-y-3">
            {pageMetrics.map((page) => (
              <div key={page.page} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <p className="text-sm font-medium text-navy">{page.page}</p>
                  <p className="text-xs text-slate">
                    {page.avgTime} avg · {page.bounceRate}% bounce
                  </p>
                </div>
                <span className="text-sm font-bold text-navy">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Referrer Donut */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Traffic Sources</h2>
          <DonutChart
            data={referrerData.map((d) => ({
              label: d.source,
              value: d.percentage,
              color: d.color,
            }))}
            size={180}
            centerLabel="Referrers"
            centerValue="6"
          />
        </div>

        {/* Device Donut */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Devices</h2>
          <DonutChart
            data={deviceData.map((d) => ({
              label: d.device,
              value: d.percentage,
              color: d.color,
            }))}
            size={180}
            centerLabel="Devices"
            centerValue="3"
          />
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-navy mb-4">Conversion Funnel</h2>
        <FunnelChart steps={funnelSteps} />
      </div>
    </div>
  );
}
