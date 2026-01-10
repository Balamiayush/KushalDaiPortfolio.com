import React from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { workCaseStudyData } from "../data/work-case-study-data";


const WorkCaseStudy = () => {
  return (
    <section className="bg-[#F3F2FF] py-[60px]">
      <LayoutWrapper>
        {workCaseStudyData.map(
          ({ id, index, title, description, image, tags }) => (
            <div
              key={id}
              className="flex w-full justify-between items-start"
            >
              {/* Left Section */}
              <div className="flex items-center gap-[88px]">
                <h3 className="font-[SansPlomb] text-[88px] leading-[96%] tracking-[0.01em] text-[#9897A3]">
                  {index}
                  <span className="text-[#5C4ABB]">.</span>
                </h3>

                <img
                  src={image}
                  alt={title}
                  className="block max-w-full"
                />
              </div>

              {/* Right Section */}
              <div className="max-w-[484px] flex flex-col justify-between gap-[48px]">
                <div className="flex flex-col gap-6">
                  <h2 className="font-[SansPlomb] text-[88px] leading-[96%] tracking-[0.01em]">
                    {title}
                  </h2>

                  <p className="max-w-[440px] text-[18px] leading-[120%] font-light tracking-[0.01em] text-[#5D5C69]">
                    {description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {tags.map((tag) => (
                    <BigButton key={tag} size="sm" showArrow={false}>
                      {tag}
                    </BigButton>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </LayoutWrapper>
    </section>
  );
};

export default WorkCaseStudy;
