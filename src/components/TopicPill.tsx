import Link from "next/link";
import { Topic } from "@/lib/types";

export default function TopicPill({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-ocean/30 hover:text-ocean hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
    >
      <span aria-hidden>{topic.icon}</span>
      {topic.name}
    </Link>
  );
}
