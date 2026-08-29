import { Topic } from "@/lib/types";

export const topics: Topic[] = [
  { slug: "volcanoes", name: "Volcanoes", description: "How volcanoes form, erupt, and shape the land around them.", icon: "🌋", color: "compass" },
  { slug: "rivers", name: "Rivers", description: "The world's great rivers and the life they support.", icon: "🌊", color: "ocean" },
  { slug: "mountains", name: "Mountains", description: "How mountain ranges form and the ecosystems they create.", icon: "⛰️", color: "ink" },
  { slug: "climate", name: "Climate", description: "Weather patterns, seasons, and the science of climate.", icon: "🌦️", color: "ocean" },
  { slug: "oceans", name: "Oceans", description: "Earth's five oceans and the life within them.", icon: "🐋", color: "ocean" },
  { slug: "deserts", name: "Deserts", description: "Earth's driest regions and how life adapts there.", icon: "🏜️", color: "compass" },
  { slug: "rainforests", name: "Rainforests", description: "The planet's richest ecosystems and why they matter.", icon: "🌳", color: "leaf" },
  { slug: "maps", name: "Maps & Cartography", description: "How mapmakers represent the world, from ancient charts to satellites.", icon: "🗺️", color: "ink" },
  { slug: "cultures", name: "Cultures & Peoples", description: "How geography shapes the way people live around the world.", icon: "🌍", color: "leaf" },
  { slug: "natural-disasters", name: "Natural Disasters", description: "Earthquakes, hurricanes, and other powerful natural events.", icon: "🌪️", color: "compass" },
];

export function getTopicBySlug(slug: string) {
  return topics.find((t) => t.slug === slug);
}
