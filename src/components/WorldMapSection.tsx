import Link from "next/link";
import { continents } from "@/data/continents";

const POSITIONS: Record<string, string> = {
  "north-america": "left-[10%] top-[22%]",
  "south-america": "left-[24%] top-[58%]",
  europe: "left-[46%] top-[16%]",
  africa: "left-[46%] top-[46%]",
  asia: "left-[62%] top-[20%]",
  oceania: "left-[76%] top-[64%]",
  antarctica: "left-[46%] top-[86%]",
};

export default function WorldMapSection() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ocean-light">
              Explore the world
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
              Pick a continent to start exploring
            </h2>
          </div>
          <Link
            href="/continents"
            className="rounded-full border border-paper/20 px-4 py-2 text-sm font-medium text-paper/80 hover:border-paper/40 hover:text-paper"
          >
            View all continents →
          </Link>
        </div>

        <div className="relative mt-10 h-[340px] overflow-hidden rounded-2xl border border-paper/10 bg-ink-light/40 sm:h-[420px]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,248,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,248,241,0.4) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
            aria-hidden
          />
          {continents
            .filter((c) => c.slug !== "antarctica")
            .map((continent) => (
              <Link
                key={continent.slug}
                href={`/continents/${continent.slug}`}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 ${POSITIONS[continent.slug]}`}
              >
                <span className="flex flex-col items-center gap-1.5">
                  <span className="grid h-4 w-4 place-items-center rounded-full border-2 border-paper bg-ocean-light shadow-[0_0_0_4px_rgba(14,165,183,0.25)] transition group-hover:scale-125" />
                  <span className="whitespace-nowrap rounded-full bg-paper/95 px-2.5 py-1 text-xs font-semibold text-ink opacity-0 shadow transition group-hover:opacity-100">
                    {continent.name}
                  </span>
                </span>
              </Link>
            ))}
        </div>
        <p className="mt-3 text-center font-mono text-xs text-paper/40">
          A simplified world map — tap a marker to explore that continent
        </p>
      </div>
    </section>
  );
}
