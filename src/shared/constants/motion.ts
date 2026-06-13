import { m } from "framer-motion";

/** Shared easing + viewport config so every animation feels consistent. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Motion-enabled tag map shared by Reveal / Stagger so we don't redefine it. */
export const MOTION_TAGS = {
  div: m.div,
  section: m.section,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  h4: m.h4,
  p: m.p,
  span: m.span,
  ul: m.ul,
  li: m.li,
  figure: m.figure,
} as const;

export type MotionTag = keyof typeof MOTION_TAGS;

/** Container variant: cascades its children in when scrolled into view. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0.04) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Child variant for a stagger container. */
export const fadeUpItem = (y = 24, duration = 0.6) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
});
