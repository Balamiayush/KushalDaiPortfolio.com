import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import React from "react";
import TopData from "./TopWorkItem";

const WorkPage = () => {
  return (
    <section className="h-screen py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-[72px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="font-[SansPlomb] text-[40px] leading-[100%] tracking-[0.01em] text-[#9897A3] xl:max-w-[550px]">
              Crafted with creativity, strategy, and purpose, all rooted in my{" "}
              <span className="text-[#604EBB]">love for design.</span>
            </p>
            <BigButton />
          </div>

          {/* Content */}
          <div className="relative flex w-full justify-between">
            <TopData />

            {/* Right panels */}
            <div className="flex w-full flex-col items-end gap-[88px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/2 h-[535px] bg-[#DAD3FF] rounded-[12px]"
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
