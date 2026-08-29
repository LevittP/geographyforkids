import { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "how-volcanoes-form",
    title: "How Volcanoes Form",
    description:
      "From magma chambers to explosive eruptions, here's how volcanoes build themselves layer by layer.",
    content: [
      "Volcanoes form where molten rock, called magma, finds a path from deep inside the Earth up to the surface. Most of this activity happens along the edges of tectonic plates — the huge slabs of rock that make up Earth's outer shell — where plates pull apart, collide, or slide past one another.",
      "When magma reaches the surface, it's called lava. As lava cools and hardens, it builds up layer by layer, slowly forming the cone-shaped mountains most people picture when they think of a volcano. Some eruptions are slow, gentle lava flows; others are violent explosions caused by trapped gas escaping suddenly.",
      "Not all volcanoes look the same. Shield volcanoes, like Hawaii's Mauna Loa, have gentle slopes built from runny lava. Stratovolcanoes, like Japan's Mount Fuji, are steeper and built from alternating layers of lava and ash. Scientists at the U.S. Geological Survey monitor active volcanoes closely, tracking small earthquakes and ground swelling that often signal an eruption is coming.",
      "About 1,500 volcanoes worldwide are considered potentially active, and roughly 350 million people live close enough to one to be affected by an eruption. Understanding how volcanoes form helps scientists predict eruptions and keep nearby communities safer.",
    ],
    category: "Landforms",
    continentSlug: undefined,
    tags: ["volcanoes", "plate tectonics", "landforms"],
    sources: [
      { name: "U.S. Geological Survey", url: "https://www.usgs.gov/programs/VHP" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/science/volcano" },
      { name: "NOAA", url: "https://www.noaa.gov" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-02-12",
    updatedAt: "2025-06-03",
    heroImageAlt: "A cone-shaped volcano with a plume of smoke rising from its summit",
    heroImageColor: "compass",
    relatedSlugs: ["earths-tectonic-plates", "mount-fuji-japans-sacred-peak", "why-the-pacific-has-a-ring-of-fire"],
    readingLevel: "beginner",
    readingTimeMinutes: 4,
    featured: true,
  },
  {
    slug: "why-the-pacific-has-a-ring-of-fire",
    title: "Why the Pacific Has a 'Ring of Fire'",
    description:
      "A horseshoe-shaped zone around the Pacific Ocean is home to most of the world's earthquakes and volcanoes. Here's why.",
    content: [
      "The Ring of Fire is a roughly 40,000-kilometer belt that traces the edges of the Pacific Ocean, running along the coasts of the Americas, up through Alaska, and down through Japan, Southeast Asia, and New Zealand. It isn't a single ring of lava — it's a pattern of volcanic and earthquake activity that follows the boundaries of several tectonic plates.",
      "Along much of this belt, the massive Pacific Plate is sliding beneath neighboring plates in a process called subduction. As one plate dives under another, it melts and releases magma that fuels volcanoes, while the grinding motion between plates triggers earthquakes.",
      "According to the U.S. Geological Survey, about 90% of the world's earthquakes and roughly 75% of its active volcanoes occur along the Ring of Fire. That includes well-known volcanoes like Mount St. Helens in the United States, Mount Fuji in Japan, and dozens of active peaks in Indonesia and the Philippines.",
      "Living along the Ring of Fire means many countries have invested heavily in earthquake-resistant buildings and volcanic monitoring systems, since millions of people call this seismically active zone home.",
    ],
    category: "Landforms",
    tags: ["volcanoes", "earthquakes", "plate tectonics", "Pacific Ocean"],
    sources: [
      { name: "U.S. Geological Survey", url: "https://www.usgs.gov" },
      { name: "NOAA", url: "https://www.noaa.gov" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-03-05",
    updatedAt: "2025-01-18",
    heroImageAlt: "A map-style illustration of the Pacific Ocean rim highlighted in orange",
    heroImageColor: "compass",
    relatedSlugs: ["how-volcanoes-form", "earths-tectonic-plates", "mount-fuji-japans-sacred-peak"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: true,
  },
  {
    slug: "earths-tectonic-plates",
    title: "Earth's Tectonic Plates, Explained",
    description:
      "Earth's crust is broken into giant puzzle pieces that are always moving — just very, very slowly.",
    content: [
      "Earth's outer shell isn't one solid piece — it's broken into roughly a dozen major tectonic plates and many smaller ones, floating on the hot, slowly flowing rock of the mantle beneath them. These plates carry the continents and ocean floors, and they're always moving, though usually just a few centimeters a year — about as fast as fingernails grow.",
      "Where plates meet, three things can happen: they can pull apart (divergent boundaries), crash together (convergent boundaries), or slide past each other (transform boundaries). Each type of boundary creates different features. Divergent boundaries can form new ocean floor or rift valleys. Convergent boundaries build mountain ranges like the Himalayas or trigger volcanic eruptions. Transform boundaries, like California's San Andreas Fault, are notorious for causing earthquakes.",
      "The theory of plate tectonics, developed in the 20th century, transformed how scientists understand geography. It explains why similar fossils and rock formations turn up on continents now separated by oceans, and why earthquakes and volcanoes cluster in predictable belts around the globe.",
    ],
    category: "Geography Concepts",
    tags: ["plate tectonics", "earthquakes", "mountains"],
    sources: [
      { name: "U.S. Geological Survey", url: "https://www.usgs.gov" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/science/plate-tectonics" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2023-11-20",
    updatedAt: "2025-02-10",
    heroImageAlt: "Diagram-style illustration of tectonic plates fitting together like puzzle pieces",
    heroImageColor: "ink",
    relatedSlugs: ["how-volcanoes-form", "why-the-pacific-has-a-ring-of-fire", "how-mountains-are-made"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "how-mountains-are-made",
    title: "How Mountains Are Made",
    description:
      "Not all mountains form the same way. Here are the main forces that push, fold, and build up Earth's peaks.",
    content: [
      "Mountains form in a few different ways, but most of the world's largest ranges are built when tectonic plates collide. When two plates carrying continents crash into each other, neither can sink beneath the other, so the crust crumples and folds upward instead — this is exactly how the Himalayas formed, and continue to grow, as the Indian and Eurasian plates push together.",
      "Other mountains form through volcanic activity, building up from repeated lava flows and ash deposits, like Mount Fuji in Japan or Mount Kilimanjaro in Tanzania. Still others, called fault-block mountains, form when large chunks of crust are pushed up or tilted along fractures in the Earth's surface, as seen in the Sierra Nevada of the United States.",
      "Mountain building is incredibly slow by human standards — the Himalayas rise only a few millimeters most years — but over millions of years, that slow uplift adds up to peaks that scrape the sky.",
    ],
    category: "Landforms",
    tags: ["mountains", "plate tectonics"],
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/science/mountain-landform" },
      { name: "U.S. Geological Survey", url: "https://www.usgs.gov" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-01-08",
    updatedAt: "2024-12-02",
    heroImageAlt: "A jagged mountain range with snow-capped peaks",
    heroImageColor: "ink",
    relatedSlugs: ["earths-tectonic-plates", "mount-everest-the-roof-of-the-world", "mount-fuji-japans-sacred-peak"],
    readingLevel: "beginner",
    readingTimeMinutes: 4,
    featured: false,
  },
  {
    slug: "mount-everest-the-roof-of-the-world",
    title: "Mount Everest: The Roof of the World",
    description:
      "At 8,849 meters, Everest is Earth's highest point above sea level — and it's still growing.",
    content: [
      "Mount Everest sits on the border between Nepal and China, in the heart of the Himalayan mountain range. Its summit rises 8,849 meters above sea level, making it the highest point on Earth — though it isn't the tallest mountain measured base to peak, an honor that belongs to Hawaii's Mauna Kea.",
      "Everest formed, and is still forming, because the Indian tectonic plate continues to push into the Eurasian plate, slowly lifting the entire Himalayan range. Surveys using GPS and satellite data suggest Everest grows by a few millimeters most years.",
      "The mountain's extreme altitude creates brutal conditions: oxygen levels near the summit are about a third of what they are at sea level, and temperatures can plunge far below freezing even in the warmer climbing months. Local Sherpa communities, who have lived in the region for centuries, have deep knowledge of the mountain and often guide expeditions.",
      "Everest is known by different names in the region — Sagarmatha in Nepali and Chomolungma in Tibetan — both of which long predate its English name, given in honor of surveyor Sir George Everest in the 19th century.",
    ],
    category: "Landforms",
    countrySlug: undefined,
    tags: ["mountains", "Himalayas", "Nepal"],
    sources: [
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Mount-Everest" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2023-09-14",
    updatedAt: "2025-05-20",
    heroImageAlt: "The snow-covered peak of Mount Everest against a clear sky",
    heroImageColor: "ink",
    relatedSlugs: ["how-mountains-are-made", "earths-tectonic-plates"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: true,
  },
  {
    slug: "the-amazon-river-and-rainforest",
    title: "The Amazon River and Rainforest",
    description:
      "The Amazon Basin holds the largest rainforest on Earth and a river system that carries more water than any other.",
    content: [
      "The Amazon River flows roughly 6,400 kilometers across South America, mostly through Brazil, and discharges more water into the ocean than the next several largest rivers combined. Its basin — the land drained by the river and its tributaries — covers about 40% of South America.",
      "Surrounding the river is the Amazon rainforest, the largest tropical rainforest on Earth at roughly 5.5 million square kilometers. It spans nine countries, though the majority lies within Brazil. Scientists estimate the Amazon is home to about 10% of the world's known species, many found nowhere else.",
      "The Amazon plays an outsized role in the planet's climate. Its trees release enormous amounts of water vapor into the atmosphere, helping generate its own rainfall, and the forest stores vast amounts of carbon. Because of this, researchers with NASA and other organizations closely track deforestation in the region using satellite imagery.",
      "Indigenous communities have lived in the Amazon Basin for thousands of years, developing deep knowledge of the forest's plants and ecosystems long before the region was studied by outside scientists.",
    ],
    category: "Ecosystems",
    countrySlug: "brazil",
    continentSlug: "south-america",
    tags: ["rainforests", "rivers", "Brazil", "biodiversity"],
    sources: [
      { name: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
      { name: "Smithsonian", url: "https://www.si.edu" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2023-08-02",
    updatedAt: "2025-04-11",
    heroImageAlt: "An aerial view of the winding Amazon River cutting through dense rainforest",
    heroImageColor: "leaf",
    relatedSlugs: ["rainforests-and-why-they-matter", "brazil-country-profile", "life-in-the-worlds-deserts"],
    readingLevel: "beginner",
    readingTimeMinutes: 5,
    featured: true,
  },
  {
    slug: "rainforests-and-why-they-matter",
    title: "Rainforests and Why They Matter",
    description:
      "Tropical rainforests cover a small slice of Earth's surface but hold an outsized share of its life.",
    content: [
      "Tropical rainforests cover only about 6% of Earth's land surface, yet they're home to more than half of the world's plant and animal species, according to estimates from conservation and scientific organizations. Their warm, wet climate and year-round growing season create ideal conditions for an extraordinary diversity of life.",
      "The largest rainforests today are the Amazon in South America, the Congo Basin in Central Africa, and the forests of Southeast Asia, including Borneo and Sumatra. Each supports species found nowhere else on Earth, from jaguars and poison dart frogs in the Amazon to gorillas in the Congo Basin.",
      "Rainforests also help regulate the planet's climate by absorbing large amounts of carbon dioxide and releasing oxygen. Because of their size and importance, scientists and international organizations closely monitor rainforest health and deforestation rates using satellite data.",
    ],
    category: "Ecosystems",
    tags: ["rainforests", "biodiversity", "climate"],
    sources: [
      { name: "Smithsonian", url: "https://www.si.edu" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-04-22",
    updatedAt: "2025-03-01",
    heroImageAlt: "Sunlight filtering through the dense canopy of a tropical rainforest",
    heroImageColor: "leaf",
    relatedSlugs: ["the-amazon-river-and-rainforest", "life-in-the-worlds-deserts"],
    readingLevel: "beginner",
    readingTimeMinutes: 4,
    featured: false,
  },
  {
    slug: "life-in-the-worlds-deserts",
    title: "Life in the World's Deserts",
    description:
      "Deserts cover about a fifth of Earth's land, and the plants and animals there have remarkable ways of surviving.",
    content: [
      "A desert isn't defined by heat — it's defined by dryness. Any region that receives less than about 250 millimeters of rain a year qualifies, which is why some deserts, like Antarctica's dry valleys, are bitterly cold. Together, deserts cover roughly one-fifth of Earth's land surface.",
      "The Sahara, spanning much of North Africa, is the largest hot desert on Earth at about 9.2 million square kilometers — nearly the size of the United States. Despite its harsh conditions, the Sahara is home to specially adapted plants, insects, and animals like fennec foxes and dromedary camels.",
      "Desert plants and animals have evolved remarkable strategies to survive: cacti store water in thick stems, many desert animals are active only at night to avoid the heat, and some seeds can lie dormant for years, sprouting only after rare rainfall.",
      "Not all deserts are sandy. Some, like parts of the Atacama Desert in Chile — one of the driest places on Earth — are rocky and mineral-rich, while polar deserts are covered in ice rather than sand.",
    ],
    category: "Ecosystems",
    tags: ["deserts", "climate", "biodiversity"],
    sources: [
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
      { name: "NOAA", url: "https://www.noaa.gov" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-05-30",
    updatedAt: "2025-01-09",
    heroImageAlt: "Sand dunes stretching to the horizon under a bright sky",
    heroImageColor: "compass",
    relatedSlugs: ["rainforests-and-why-they-matter", "the-amazon-river-and-rainforest"],
    readingLevel: "beginner",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "mount-fuji-japans-sacred-peak",
    title: "Mount Fuji: Japan's Sacred Peak",
    description:
      "Japan's tallest mountain is an active volcano, a UNESCO World Heritage site, and a lasting symbol of the country.",
    content: [
      "Mount Fuji rises 3,776 meters above sea level, making it Japan's highest peak. Located about 100 kilometers southwest of Tokyo, its near-perfectly symmetrical cone is one of the most recognized mountain silhouettes in the world.",
      "Fuji is an active stratovolcano, built up over hundreds of thousands of years from repeated eruptions of lava and ash. Its most recent eruption was in 1707–1708, and volcanologists with Japan's government continue to monitor it for signs of activity.",
      "For centuries, Mount Fuji has held deep cultural and spiritual significance in Japan, appearing in classical art, literature, and religious pilgrimage traditions. In 2013, UNESCO added Mount Fuji to its World Heritage List, recognizing it as a 'sacred place and source of artistic inspiration.'",
      "Today, hundreds of thousands of people climb Mount Fuji each year during the official climbing season, which typically runs from early July to early September.",
    ],
    category: "Landforms",
    countrySlug: "japan",
    continentSlug: "asia",
    tags: ["volcanoes", "mountains", "Japan"],
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Mount-Fuji" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2023-12-01",
    updatedAt: "2025-02-27",
    heroImageAlt: "Mount Fuji's snow-capped cone rising above the surrounding landscape",
    heroImageColor: "compass",
    relatedSlugs: ["how-volcanoes-form", "japan-country-profile", "why-the-pacific-has-a-ring-of-fire"],
    readingLevel: "beginner",
    readingTimeMinutes: 4,
    featured: false,
  },
  {
    slug: "the-nile-worlds-longest-river",
    title: "The Nile: One of the World's Longest Rivers",
    description:
      "The Nile has shaped life in northeast Africa for thousands of years, and it's still central to the region today.",
    content: [
      "The Nile River flows roughly 6,650 kilometers through northeastern Africa, making it one of the longest rivers on Earth — often cited as the longest, though researchers continue to debate exact measurements against South America's Amazon. It flows north, emptying into the Mediterranean Sea through a wide delta in Egypt.",
      "The river is formed by two main tributaries: the White Nile, which begins near the Great Lakes region of East Africa, and the Blue Nile, which starts at Lake Tana in Ethiopia. The two merge in Sudan before flowing on through Egypt.",
      "For thousands of years, the Nile's predictable annual flooding deposited nutrient-rich silt across its banks, allowing ancient Egyptian civilization to flourish in an otherwise desert landscape. Today, more than 90% of Egypt's population still lives within a few kilometers of the river.",
      "The Nile remains a critical water source for the eleven countries it passes through, and it continues to be a subject of major regional agreements over how its water is shared.",
    ],
    category: "Rivers",
    countrySlug: "egypt",
    continentSlug: "africa",
    tags: ["rivers", "Egypt", "Africa"],
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Nile-River" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-02-27",
    updatedAt: "2025-03-15",
    heroImageAlt: "The Nile River winding through a green valley surrounded by desert",
    heroImageColor: "ocean",
    relatedSlugs: ["egypt-country-profile", "life-in-the-worlds-deserts", "the-amazon-river-and-rainforest"],
    readingLevel: "beginner",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "the-great-barrier-reef",
    title: "The Great Barrier Reef: Earth's Largest Living Structure",
    description:
      "Stretching over 2,300 kilometers, Australia's Great Barrier Reef is visible from space and home to thousands of species.",
    content: [
      "The Great Barrier Reef stretches for more than 2,300 kilometers off the coast of Queensland, Australia, making it the largest coral reef system on Earth. It's made up of nearly 3,000 individual reefs and hundreds of islands, and it's large enough to be visible from space.",
      "Coral reefs form when tiny animals called coral polyps build hard skeletons of calcium carbonate. Over thousands of years, generations of coral build on top of each other, creating the reef structures that support an enormous range of marine life, including roughly 1,500 species of fish.",
      "The reef faces serious threats from rising ocean temperatures, which can cause coral bleaching — a stress response where coral expels the colorful algae living in its tissue. NOAA and Australian marine science agencies closely monitor sea temperatures and coral health across the reef.",
      "In 1981, the Great Barrier Reef was named a UNESCO World Heritage Site in recognition of its outstanding natural value.",
    ],
    category: "Ecosystems",
    countrySlug: "australia",
    continentSlug: "oceania",
    tags: ["oceans", "Australia", "biodiversity"],
    sources: [
      { name: "NOAA", url: "https://www.noaa.gov" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Great-Barrier-Reef" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-06-10",
    updatedAt: "2025-05-02",
    heroImageAlt: "A colorful coral reef teeming with fish beneath clear blue water",
    heroImageColor: "ocean",
    relatedSlugs: ["australia-country-profile", "the-five-oceans-explained"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: true,
  },
  {
    slug: "the-five-oceans-explained",
    title: "The Five Oceans, Explained",
    description:
      "The Pacific, Atlantic, Indian, Southern, and Arctic oceans cover 71% of Earth's surface. Here's what sets each apart.",
    content: [
      "Earth's oceans are all connected, forming one continuous body of saltwater, but geographers and oceanographers typically divide them into five named oceans: the Pacific, Atlantic, Indian, Southern, and Arctic. Together, they cover about 71% of the planet's surface.",
      "The Pacific is by far the largest and deepest, covering more area than all of Earth's landmasses combined and containing the Mariana Trench, the deepest known point in any ocean. The Atlantic is the second-largest, separating the Americas from Europe and Africa. The Indian Ocean is the warmest of the major oceans, bordered by Africa, Asia, and Australia.",
      "The Southern Ocean, surrounding Antarctica, was formally recognized as Earth's fifth ocean by the National Geographic Society in 2021, defined by the eastward-flowing Antarctic Circumpolar Current rather than by bordering continents. The Arctic Ocean, the smallest and shallowest, is covered in sea ice for much of the year.",
      "Oceans regulate global climate by absorbing heat and carbon dioxide, and they support an immense share of life on Earth, most of which remains unexplored.",
    ],
    category: "Oceans",
    tags: ["oceans", "climate"],
    sources: [
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
      { name: "NOAA", url: "https://www.noaa.gov" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-07-01",
    updatedAt: "2025-06-14",
    heroImageAlt: "A world map highlighting the five named oceans in shades of blue",
    heroImageColor: "ocean",
    relatedSlugs: ["the-great-barrier-reef", "how-maps-represent-a-round-world"],
    readingLevel: "beginner",
    readingTimeMinutes: 4,
    featured: false,
  },
  {
    slug: "how-maps-represent-a-round-world",
    title: "How Maps Represent a Round World",
    description:
      "Every flat map distorts something. Here's how cartographers choose which trade-offs to make.",
    content: [
      "Earth is a sphere, but maps are flat — and there's no way to flatten a sphere without distorting something, whether it's shape, size, distance, or direction. This challenge is called the 'map projection problem,' and it has shaped the history of cartography for centuries.",
      "The Mercator projection, created in 1569, preserves angles and shapes well, which made it useful for sea navigation, but it drastically distorts the size of landmasses near the poles. On a Mercator map, Greenland appears roughly the same size as Africa, even though Africa is about 14 times larger.",
      "Other projections make different trade-offs. The Robinson projection balances shape and size distortion to create a more visually accurate 'compromise' map, while equal-area projections like the Gall-Peters preserve relative land area at the cost of distorting shapes.",
      "Modern digital maps and satellite navigation systems often use different projections depending on their purpose — zoomed-in city maps behave differently than whole-world views. Understanding projections helps map readers recognize when a map might be misleading them about relative size or distance.",
    ],
    category: "Geography Concepts",
    tags: ["maps", "cartography"],
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/science/map-projection" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-03-18",
    updatedAt: "2025-04-29",
    heroImageAlt: "A world map with visible longitude and latitude grid lines",
    heroImageColor: "ink",
    relatedSlugs: ["the-five-oceans-explained", "what-is-a-continent"],
    readingLevel: "advanced",
    readingTimeMinutes: 6,
    featured: false,
  },
  {
    slug: "what-is-a-continent",
    title: "What Exactly Is a Continent?",
    description:
      "Most people learn there are seven continents, but the definition is fuzzier than you'd think.",
    content: [
      "Most students learn that Earth has seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America. But geographers don't have one single, universally agreed-upon definition of 'continent' — and different countries teach different models.",
      "Some geography traditions combine Europe and Asia into a single continent, Eurasia, since they share one continuous landmass with no ocean between them. Others combine North and South America into 'the Americas,' since they're connected by the narrow Isthmus of Panama.",
      "Continents are generally defined by a mix of factors: large, continuous areas of land, distinct tectonic plates, and cultural or historical convention — not strict scientific rules. That's part of why Europe and Asia, which sit on largely separate tectonic plates but share a landmass, are still debated.",
      "In recent years, some geologists have also proposed classifying Zealandia — a mostly submerged landmass that includes New Zealand — as Earth's eighth continent, since it meets many geological criteria despite being 94% underwater.",
    ],
    category: "Geography Concepts",
    tags: ["continents", "geography concepts"],
    sources: [
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/continent" },
      { name: "National Geographic", url: "https://education.nationalgeographic.org" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-01-25",
    updatedAt: "2025-02-19",
    heroImageAlt: "A globe showing the outlines of Earth's continents",
    heroImageColor: "leaf",
    relatedSlugs: ["how-maps-represent-a-round-world", "earths-tectonic-plates"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "the-sahara-worlds-largest-hot-desert",
    title: "The Sahara: World's Largest Hot Desert",
    description:
      "The Sahara covers nearly a third of Africa, but it hasn't always been dry — and it doesn't stay perfectly still.",
    content: [
      "The Sahara Desert spans about 9.2 million square kilometers across North Africa, covering parts of eleven countries and making it the largest hot desert on Earth — roughly the size of the United States. Only the polar deserts of Antarctica and the Arctic are larger overall.",
      "Despite its current dryness, the Sahara hasn't always looked this way. Around 6,000 to 11,000 years ago, during a period researchers call the 'African Humid Period,' the region received far more rainfall and supported lakes, grassland, and human settlements — evidence still visible in ancient rock art depicting animals like giraffes and hippos.",
      "The Sahara's boundaries also shift somewhat from year to year and decade to decade, expanding and contracting with rainfall patterns — a process scientists continue to study using satellite data from organizations like NASA.",
      "Roughly 2.5 million people live in the Sahara today, many in oasis communities where underground water reaches the surface, and along its edges where seasonal rain allows limited agriculture.",
    ],
    category: "Ecosystems",
    continentSlug: "africa",
    tags: ["deserts", "Africa", "climate"],
    sources: [
      { name: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Sahara" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-05-08",
    updatedAt: "2025-01-30",
    heroImageAlt: "Rolling orange sand dunes of the Sahara Desert under a clear sky",
    heroImageColor: "compass",
    relatedSlugs: ["life-in-the-worlds-deserts", "the-nile-worlds-longest-river"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "japan-country-profile",
    title: "Japan: A Geography Overview",
    description:
      "An island nation shaped by mountains, volcanoes, and the sea — here's a geographic look at Japan.",
    content: [
      "Japan is an archipelago — a chain of islands — located off the eastern coast of Asia in the Pacific Ocean. Its four main islands, Honshu, Hokkaido, Kyushu, and Shikoku, are joined by thousands of smaller ones, and the country's mountainous terrain has shaped where and how its more than 123 million residents live.",
      "Because roughly 73% of Japan's land is mountainous or hilly, most cities and farmland are packed into narrow coastal plains, making Japan one of the most densely populated countries relative to its livable land area.",
      "Japan's location on the Pacific Ring of Fire means it experiences frequent earthquakes and is home to over 100 active volcanoes, including Mount Fuji. This same tectonic activity also created Japan's many natural hot springs, called onsen.",
      "The country spans a long north-south distance, giving it a wide range of climates — from snowy, subarctic conditions in Hokkaido to a humid subtropical climate in the southern islands of Okinawa.",
    ],
    category: "Country Profiles",
    countrySlug: "japan",
    continentSlug: "asia",
    tags: ["Japan", "islands", "volcanoes"],
    sources: [
      { name: "CIA World Factbook", url: "https://www.cia.gov/the-world-factbook/countries/japan/" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Japan" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2023-10-11",
    updatedAt: "2025-05-08",
    heroImageAlt: "A coastal Japanese landscape with mountains rising in the background",
    heroImageColor: "compass",
    relatedSlugs: ["mount-fuji-japans-sacred-peak", "why-the-pacific-has-a-ring-of-fire"],
    readingLevel: "beginner",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "how-glaciers-carve-the-land",
    title: "How Glaciers Carve the Land",
    description:
      "Slow-moving rivers of ice have sculpted some of the world's most dramatic landscapes.",
    content: [
      "Glaciers form in places where snow accumulates faster than it melts, year after year, compacting into thick, dense ice. Once a glacier reaches a certain thickness, gravity causes it to slowly flow downhill — sometimes just centimeters a day, sometimes much faster.",
      "As glaciers move, they act like slow-motion bulldozers, picking up rocks and debris that scrape and carve the land beneath them. This process, called glacial erosion, has carved out dramatic landscapes worldwide, including steep-sided valleys called fjords, sharp mountain ridges, and deep lake basins.",
      "Norway's fjords, New Zealand's Fiordland, and the Great Lakes of North America were all shaped substantially by glaciers during past ice ages, when far more of Earth's surface was covered in ice than today.",
      "Scientists with NASA and NOAA track modern glaciers closely, since many are retreating due to rising global temperatures — a trend that affects sea levels and freshwater supplies for communities that depend on glacial meltwater.",
    ],
    category: "Landforms",
    tags: ["glaciers", "climate", "landforms"],
    sources: [
      { name: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov" },
      { name: "NOAA", url: "https://www.noaa.gov" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-08-14",
    updatedAt: "2025-06-20",
    heroImageAlt: "A glacier flowing between steep mountain walls toward the sea",
    heroImageColor: "ink",
    relatedSlugs: ["how-mountains-are-made", "new-zealand-country-profile"],
    readingLevel: "intermediate",
    readingTimeMinutes: 5,
    featured: false,
  },
  {
    slug: "the-great-rift-valley",
    title: "The Great Rift Valley: A Continent Slowly Splitting",
    description:
      "In East Africa, a giant crack in the Earth's crust is slowly pulling the continent apart.",
    content: [
      "The Great Rift Valley is a massive geological feature stretching roughly 6,000 kilometers from the Middle East through East Africa, down to Mozambique. It marks the boundary where the African continent is slowly splitting into two tectonic plates: the Nubian and Somali plates.",
      "This splitting process, called continental rifting, is happening at a rate of just a few millimeters per year. Over millions of years, scientists expect the rift to widen enough that the Indian Ocean will eventually flood in, potentially creating a new ocean basin and separating a portion of East Africa from the rest of the continent.",
      "The rift has created dramatic landscapes across Kenya, Ethiopia, and Tanzania, including steep escarpments, volcanic peaks like Mount Kilimanjaro and Mount Kenya, and a chain of deep rift lakes such as Lake Malawi and Lake Tanganyika — among the deepest lakes in the world.",
      "The region is also famous among paleontologists: many of the most important early human fossils have been discovered along the Great Rift Valley, leading some researchers to call it the 'cradle of humankind.'",
    ],
    category: "Landforms",
    countrySlug: "kenya",
    continentSlug: "africa",
    tags: ["plate tectonics", "Africa", "Kenya"],
    sources: [
      { name: "Smithsonian", url: "https://www.si.edu" },
      { name: "Encyclopaedia Britannica", url: "https://www.britannica.com/place/Great-Rift-Valley" },
    ],
    author: "GeographyForKids Editorial Team",
    publishedAt: "2024-06-25",
    updatedAt: "2025-03-22",
    heroImageAlt: "A dramatic escarpment overlooking the East African rift valley",
    heroImageColor: "leaf",
    relatedSlugs: ["earths-tectonic-plates", "kenya-country-profile"],
    readingLevel: "advanced",
    readingTimeMinutes: 6,
    featured: false,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles() {
  return articles.filter((a) => a.featured);
}

export function getArticlesByCategory(category: string) {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

export function getArticlesByCountry(countrySlug: string) {
  return articles.filter((a) => a.countrySlug === countrySlug);
}

export function getArticlesByContinent(continentSlug: string) {
  return articles.filter((a) => a.continentSlug === continentSlug);
}

export function getArticlesByTopic(topicSlug: string) {
  return articles.filter((a) =>
    a.tags.some((t) => t.toLowerCase().replace(/\s+/g, "-") === topicSlug)
  );
}

export function getRelatedArticles(article: Article) {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}

export function getRecentArticles(limit = 6) {
  return [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
