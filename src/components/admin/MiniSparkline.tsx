"use client";

interface MiniSparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
}

export default function MiniSparkline({
  data,
  width = 80,
  height = 24,
  color = "#c9a84c",
}: MiniSparklineProps) {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  // Pad slightly so the line does not touch the very top/bottom
  const padding = 2;
  const plotHeight = height - padding * 2;
  const stepX = width / (data.length - 1);

  const points = data
    .map((value, i) => {
      const x = i * stepX;
      const y = padding + plotHeight - ((value - min) / range) * plotHeight;
      return `${x},${y}`;
    })
    .join(" ");

  // Build the fill polygon path (area under the line)
  const fillPoints = [
    `0,${height}`,
    ...data.map((value, i) => {
      const x = i * stepX;
      const y = padding + plotHeight - ((value - min) / range) * plotHeight;
      return `${x},${y}`;
    }),
    `${width},${height}`,
  ].join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="inline-block"
      aria-hidden="true"
    >
      {/* Transparent fill under the line */}
      <polygon points={fillPoints} fill={color} opacity={0.1} />
      {/* The line itself */}
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
