import { useRef, type ReactNode } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical drift in px across the element's pass through the viewport. */
  distance?: number;
};

/**
 * Drifts its children vertically as the wrapper scrolls through the viewport.
 * Pair with an overflow-hidden parent and a slightly over-scaled child so the
 * drift never exposes an edge. No-ops under prefers-reduced-motion.
 */
export default function Parallax({
  children,
  className,
  distance = 60,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <m.div className="h-full w-full" style={reduce ? undefined : { y }}>
        {children}
      </m.div>
    </div>
  );
}
