import { useRef } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HowWeWork = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const container = sectionRef.current;
          const scroller = container?.querySelector<HTMLElement>(".sideScroll");
          if (!container || !scroller) return;

          const scrollWidth = scroller.scrollWidth - container.offsetWidth;

          gsap.to(scroller, {
            x: -scrollWidth * 1.6,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${scrollWidth} `,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      );
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="lg:min-h-[563px] sideScrollContainer py-12 md:py-16 lg:py-[60px]"
    >
      <LayoutWrapper>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[69px] sideScroll h-full w-full">
          <div className="flex flex-col items-start justify-between gap-8 lg:h-[491px] lg:gap-0">
            <h3 className="w-full lg:w-[375px] font-[SansPlomb] text-[clamp(32px,5vw,60px)] leading-[100%] font-normal tracking-[0.01em]">
              My Way of Working to Shape Ideas into Design
            </h3>
            <BigButton variant="purple" size="lg">
              Let’s turn your ideas into reality
            </BigButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:gap-0">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full lg:w-[328.75px] aspect-[3/4] sm:aspect-auto sm:min-h-[420px] lg:h-[563px] lg:aspect-auto p-[24px] flex flex-col items-start justify-between bg-red-500 border border-[#CFCDE4]"
              />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default HowWeWork;
