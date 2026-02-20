"use client";

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
}

export default function DonutChart({
  data,
  size = 200,
  strokeWidth = 32,
  centerLabel,
  centerValue,
}: DonutChartProps) {
  if (!data || data.length === 0) {
    return (
      <div
        className="flex items-center justify-center text-sm text-slate"
        style={{ width: size, height: size }}
      >
        No data
      </div>
    );
  }

  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) {
    return (
      <div
        className="flex items-center justify-center text-sm text-slate"
        style={{ width: size, height: size }}
      >
        No data
      </div>
    );
  }

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // Calculate segments
  let cumulativeOffset = 0;
  const segments = data.map((item) => {
    const proportion = item.value / total;
    const dashArray = proportion * circumference;
    // Rotate so the first segment starts at the top (-90 degrees)
    const rotation = (cumulativeOffset / total) * 360 - 90;
    cumulativeOffset += item.value;
    return {
      ...item,
      proportion,
      dashArray,
      rotation,
    };
  });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* SVG donut */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
          />
          {/* Data segments */}
          {segments.map((seg, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${seg.dashArray} ${circumference - seg.dashArray}`}
              strokeLinecap="butt"
              transform={`rotate(${seg.rotation} ${center} ${center})`}
              className="transition-all duration-300"
            />
          ))}
        </svg>
        {/* Center text */}
        {(centerValue || centerLabel) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {centerValue && (
              <span className="text-2xl font-bold text-navy">{centerValue}</span>
            )}
            {centerLabel && (
              <span className="text-xs text-slate font-medium">{centerLabel}</span>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-1.5 text-sm">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-slate">{seg.label}</span>
            <span className="text-slate font-medium">
              {Math.round(seg.proportion * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
