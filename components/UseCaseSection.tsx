export default function UseCaseSection() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          আরএমজি শিল্পে সম্ভাব্য ব্যবহার
        </h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li>কাটিং ও সেলাই জোনে ধূলিকণা পর্যবেক্ষণ</li>
          <li>বয়লার বা রাসায়নিক অংশে গ্যাস ঝুঁকি পর্যবেক্ষণ</li>
          <li>শ্রমিক নিরাপত্তা পর্যবেক্ষণ সহায়তা</li>
          <li>জোনভিত্তিক পরিবেশ তুলনা</li>
          <li>কম খরচে স্মার্ট শিল্প নিরাপত্তা ড্যাশবোর্ড</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          গবেষণা ও একাডেমিক গুরুত্ব
        </h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li>IoT, cloud এবং web dashboard এর সমন্বিত ব্যবহার</li>
          <li>বাংলাদেশি শিল্প প্রেক্ষাপটে বাস্তব সমস্যা-ভিত্তিক সমাধান</li>
          <li>future multi-node deployment architecture</li>
          <li>low-cost monitoring approach</li>
          <li>final year project, paper, poster এবং viva এর জন্য উপযোগী</li>
        </ul>
      </div>
    </div>
  );
}