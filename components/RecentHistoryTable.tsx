type HistoryRow = {
  time: string;
  temperature: string;
  humidity: string;
  mq2: string;
  dust: string;
};

type RecentHistoryTableProps = {
  rows: HistoryRow[];
};

export default function RecentHistoryTable({
  rows,
}: RecentHistoryTableProps) {
  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800">সাম্প্রতিক রেকর্ড</h3>
        <p className="mt-4 text-slate-600">সারণির জন্য ডেটা পাওয়া যায়নি</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-slate-800">সাম্প্রতিক রেকর্ড</h3>

      <table className="min-w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b bg-slate-50">
            <th className="px-4 py-3 font-semibold text-slate-700">সময়</th>
            <th className="px-4 py-3 font-semibold text-slate-700">তাপমাত্রা</th>
            <th className="px-4 py-3 font-semibold text-slate-700">আর্দ্রতা</th>
            <th className="px-4 py-3 font-semibold text-slate-700">MQ2</th>
            <th className="px-4 py-3 font-semibold text-slate-700">ধূলিকণা</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.time}-${index}`} className="border-b last:border-b-0">
              <td className="px-4 py-3 text-slate-700">{row.time}</td>
              <td className="px-4 py-3 text-slate-700">{row.temperature}</td>
              <td className="px-4 py-3 text-slate-700">{row.humidity}</td>
              <td className="px-4 py-3 text-slate-700">{row.mq2}</td>
              <td className="px-4 py-3 text-slate-700">{row.dust}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}