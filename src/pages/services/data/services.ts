export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "brand-design",
    index: "01",
    title: "Brand Design",
    description:
      "Building timeless, authentic identities that tell a story, connect emotionally, and leave a lasting impression.",
    deliverables: [
      "Logo system & wordmark",
      "Brand guidelines",
      "Color & typography system",
      "Voice & messaging",
    ],
  },
  {
    id: "product-design",
    index: "02",
    title: "Product Design",
    description:
      "From first sketch to ship-ready UI — research-led product design for early teams and growing platforms.",
    deliverables: [
      "Discovery & user research",
      "User flows & wireframes",
      "High-fidelity UI",
      "Interactive prototypes",
    ],
  },
  {
    id: "visuals-web-design",
    index: "03",
    title: "Visuals & Web Design",
    description:
      "Marketing sites and visual systems that feel like the brand — clear, expressive, and built to convert.",
    deliverables: [
      "Marketing site design",
      "Landing pages & funnels",
      "Illustration & graphics",
      "Webflow/Framer handoff",
    ],
  },
  {
    id: "social-media",
    index: "04",
    title: "Social Media Management",
    description:
      "Templates, post systems, and content design that keep a brand consistent across every feed.",
    deliverables: [
      "Post templates",
      "Story & reel covers",
      "Content calendar visuals",
      "Brand-aligned thumbnails",
    ],
  },
];
