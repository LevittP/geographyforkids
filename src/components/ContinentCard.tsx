import Link from "next/link";
import { Continent } from "@/lib/types";
import PlaceholderImage from "./PlaceholderImage";

const CONTINENT_ICONS: Record<string, string> = {
  africa: "🦒",
  asia: "🏔️",
  europe: "🏰",
  "north-america": "🍁",
  "south-america": "🌴",
  oceania: "🏝️",
  antarctica: "🐧",
};

export default function ContinentCard({ continent }: { continent: Continent }) {
  return (
    <Link
      href={`/continents/${continent.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
    >
      <PlaceholderImage
        colorKey={continent.color}
        icon={CONTINENT_ICONS[continent.slug] ?? "🌍"}
        label={continent.name}
        className="h-28"
      />
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-ink group-hover:text-ocean">
          {continent.name}
        </h3>
        <p className="mt-1 text-xs text-ink/55">{continent.countryCount}</p>
      </div>
    </Link>
  );
}
