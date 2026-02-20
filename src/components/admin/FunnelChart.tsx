"use client";

interface FunnelChartProps {
  steps: { label: string; value: number; color: string }[];
}

export default function FunnelChart({ steps }: FunnelChartProps) {
  if (!steps || steps.length === 0) {
    return (
      <div className="flex items-center justify-center text-sm text-slate py-8">
        No funnel data
      </div>
    );
  }

  const maxValue = steps[0].value || 1;

  return (
    <div className="w-full space-y-2">
      {steps.map((step, i) => {
        const widthPct = Math.max((step.value / maxValue) * 100, 8);
        const percentage = Math.round((step.value / maxValue) * 100);

        return (
          <div key={i} className="flex flex-col items-center">
            {/* Row: label bar value */}
            <div className="w-full flex items-center gap-3">
              {/* Label */}
              <div className="w-28 shrink-0 text-sm font-medium text-navy text-right">
                {step.label}
              </div>

              {/* Bar container */}
              <div className="flex-1 flex justify-center">
                <div
                  className="h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: step.color,
                    minWidth: 48,
                  }}
                >
                  <span className="text-white text-sm font-semibold drop-shadow-sm">
                    {step.value.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Percentage */}
              <div className="w-14 shrink-0 text-sm text-slate font-medium text-left">
                {percentage}%
              </div>
            </div>

            {/* Connector between bars (not after the last) */}
            {i < steps.length - 1 && (
              <div className="w-0.5 h-2 bg-gray-200 my-0.5" />
            )}
          </div>
        );
      })}
    </div>
  );
}
