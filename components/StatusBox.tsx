type StatusBoxProps = {
  label: string;
  color: string;
  bg: string;
  border: string;
};

export default function StatusBox({
  label,
  color,
  bg,
  border,
}: StatusBoxProps) {
  return (
    <div className={`mt-8 rounded-2xl border p-6 text-center ${bg} ${border}`}>
      <h2 className="text-xl font-semibold text-slate-700">
        সামগ্রিক বায়ু অবস্থা
      </h2>
      <p className={`mt-3 text-4xl font-extrabold ${color}`}>{label}</p>
    </div>
  );
}