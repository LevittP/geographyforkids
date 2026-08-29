import type { Metadata } from "next";
import ContinentCard from "@/components/ContinentCard";
import SectionHeading from "@/components/SectionHeading";
import { continents } from "@/data/continents";

export const metadata: Metadata = {
  title: "All Continents",
  description: "Explore Earth's seven continents, from Africa to Antarctica.",
};

export default function ContinentsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="7 continents"
        title="Explore the continents"
        description="Every continent, with an overview of its size, population, and highest point."
      />
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {continents.map((c) => (
          <ContinentCard key={c.slug} continent={c} />
        ))}
      </div>
    </div>
  );
}
