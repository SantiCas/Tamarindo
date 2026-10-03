export const PROFILES = [
  "Juan Carlos y Graciela",
  "Nico y Lucre",
  "Ale y César",
  "Maia y Santi",
  "Sebi y Kyan",
  "Flor",
] as const;

export type Profile = (typeof PROFILES)[number];

export const PROFILE_COLORS: Record<Profile, string> = {
  "Juan Carlos y Graciela": "bg-blue-100 text-blue-800 border-blue-300",
  "Nico y Lucre": "bg-green-100 text-green-800 border-green-300",
  "Ale y César": "bg-purple-100 text-purple-800 border-purple-300",
  "Maia y Santi": "bg-pink-100 text-pink-800 border-pink-300",
  "Sebi y Kyan": "bg-orange-100 text-orange-800 border-orange-300",
  "Flor": "bg-teal-100 text-teal-800 border-teal-300",
};

export const PROFILE_EMOJIS: Record<Profile, string> = {
  "Juan Carlos y Graciela": "👴👵",
  "Nico y Lucre": "👨‍👩‍",
  "Ale y César": "🧑‍🤝‍🧑",
  "Maia y Santi": "💑",
  "Sebi y Kyan": "🧑‍🤝‍🧑",
  "Flor": "🌸",
};
