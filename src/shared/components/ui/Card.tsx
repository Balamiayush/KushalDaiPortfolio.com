import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Reveal from "./Reveal";

const card = tv({
  base: "border",
  variants: {
    tone: {
      surface: "border-line-soft bg-surface",
      outline:
        "border-line transition-colors hover:border-line-soft hover:bg-surface",
    },
    radius: {
      md: "rounded-2xl",
      lg: "rounded-[20px]",
      xl: "rounded-[20px] md:rounded-3xl",
    },
    padding: {
      none: "",
      sm: "p-5 md:p-6",
      md: "p-6 md:p-8 lg:p-10",
      lg: "p-6 md:p-8 lg:p-8",
    },
  },
  defaultVariants: { tone: "surface", radius: "lg", padding: "md" },
});

type CardProps = VariantProps<typeof card> & {
  children: ReactNode;
  className?: string;
  /** Scroll-reveal delay (seconds). Ignored when animate=false. */
  delay?: number;
  /** Animate in on scroll (default) or render static. */
  animate?: boolean;
};

export default function Card({
  children,
  className,
  delay,
  tone,
  radius,
  padding,
  animate = true,
}: CardProps) {
  const classes = card({ tone, radius, padding, class: className });

  if (!animate) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <Reveal as="div" delay={delay} className={classes}>
      {children}
    </Reveal>
  );
}
