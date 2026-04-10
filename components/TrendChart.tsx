type TrendPoint = {
  label: string;
  value: number;
};

type TrendChartProps = {
  title: string;
  unit: string;
  points: TrendPoint[];
};

export default function TrendChart({
  title,
  unit,
  points,
}: TrendChartProps) {
  const validPoints = points.filter((point) => !Number.isNaN(point.value));

  if (validPoints.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p className="mt-4 text-slate-600">চার্ট ডেটা পাওয়া যায়নি</p>
      </div>
    );
  }

  const width = 500;
  const height = 220;
  const padding = 30;

  const minValue = Math.min(...validPoints.map((p) => p.value));
  const maxValue = Math.max(...validPoints.map((p) => p.value));
  const range = maxValue - minValue || 1;

  const pointsString = validPoints
    .map((point, index) => {
      const x =
        padding +
        (index * (width - padding * 2)) / Math.max(validPoints.length - 1, 1);
      const y =
        height -
        padding -
        ((point.value - minValue) / range) * (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
          একক: {unit}
        </span>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-56 w-full rounded-xl bg-slate-50"
        role="img"
        aria-label={`${title} trend chart`}
      >
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#cbd5e1"
          strokeWidth="2"
        />

        <polyline
          fill="none"
          stroke="#0284c7"
          strokeWidth="3"
          points={pointsString}
        />

        {validPoints.map((point, index) => {
          const x =
            padding +
            (index * (width - padding * 2)) / Math.max(validPoints.length - 1, 1);
          const y =
            height -
            padding -
            ((point.value - minValue) / range) * (height - padding * 2);

          return (
            <g key={`${point.label}-${index}`}>
              <circle cx={x} cy={y} r="4" fill="#0284c7" />
              <text
                x={x}
                y={height - 10}
                textAnchor="middle"
                fontSize="10"
                fill="#475569"
              >
                {point.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
        <div>
          সর্বনিম্ন: <span className="font-semibold">{minValue.toFixed(2)}</span>
        </div>
        <div>
          সর্বোচ্চ: <span className="font-semibold">{maxValue.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}