export type CraftRatio = "4/5" | "4/3" | "square" | "16/10";

export type Craft = {
  id: string;
  src: string;
  alt: string;
  ratio: CraftRatio;
};

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=70`;

// TODO: replace with Kushal's real craft thumbnails. Placeholder set for layout.
const PHOTOS = [
  "1551288049-bebda4e38f71",
  "1561070791-2526d30994b8",
  "1766811025982-f96e8377a6b0",
  "1766767673764-118ee80228ea",
  "1761839258289-72f12b0de058",
  "1761839257961-4dce65b72d99",
];

const RATIOS: CraftRatio[] = ["4/5", "square", "4/3", "16/10", "4/5", "4/3"];

export const crafts: Craft[] = Array.from({ length: 12 }, (_, i) => ({
  id: `craft-${i + 1}`,
  src: img(PHOTOS[i % PHOTOS.length]),
  alt: `Craft experiment ${i + 1}`,
  ratio: RATIOS[i % RATIOS.length],
}));
