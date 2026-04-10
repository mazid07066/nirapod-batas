type ZoneCardProps = {
  name: string;
  description: string;
  statusText: string;
  cardClass: string;
  isLive: boolean;
};

export default function ZoneCard({
  name,
  description,
  statusText,
  cardClass,
  isLive,
}: ZoneCardProps) {
  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${cardClass}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">{name}</h3>
          <p className="mt-2 leading-7 text-slate-700">{description}</p>
        </div>

        <div
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            isLive
              ? "bg-green-600 text-white"
              : "bg-slate-700 text-white"
          }`}
        >
          {statusText}
        </div>
      </div>
    </div>
  );
}