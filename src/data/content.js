// Static content for Lord of the Mysteries MVP site
export const intro = {
  title: "Lord of the Mysteries",
  tagline: "A tapestry of mysticism, steampunk, and the unknown",
  summary:
    "Set in a late-steampunk world pulsing with secret rituals and ancient deities, Lord of the Mysteries follows the ascent of an ordinary man who steps onto the path of the extraordinary. Discover Beyonder Sequences, occult pathways, and the balance between fate and free will.",
}

export const characters = [
  {
    name: "Klein Moretti",
    path: "Seer",
    description: "A cautious, witty investigator who treads the fog between sanity and revelation.",
  },
  {
    name: "Audrey Hall",
    path: "Audience",
    description: "A bright noble lady who learns to read hearts—and master her own.",
  },
  {
    name: "Alger Wilson",
    path: "Sailor",
    description: "A disciplined seafarer navigating tides, storms, and secrets.",
  },
  {
    name: "Derrick Berg",
    path: "Sun",
    description: "A steadfast youth from the darkness, chasing light and hope.",
  },
  {
    name: "Emlyn White",
    path: "Moon",
    description: "A proud bloodline’s heir, learning humility among mortals.",
  },
]

export const pathways = [
  {
    name: "Seer",
    highlights: ["Premonition", "Rituals", "Divination"],
  },
  {
    name: "Audience",
    highlights: ["Emotion Reading", "Hypnosis", "Influence"],
  },
  {
    name: "Sailor",
    highlights: ["Body Tempering", "Storm Affinity", "Maritime Mastery"],
  },
  {
    name: "Sun",
    highlights: ["Purification", "Radiance", "Courage"],
  },
  {
    name: "Moon",
    highlights: ["Night Affinity", "Shapeshifting", "Illusions"],
  },
  {
    name: "Apprentice",
    highlights: ["Scholarship", "Alchemy", "Mystic Tools"],
  },
  {
    name: "Hunter",
    highlights: ["Tracking", "Firearms", "Survival"],
  },
  {
    name: "Spectator",
    highlights: ["Calm Analysis", "Observation", "Inference"],
  },
  {
    name: "Demoness",
    highlights: ["Charm", "Transformation", "Fate Threads"],
  },
]

export const lore = [
  {
    category: "The Seven Churches",
    items: [
      "Evernight—shadows, dreams, and quiet revelations",
      "Lord of Storms—thunder, seas, and unyielding will",
      "God of Steam and Machinery—industry, progress, and gears",
      "Mother Goddess of Depravity—temptation, extremes, and rebirth",
      "The Sun—light, order, and watchful clarity",
      "The Fool—mystery, guidance, and gathering under the gray fog",
      "The Earth—harvest, resilience, and shelter",
    ],
  },
  {
    category: "Beyonder Paths",
    items: [
      "Nine major pathways with unique styles and philosophies",
      "Advancement through potions, acting, and restraint",
      "Sequences shape minds—wisdom is balance",
    ],
  },
  {
    category: "Time Periods",
    items: [
      "Fourth Epoch—gods in twilight and legends that linger",
      "Fifth Epoch—steam, factories, and human ambition",
      "Sixth Epoch—what comes after progress?",
    ],
  },
]

export const searchable = () => {
  const charDocs = characters.map((c) => ({
    type: "Character",
    title: c.name,
    path: c.path,
    text: c.description,
    url: "/characters",
  }))

  const pathwayDocs = pathways.map((p) => ({
    type: "Pathway",
    title: p.name,
    text: p.highlights.join(", "),
    url: "/sequences",
  }))

  const loreDocs = lore.flatMap((l) =>
    l.items.map((text) => ({ type: "Lore", title: l.category, text, url: "/lore" }))
  )

  return [...charDocs, ...pathwayDocs, ...loreDocs]
}
