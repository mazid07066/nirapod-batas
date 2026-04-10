type WarningBoxProps = {
  title: string;
  message: string;
};

export default function WarningBox({ title, message }: WarningBoxProps) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <h2 className="text-lg font-bold text-amber-700">{title}</h2>
      <p className="mt-2 leading-7 text-slate-700">{message}</p>
    </div>
  );
}