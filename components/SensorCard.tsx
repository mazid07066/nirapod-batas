type SensorCardProps = {
  title: string;
  value: string | number;
  unit?: string;
  cardClass: string;
};

export default function SensorCard({
  title,
  value,
  unit,
  cardClass,
}: SensorCardProps) {
  return (
    <div className={`rounded-2xl p-5 shadow-sm ${cardClass}`}>
      <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
      <div className="mt-3 flex items-end gap-2">
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        {unit ? (
          <span className="pb-1 text-sm font-semibold text-slate-600">
            {unit}
          </span>
        ) : null}
      </div>
    </div>
  );
}