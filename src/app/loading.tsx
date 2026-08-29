export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-64 rounded bg-ink/10" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-ink/10">
              <div className="h-40 bg-ink/10" />
              <div className="space-y-2 p-4">
                <div className="h-3 w-20 rounded bg-ink/10" />
                <div className="h-4 w-full rounded bg-ink/10" />
                <div className="h-4 w-2/3 rounded bg-ink/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
