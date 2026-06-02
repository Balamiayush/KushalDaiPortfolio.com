import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import TopData from "./TopWorkItem";
import { workData } from "../data/work-data";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const triggers: ScrollTrigger[] = [];
      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 65%",
            end: "bottom 65%",
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          })
        );
      });
      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  const handleTitleClick = (index: number) => {
    const target = imageRefs.current[index];
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      target.scrollIntoView({ block: "start" });
      return;
    }

    gsap.to(window, {
      scrollTo: { y: target, offsetY: 120 },
      duration: 1.2,
      ease: "expo.inOut",
    });
  };

  return (
    <section ref={sectionRef} className="py-[64px] md:py-[96px] lg:py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-[72px]">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <p className="font-[SansPlomb] text-[clamp(28px,4vw,40px)] leading-[110%] lg:leading-[100%] tracking-[0.01em] text-[#9897A3] xl:max-w-[550px]">
              Crafted with creativity, strategy, and purpose, all rooted in my{" "}
              <span className="text-[#604EBB]">love for design.</span>
            </p>
            <div className="self-start md:self-auto">
              <BigButton variant="purple" size="lg">
                Let’s turn your ideas into reality
              </BigButton>
            </div>
          </div>

          {/* Content */}
          <div className="relative flex w-full flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
            {/* LEFT (desktop only) */}
            <div className="hidden lg:block">
              <TopData
                activeIndex={activeIndex}
                onTitleClick={handleTitleClick}
              />
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col items-stretch gap-10 md:gap-14 lg:items-end lg:gap-[88px]">
              {workData.map((item, i) => (
                <figure key={item.id} className="w-full lg:w-1/2 flex flex-col gap-3">
                  <img
                    ref={(el) => {
                      imageRefs.current[i] = el;
                    }}
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto lg:h-[535px] lg:object-cover aspect-[4/3] lg:aspect-auto rounded-[12px]"
                  />
                  <figcaption className="lg:hidden">
                    <h3 className="font-[SansPlomb] text-[32px] leading-[100%] text-[#1D1D1E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[140%] text-[#5F5C6D]">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default WorkSection;
