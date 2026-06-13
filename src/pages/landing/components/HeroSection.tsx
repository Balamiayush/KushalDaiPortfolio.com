import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import Parallax from "@/shared/components/ui/Parallax";

const HeroSection = () => {
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
        className="relative flex w-full flex-col justify-end rounded-[20px] md:rounded-[24px] bg-tint-lavender p-5 pt-24 md:p-8 md:pt-32 lg:p-[24px] lg:pt-[140px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px] xl:min-h-[723px] 2xl:min-h-[90vh] overflow-hidden"
      >
        <Parallax
          distance={40}
          className="absolute inset-0 z-[-1] overflow-hidden rounded-[20px] md:rounded-[24px]"
        >
          <img
            src="https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_2400/v1768109206/IMG_5475_qgszwk.png"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full scale-[1.12] object-cover"
            alt="Kushal — designer behind 'From Peaks to Pixels'"
          />
        </Parallax>

        <m.div
          style={reduce ? undefined : { opacity, y }}
          className="heroContainer flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:px-[24px]"
        >
          <div className="flex flex-col items-start gap-3 lg:gap-2 lg:py-[24px]">
            <Copy animateOnScroll={false}>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[120%] tracking-[0.01em] text-ink">
                Namaste! This is Kushal
              </p>
            </Copy>
            <h1 className="-ml-0.5 lg:-ml-3.5 font-display text-[clamp(56px,14vw,206px)] leading-[84%] lg:leading-[76%] tracking-[0.01em] text-display">
              From Peaks <br />
              to Pixels
            </h1>
          </div>
          <Copy animateOnScroll={false}>
            <p className="max-w-full lg:max-w-[420px] xl:max-w-[480px] text-[14px] md:text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] font-normal tracking-[0.01em] text-ink">
              Creative designer shaping brands and products with strategy,
              storytelling, and user-centered design, also offering mentorship
              for design enthusiasts and learners.
            </p>
          </Copy>
        </m.div>
      </section>
    </div>
  );
};

export default HeroSection;
