import { Continent } from "@/lib/types";

export const continents: Continent[] = [
  {
    slug: "africa",
    name: "Africa",
    description:
      "The second-largest continent, home to the Sahara Desert, the Nile River, and more countries than any other continent.",
    countryCount: "54 countries",
    areaKm2: "~30.4 million km²",
    population: "~1.4 billion",
    highestPoint: "Mount Kilimanjaro, Tanzania (5,895 m)",
    color: "compass",
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Africa" },
      { name: "United Nations", url: "https://www.un.org" },
    ],
  },
  {
    slug: "asia",
    name: "Asia",
    description:
      "The largest and most populous continent, stretching from the Ural Mountains to the Pacific Ocean and home to Mount Everest.",
    countryCount: "48 countries",
    areaKm2: "~44.6 million km²",
    population: "~4.7 billion",
    highestPoint: "Mount Everest, Nepal/China (8,849 m)",
    color: "leaf",
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Asia" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
    ],
  },
  {
    slug: "europe",
    name: "Europe",
    description:
      "A continent of peninsulas and seas, known for its long coastline, diverse cultures, and dense concentration of nations.",
    countryCount: "44 countries",
    areaKm2: "~10.2 million km²",
    population: "~745 million",
    highestPoint: "Mount Elbrus, Russia (5,642 m)",
    color: "ocean",
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Europe" },
      { name: "United Nations", url: "https://www.un.org" },
    ],
  },
  {
    slug: "north-america",
    name: "North America",
    description:
      "Home to Canada, the United States, Mexico, and Central America, spanning Arctic tundra to tropical rainforest.",
    countryCount: "23 countries",
    areaKm2: "~24.7 million km²",
    population: "~600 million",
    highestPoint: "Denali, United States (6,190 m)",
    color: "ink",
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/North-America" },
      { name: "U.S. Geological Survey", url: "https://www.usgs.gov" },
    ],
  },
  {
    slug: "south-america",
    name: "South America",
    description:
      "Home to the Amazon rainforest, the Andes mountains, and the driest place on Earth, the Atacama Desert.",
    countryCount: "12 countries",
    areaKm2: "~17.8 million km²",
    population: "~436 million",
    highestPoint: "Aconcagua, Argentina (6,961 m)",
    color: "leaf",
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/South-America" },
      { name: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov" },
    ],
  },
  {
    slug: "oceania",
    name: "Oceania",
    description:
      "A region of islands spread across the Pacific Ocean, including Australia, New Zealand, and thousands of smaller islands.",
    countryCount: "14 countries",
    areaKm2: "~8.5 million km²",
    population: "~45 million",
    highestPoint: "Puncak Jaya, Indonesia (4,884 m)",
    color: "ocean",
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Oceania" },
    ],
  },
  {
    slug: "antarctica",
    name: "Antarctica",
    description:
      "Earth's southernmost and coldest continent, almost entirely covered by an ice sheet and governed by international treaty.",
    countryCount: "No permanent residents",
    areaKm2: "~14.2 million km²",
    population: "No permanent population",
    highestPoint: "Vinson Massif (4,892 m)",
    color: "ink",
    sources: [
      { name: "National Oceanic and Atmospheric Administration (NOAA)", url: "https://www.noaa.gov" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Antarctica" },
    ],
  },
];

export function getContinentBySlug(slug: string) {
  return continents.find((c) => c.slug === slug);
}
