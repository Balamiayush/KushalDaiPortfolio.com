import { useRef, type ReactNode } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Eyebrow from "@/shared/components/ui/Eyebrow";
import Reveal from "@/shared/components/ui/Reveal";

type Tint = "lavender" | "cream" | "sage" | "blue" | "pink";

const TINTS: Record<Tint, string> = {
  lavender: "bg-tint-lavender",
  cream: "bg-tint-cream",
  sage: "bg-tint-sage",
  blue: "bg-tint-blue",
  pink: "bg-tint-pink",
};

type PageHeroProps = {
  tint: Tint;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Extra content rendered at the bottom of the card (meta strips, etc.). */
  children?: ReactNode;
};

/**
 * Tinted hero card shared across inner pages. The title is a plain animated
 * heading (no line masking) so tight display leading never gets clipped.
 * The content fades + lifts away as the hero scrolls out, handing off to the
 * floating nav box.
 */
export default function PageHero({
  tint,
  eyebrow,
  title,
  intro,
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.55], [0, -48]);

  return (
    <div className="relative mx-auto w-full p-3 md:p-[24px]">
      <section
        ref={ref}
        className={`relative flex w-full flex-col justify-end overflow-hidden rounded-[20px] md:rounded-[24px] ${TINTS[tint]} p-5 pt-24 md:p-8 md:pt-32 lg:p-10 lg:pt-[140px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px]`}
      >
        <m.div style={reduce ? undefined : { opacity, y }}>
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex flex-col items-start gap-3 lg:gap-2">
              <Eyebrow onMount>{eyebrow}</Eyebrow>
              <Reveal
                as="h1"
                onMount
                delay={0.05}
                duration={0.7}
                className="-ml-0.5 lg:-ml-3.5 font-display text-[clamp(56px,12vw,180px)] leading-[84%] lg:leading-[80%] tracking-[0.01em] text-display"
              >
                {title}
              </Reveal>
            </div>
            {intro && (
              <Reveal
                as="p"
                onMount
                delay={0.1}
                duration={0.7}
                className="max-w-full lg:max-w-[420px] xl:max-w-[480px] text-[14px] md:text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] font-normal tracking-[0.01em] text-ink"
              >
                {intro}
              </Reveal>
            )}
          </div>
          {children}
        </m.div>
      </section>
    </div>
  );
}
