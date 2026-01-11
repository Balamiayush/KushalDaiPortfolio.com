import React, { useRef, useState, useLayoutEffect } from "react";
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
  const triggers = useRef([]);
  const lastIndex = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  /* ----------------------------------------
     CLICK → SMOOTH SCROLL
  ---------------------------------------- */
  const handleTitleClick = (index) => {
    const target = imageRefs.current[index];
    if (!target) return;

    gsap.to(window, {
      duration: 1.4,
      ease: "power3.out",
      scrollTo: {
        y: target,
        offsetY: 120,
      },
    });
  };

  /* ----------------------------------------
     SCROLL LOGIC (SLOW & NATURAL)
  ---------------------------------------- */
  useLayoutEffect(() => {
    // Clean old triggers
    triggers.current.forEach((t) => t.kill());
    triggers.current = [];

    imageRefs.current.forEach((img, i) => {
      if (!img) return;

      // Image entrance animation
      gsap.fromTo(
        img,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          },
        }
      );

      const trigger = ScrollTrigger.create({
        trigger: img,
        start: "top center+=120",
        end: "bottom center",
        scrub: 0.8, // 👈 slow response to scroll
        fastScrollEnd: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          const inFocus =
            self.progress > 0.4 && self.progress < 0.6;

          if (inFocus && lastIndex.current !== i) {
            lastIndex.current = i;

            // Slow intentional number change
            gsap.delayedCall(0.35, () => {
              setActiveIndex(i);
            });
          }
        },
      });

      triggers.current.push(trigger);
    });

    return () => {
      triggers.current.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-[72px]">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <p className="font-[SansPlomb] text-[40px] leading-[100%] tracking-[0.01em] text-[#9897A3] xl:max-w-[550px]">
              Crafted with creativity, strategy, and purpose, all rooted in my{" "}
              <span className="text-[#604EBB]">love for design.</span>
            </p>

            <BigButton variant="lg" size="lg">
              Let’s turn your ideas into reality
            </BigButton>
          </div>

          {/* CONTENT */}
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
                  className="h-[535px] w-1/2 rounded-[12px] will-change-transform"
                  draggable={false}
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
