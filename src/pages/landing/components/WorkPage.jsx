import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import TopData from "./TopWorkItem";
import { workData } from "../data/work-data";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WorkPage = () => {
  const imageRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // 👉 CLICK → SCROLL TO IMAGE
  const handleTitleClick = (index) => {
    const target = imageRefs.current[index];
    if (!target) return;

    gsap.to(window, {
      duration: 1,
      ease: "power3.inOut",
      scrollTo: {
        y: target,
        offsetY: 120, // matches your section padding
      },
    });
  };

  return (
    <section className="py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-[72px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="font-[SansPlomb] text-[40px] leading-[100%] tracking-[0.01em] text-[#9897A3] xl:max-w-[550px]">
              Crafted with creativity, strategy, and purpose, all rooted in my{" "}
              <span className="text-[#604EBB]">love for design.</span>
            </p>
            <BigButton variant="lg" size="lg">
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
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={item.src}
                  className="h-[535px] w-1/2 rounded-[12px]"
                  onLoad={() => {
                    ScrollTrigger.create({
                      trigger: imageRefs.current[i],
                      start: "top center",
                      end: "bottom center",
                      onEnter: () => setActiveIndex(i),
                      onEnterBack: () => setActiveIndex(i),
                    });
                  }}
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
