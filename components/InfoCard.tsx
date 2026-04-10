type InfoCardProps = {
  title: string;
  value: string;
};

export default function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-700">{title}</h3>
      <p className="mt-2 text-lg font-medium text-slate-900">{value}</p>
    </div>
  );
}