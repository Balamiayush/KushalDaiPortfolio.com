import React from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HowWeWork = () => {
 useGSAP(() => {
  const container = document.querySelector(".sideScrollContainer");
  const scroller = document.querySelector(".sideScroll");

  const scrollWidth = scroller.scrollWidth - container.offsetWidth;

  gsap.to(scroller, {
    x: (-scrollWidth) * 1.6, //i want to put it in center 
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${scrollWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: true,
    },
  });
});

  return (
    <section className="   min-h-[563px]  sideScrollContainer   py-[60px]   ">
      <LayoutWrapper>
        <div className="flex gap-[69px] sideScroll h-full  w-full  ">

        <div className="flex h-[491px] flex-col items-start justify-between">
          <h3 className="w-[375px] font-[SansPlomb] text-[60px] leading-[100%] font-normal tracking-[0.01em]">
            My Way of Working to Shape Ideas into Design
          </h3>
          <BigButton variant="purple" size="lg">
            Let’s turn your ideas into reality
          </BigButton>
        </div>
        <div className="flex  ">

        <div className="w-[328.75px] h-[563px] p-[24px] flex flex-col items-start justify-between bg-red-500 border border-[#CFCDE4]">

        </div>
        <div className="w-[328.75px] h-[563px] p-[24px] flex flex-col items-start justify-between bg-red-500 border border-[#CFCDE4]">

        </div>
        <div className="w-[328.75px] h-[563px] p-[24px] flex flex-col items-start justify-between bg-red-500 border border-[#CFCDE4]">

        </div>
        <div className="w-[328.75px] h-[563px] p-[24px] flex flex-col items-start justify-between bg-red-500 border border-[#CFCDE4]">

        </div>
        </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default HowWeWork;
