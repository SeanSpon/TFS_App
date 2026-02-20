"use client";

import MiniSparkline from "@/components/admin/MiniSparkline";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "up" | "down" | "neutral";
  icon: React.ReactNode;
  sparklineData?: number[];
}

export default function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  sparklineData,
}: StatCardProps) {
  const changeBadgeClass =
    changeType === "up"
      ? "text-green-600 bg-green-50"
      : changeType === "down"
        ? "text-red-600 bg-red-50"
        : "text-slate bg-gray-100";

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 admin-stat-card">
      {/* Top row: icon + title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
          {icon}
        </div>
        <span className="text-sm text-slate font-medium">{title}</span>
      </div>

      {/* Middle: value */}
      <div className="text-3xl font-bold text-navy mb-3">{value}</div>

      {/* Bottom row: change badge + sparkline */}
      <div className="flex items-center justify-between">
        {change ? (
          <span
            className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${changeBadgeClass}`}
          >
            {changeType === "up" && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9.5V2.5M6 2.5L3 5.5M6 2.5L9 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {changeType === "down" && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 2.5V9.5M6 9.5L3 6.5M6 9.5L9 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {change}
          </span>
        ) : (
          <span />
        )}
        {sparklineData && sparklineData.length > 1 && (
          <MiniSparkline data={sparklineData} />
        )}
      </div>
    </div>
  );
}
