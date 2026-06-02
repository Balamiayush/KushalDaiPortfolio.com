import { works } from "@/pages/work/data/works";
import { services } from "@/pages/services/data/services";

export const navLinks = [
  {
    id: "work",
    title: "Work",
    href: "/work",
    label: works.length,
  },
  {
    id: "services",
    title: "Services",
    href: "/services",
    label: services.length,
  },
  {
    id: "about",
    title: "About",
    href: "/about-us",
    label: null,
  },
];
