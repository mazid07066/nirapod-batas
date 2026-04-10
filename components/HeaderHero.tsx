export default function HeaderHero() {
  return (
    <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex rounded-full bg-sky-600 px-4 py-1 text-sm font-bold text-white">
            RMG Air Monitoring Platform
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-sky-700 md:text-5xl">
            নিরাপদ বাতাস
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            বাংলাদেশে তৈরি পোশাক শিল্পের জন্য রিয়েল-টাইম বায়ু মান পর্যবেক্ষণ,
            ঝুঁকি শনাক্তকরণ এবং জোনভিত্তিক পরিবেশগত বিশ্লেষণ প্ল্যাটফর্ম।
          </p>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            প্রকল্পের ধরন
          </p>
          <p className="mt-1 text-lg font-bold text-slate-800">
            IoT + Cloud + Web Analytics
          </p>
        </div>
      </div>
    </div>
  );
}