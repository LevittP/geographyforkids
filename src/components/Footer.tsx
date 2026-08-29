import Link from "next/link";
import { continents } from "@/data/continents";
import { topics } from "@/data/topics";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-paper font-display text-sm font-bold text-ink">
                G
              </span>
              <span className="font-display text-base font-bold text-paper">
                GeographyForKids
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              A free educational geography resource, built from trusted
              references and written for curious young explorers.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-paper/50">
              Continents
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {continents.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/continents/${c.slug}`} className="hover:text-white hover:underline">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-paper/50">
              Topics
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {topics.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link href={`/topics/${t.slug}`} className="hover:text-white hover:underline">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-paper/50">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/articles" className="hover:text-white hover:underline">All articles</Link></li>
              <li><Link href="/countries" className="hover:text-white hover:underline">All countries</Link></li>
              <li><Link href="/search" className="hover:text-white hover:underline">Search</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} GeographyForKids. Educational content only —
            always cross-check facts with the linked primary sources.
          </p>
          <p>
            Built with data from Encyclopaedia Britannica, National Geographic, NASA,
            NOAA, USGS, the CIA World Factbook, the United Nations, and the Smithsonian.
          </p>
        </div>
      </div>
    </footer>
  );
}
