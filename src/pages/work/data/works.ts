export type Work = {
  id: string | number;
  title: string;
  src: string;
  type: string;
  feature: boolean;
};

export const works: Work[] = [
  {
    id: "esewa",
    title: "E-sewa",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=70",
    type: "Branding & strategy",
    feature: true,
  },
  {
    id: 2,
    title: "Aurora",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&auto=format&fit=crop&q=70",
    type: "Brand identity",
    feature: true,
  },
  {
    id: 3,
    title: "Loom Studio",
    src: "https://images.unsplash.com/photo-1766811025982-f96e8377a6b0?w=1200&auto=format&fit=crop&q=70",
    type: "Product design",
    feature: true,
  },
  {
    id: 4,
    title: "Verdant",
    src: "https://images.unsplash.com/photo-1766767673764-118ee80228ea?w=1200&auto=format&fit=crop&q=70",
    type: "Visuals & web",
    feature: false,
  },
  {
    id: 5,
    title: "Northwind",
    src: "https://images.unsplash.com/photo-1761839258289-72f12b0de058?w=1200&auto=format&fit=crop&q=70",
    type: "Brand & web",
    feature: false,
  },
  {
    id: 6,
    title: "Tide",
    src: "https://images.unsplash.com/photo-1761839257961-4dce65b72d99?w=1200&auto=format&fit=crop&q=70",
    type: "Visual system",
    feature: false,
  },
];
