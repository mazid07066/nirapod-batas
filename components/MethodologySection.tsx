export default function MethodologySection() {
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
      <h2 className="text-2xl font-bold text-slate-800">
        সিস্টেম কীভাবে কাজ করে
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">১. ডেটা সংগ্রহ</h3>
          <p className="mt-3 leading-7 text-slate-700">
            তাপমাত্রা, আর্দ্রতা, গ্যাস এবং ধূলিকণা সেন্সর থেকে পরিবেশগত ডেটা সংগ্রহ করা হয়।
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">২. ক্লাউড আপলোড</h3>
          <p className="mt-3 leading-7 text-slate-700">
            সেন্সর ডেটা ThingSpeak ক্লাউড প্ল্যাটফর্মে পাঠানো হয় যাতে তা সংরক্ষণ ও বিশ্লেষণ করা যায়।
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">৩. ওয়েব বিশ্লেষণ</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Next.js ভিত্তিক ওয়েব অ্যাপ সর্বশেষ ডেটা নিয়ে ঝুঁকি অবস্থা, প্রবণতা ও টেবিল আকারে দেখায়।
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">৪. সিদ্ধান্ত সহায়তা</h3>
          <p className="mt-3 leading-7 text-slate-700">
            ড্যাশবোর্ড কারখানা ব্যবস্থাপক বা গবেষককে দ্রুত পরিবেশগত ঝুঁকি বুঝতে সাহায্য করে।
          </p>
        </div>
      </div>
    </div>
  );
}