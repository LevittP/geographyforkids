import { Source } from "@/lib/types";

export default function SourcesList({ sources }: { sources: Source[] }) {
  return (
    <section className="rounded-xl border border-ink/10 bg-sand/40 p-5 sm:p-6" aria-labelledby="sources-heading">
      <h2 id="sources-heading" className="font-display text-lg font-semibold text-ink">
        Sources
      </h2>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">
        Fact-checked against these references
      </p>
      <ul className="mt-4 space-y-2">
        {sources.map((s) => (
          <li key={s.name} className="flex items-start gap-2 text-sm text-ink/80">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" aria-hidden />
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-ocean/40 underline-offset-2 hover:text-ocean"
              >
                {s.name}
              </a>
            ) : (
              <span>{s.name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
