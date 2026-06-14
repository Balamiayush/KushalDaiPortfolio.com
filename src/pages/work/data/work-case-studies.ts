export type CaseTint = "cream" | "sage" | "blue" | "pink" | "lime";

export type CaseBlock =
  | { kind: "text"; eyebrow?: string; title?: string; body: string }
  | {
      kind: "image";
      src: string;
      alt: string;
      ratio?: "16/9" | "4/3" | "4/5";
      caption?: string;
      tint?: CaseTint;
    }
  | { kind: "duo"; items: { src: string; alt: string; tint?: CaseTint }[] }
  | { kind: "quote"; body: string; cite?: string };

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  services: string[];
  cover: string;
  overview: string;
  blocks: CaseBlock[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=70`;

// TODO: real copy + imagery per project. Samples below; key by the work id.
const caseStudies: Record<string, CaseStudy> = {
  // Matches the landing "second section" work (workData id 1 — Cr8rs).
  "1": {
    id: "1",
    title: "Cr8rs",
    category: "Product & brand",
    year: "2025",
    client: "Cr8rs",
    role: "Brand & product design",
    services: ["Brand identity", "Product UI", "Design system"],
    cover:
      "https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_2000/v1767983982/Frame_1171275272_2_xf2kyo.png",
    overview:
      "Cr8rs helps streamers and digital creators monetize their content and connect with their audience. We shaped the brand and the product surface together so the experience feels like one confident voice.",
    blocks: [
      {
        kind: "text",
        eyebrow: "The challenge",
        title: "A creator platform that needed to feel like home.",
        body: "Creators live in their tools all day. The product had to be fast and familiar, and the brand had to feel personal rather than corporate — energetic, but never noisy.",
      },
      {
        kind: "duo",
        items: [
          { src: img("1561070791-2526d30994b8"), alt: "Brand directions" },
          {
            src: img("1766811025982-f96e8377a6b0"),
            alt: "Dashboard concepts",
            tint: "lime",
          },
        ],
      },
      {
        kind: "image",
        src: img("1766767673764-118ee80228ea", 2000),
        alt: "Cr8rs product across devices",
        ratio: "16/9",
      },
    ],
  },
  esewa: {
    id: "esewa",
    title: "E-sewa",
    category: "Branding & strategy",
    year: "2025",
    client: "eSewa",
    role: "Brand & product design",
    services: ["Brand identity", "Design system", "Product UI", "Guidelines"],
    cover: img("1551288049-bebda4e38f71", 2000),
    overview:
      "eSewa is Nepal's most-used digital wallet. We rebuilt the brand from the ground up — a clearer mark, a warmer palette, and a design system that scales across a sprawling product surface without losing its voice.",
    blocks: [
      {
        kind: "text",
        eyebrow: "The challenge",
        title: "A trusted utility that had outgrown its look.",
        body: "Millions relied on eSewa daily, but the identity hadn't kept pace with the product. We needed a system that felt dependable and modern at once — legible at a glance, flexible enough for everything from billboards to a 32px app icon.",
      },
      {
        kind: "duo",
        items: [
          { src: img("1561070791-2526d30994b8"), alt: "Logo exploration" },
          {
            src: img("1766811025982-f96e8377a6b0"),
            alt: "Color studies",
            tint: "lime",
          },
        ],
      },
      {
        kind: "image",
        src: img("1766767673764-118ee80228ea", 2000),
        alt: "Brand applications across print and screen",
        ratio: "16/9",
        caption: "The system applied across product, print, and social.",
      },
      {
        kind: "text",
        eyebrow: "The system",
        title: "One language, every surface.",
        body: "Type, color, motion, and iconography were defined as tokens so the in-house team could ship consistent work without a designer in the room — the real measure of a system that holds.",
      },
      {
        kind: "duo",
        items: [
          {
            src: img("1761839258289-72f12b0de058"),
            alt: "Mobile screens",
            tint: "lime",
          },
          { src: img("1761839257961-4dce65b72d99"), alt: "Iconography set" },
        ],
      },
      {
        kind: "quote",
        body: "It finally feels like one product instead of ten — and our team can build on it without asking us every time.",
        cite: "Product Lead, eSewa",
      },
    ],
  },
};

export const getCaseStudy = (id?: string) =>
  id ? caseStudies[id] : undefined;
