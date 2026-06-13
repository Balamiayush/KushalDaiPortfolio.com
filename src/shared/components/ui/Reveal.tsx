import type { ReactNode } from "react";
import { MOTION_TAGS, EASE, VIEWPORT, type MotionTag } from "@/shared/constants/motion";
import { m } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTag;
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
  const Comp = MOTION_TAGS[as] as typeof m.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
      {...(onMount
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: VIEWPORT })}
    >
      {children}
    </Comp>
  );
}
