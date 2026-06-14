import { useRef } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description:
      "Understanding your goals, audience, and constraints through research and honest conversation.",
  },
  {
    id: "define",
    number: "02",
    title: "Define",
    description:
      "Turning insight into a clear direction — narrative, scope, and the problem worth solving.",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description:
      "Crafting brand, product, and visuals together — iterating closely with you at every step.",
  },
  {
    id: "deliver",
    number: "04",
    title: "Deliver",
    description:
      "Shipping production-ready files and guidelines, then supporting you as the work goes live.",
  },
];

const HowWeWork = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const container = sectionRef.current;
          const track = container?.querySelector<HTMLElement>(".sideScrollTrack");
          if (!container || !track) return;

          const getDistance = () =>
            Math.max(0, track.scrollWidth - container.offsetWidth);

          gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              // Pin a bit below the top so the pinned content clears the
              // fixed header instead of tucking under it.
              start: "top 120px",
              end: () => `+=${getDistance()}`,
              scrub: 1,
              pin: true,
              pinSpacing: true,
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
      className="lg:min-h-[563px] py-12 md:py-16 lg:py-15 overflow-hidden"
    >
      <LayoutWrapper>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[69px] sideScrollTrack w-full">
          <div className="flex flex-col items-start justify-between gap-8 lg:h-[491px] lg:w-[375px] lg:shrink-0">
            <h3 className="w-full font-[SansPlomb] text-[clamp(32px,5vw,60px)] leading-[100%] font-normal tracking-[0.01em]">
              My Way of Working to Shape Ideas into Design
            </h3>
            <BigButton variant="purple" size="lg">
              Let’s turn your ideas into reality
            </BigButton>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:flex-nowrap lg:gap-6">
            {steps.map((step) => (
              <li
                key={step.id}
                className="w-full lg:w-[328.75px] lg:shrink-0 lg:h-[563px] p-6 lg:p-6 flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#F3F2FF] border border-[#CFCDE4]"
              >
                <span className="font-[SansPlomb] text-[40px] md:text-5xl lg:text-[56px] leading-[96%] text-[#5E4FC4]">
                  {step.number}
                </span>
                <div className="flex flex-col gap-3">
                  <h4 className="font-[SansPlomb] text-[28px] md:text-[32px] lg:text-[40px] leading-[100%] text-[#1E1E1E]">
                    {step.title}
                  </h4>
                  <p className="text-[15px] md:text-base leading-[150%] text-[#5F5C6D]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default HowWeWork;
