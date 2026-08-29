import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { topics } from "@/data/topics";

export const metadata: Metadata = {
  title: "Geography Topics",
  description: "Explore geography by topic: volcanoes, rivers, mountains, climate, oceans, and more.",
};

export default function TopicsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow={`${topics.length} topics`}
        title="Browse by topic"
        description="Dig into the big ideas that shape geography, wherever they show up in the world."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="group flex items-start gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden>
              {topic.icon}
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink group-hover:text-ocean">
                {topic.name}
              </h2>
              <p className="mt-1 text-sm text-ink/60">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
