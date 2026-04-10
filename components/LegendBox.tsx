export default function LegendBox() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">ঝুঁকি নির্দেশক</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
          <div className="inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
            নিরাপদ
          </div>
          <p className="mt-3 leading-7 text-slate-700">
            গ্যাস ও ধূলিকণার মাত্রা তুলনামূলকভাবে গ্রহণযোগ্য সীমায় রয়েছে।
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
          <div className="inline-block rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
            সতর্কতা
          </div>
          <p className="mt-3 leading-7 text-slate-700">
            বায়ুর মান পরিবর্তিত হচ্ছে। দ্রুত পর্যবেক্ষণ ও সতর্ক ব্যবস্থাপনা প্রয়োজন।
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
          <div className="inline-block rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            বিপজ্জনক
          </div>
          <p className="mt-3 leading-7 text-slate-700">
            ক্ষতিকর অবস্থা সনাক্ত হয়েছে। অবিলম্বে ব্যবস্থা নেওয়া প্রয়োজন হতে পারে।
          </p>
        </div>
      </div>
    </div>
  );
}