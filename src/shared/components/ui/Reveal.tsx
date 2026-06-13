import { m } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const TAGS = {
  div: m.div,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  h4: m.h4,
  p: m.p,
  span: m.span,
  ul: m.ul,
  li: m.li,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof TAGS;
  delay?: number;
  y?: number;
  duration?: number;
  /** Animate on mount (above the fold) instead of when scrolled into view. */
  onMount?: boolean;
};

/**
 * Lightweight fade-rise wrapper. Unlike Copy it does not split/mask lines,
 * so it never clips tight line-height display type. Respects reduced motion
 * via the global MotionConfig.
 */
export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 24,
  duration = 0.6,
  onMount = false,
}: RevealProps) {
  const Comp = TAGS[as] as typeof m.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
      {...(onMount
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
          })}
    >
      {children}
    </Comp>
  );
}
