"use client";

import { useState } from "react";

interface BarChartProps {
  data: { label: string; value: number }[];
  height?: number;
  barColor?: string;
  maxValue?: number;
}

export default function BarChart({
  data,
  height = 200,
  barColor = "var(--color-navy)",
  maxValue: maxValueProp,
}: BarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <div
        className="flex items-center justify-center text-sm text-slate"
        style={{ height }}
      >
        No data available
      </div>
    );
  }

  const maxValue = maxValueProp ?? Math.max(...data.map((d) => d.value), 1);
  const rotateLabels = data.length > 7;
  const yAxisLabels = [0, 0.25, 0.5, 0.75, 1].map((pct) =>
    Math.round(maxValue * pct)
  );
  const yAxisWidth = 40;

  return (
    <div className="w-full select-none">
      <div className="flex" style={{ height }}>
        {/* Y-axis labels */}
        <div
          className="flex flex-col justify-between text-xs text-slate pr-2 shrink-0"
          style={{ width: yAxisWidth }}
        >
          {yAxisLabels.reverse().map((label, i) => (
            <span key={i} className="text-right leading-none">
              {label}
            </span>
          ))}
        </div>

        {/* Chart area */}
        <div className="flex-1 relative">
          {/* Horizontal grid lines at 25%, 50%, 75% */}
          {[0.75, 0.5, 0.25].map((pct) => (
            <div
              key={pct}
              className="absolute left-0 right-0 border-t border-gray-100"
              style={{ top: `${(1 - pct) * 100}%` }}
            />
          ))}
          {/* Bottom line */}
          <div className="absolute left-0 right-0 bottom-0 border-t border-gray-200" />

          {/* Bars */}
          <div className="flex items-end h-full gap-1 relative z-10">
            {data.map((item, i) => {
              const barHeight = (item.value / maxValue) * 100;
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center justify-end h-full relative"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-20">
                      {item.value.toLocaleString()}
                    </div>
                  )}
                  {/* Bar */}
                  <div
                    className="w-full max-w-[48px] rounded-t-sm transition-opacity duration-150 mx-auto"
                    style={{
                      height: `${barHeight}%`,
                      backgroundColor: barColor,
                      opacity: isHovered ? 0.85 : 1,
                      minHeight: item.value > 0 ? 2 : 0,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex" style={{ marginLeft: yAxisWidth }}>
        {data.map((item, i) => (
          <div key={i} className="flex-1 text-center mt-2">
            <span
              className={`text-xs text-slate block ${
                rotateLabels ? "-rotate-45 origin-top-left translate-x-2" : ""
              }`}
              title={item.label}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
