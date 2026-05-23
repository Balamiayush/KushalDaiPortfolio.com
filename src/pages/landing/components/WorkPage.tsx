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

const WorkPage = () => {
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

    gsap.to(window, {
      scrollTo: {
        y: target,
        offsetY: 120,
      },
      duration: 1.2,
      ease: "expo.inOut",
    });
  };

  return (
    <section ref={sectionRef} className="py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-[72px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="font-[SansPlomb] text-[40px] leading-[100%] tracking-[0.01em] text-[#9897A3] xl:max-w-[550px]">
              Crafted with creativity, strategy, and purpose, all rooted in my{" "}
              <span className="text-[#604EBB]">love for design.</span>
            </p>
            <BigButton variant="purple" size="lg">
              Let’s turn your ideas into reality
            </BigButton>
          </div>

          {/* Content */}
          <div className="relative flex w-full justify-between">
            {/* LEFT */}
            <TopData
              activeIndex={activeIndex}
              onTitleClick={handleTitleClick}
            />

            {/* RIGHT */}
            <div className="flex w-full flex-col items-end gap-[88px]">
              {workData.map((item, i) => (
                <img
                  key={i}
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  src={item.src}
                  className="h-[535px] w-1/2 rounded-[12px]"
                />
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default WorkPage;
