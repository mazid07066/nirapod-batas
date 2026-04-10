export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="animate-pulse">
            <div className="mx-auto h-10 w-64 rounded bg-slate-200" />
            <div className="mx-auto mt-4 h-5 w-96 rounded bg-slate-200" />

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
            </div>

            <div className="mt-10 h-40 rounded-3xl bg-slate-200" />

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
              <div className="h-28 rounded-2xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}