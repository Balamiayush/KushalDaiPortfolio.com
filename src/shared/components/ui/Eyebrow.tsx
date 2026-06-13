import type { ReactNode } from "react";
import Reveal from "./Reveal";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  onMount?: boolean;
  delay?: number;
};

/** Small uppercase label that sits above section headings. */
export default function Eyebrow({
  children,
  className = "text-accent",
  onMount,
  delay,
}: EyebrowProps) {
  return (
    <Reveal
      as="p"
      onMount={onMount}
      delay={delay}
      y={12}
      duration={0.5}
      className={`text-[12px] md:text-[13px] uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </Reveal>
  );
}
