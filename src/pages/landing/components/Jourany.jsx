import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import React from "react";

const Journey = () => {
  return (
    <section className="relative flex w-full items-center justify-center py-20 h-[946px]">
      <LayoutWrapper>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center  font-[SansPlomb] text-[40px] leading-none font-normal tracking-tight text-[#9897A3] md:text-[64px]">
            {/* Darker colored text */}
            <span className="text-black">A journey</span>{" "}
            {/* First Inline Image */}
            <span className="mx-2 inline-block align-middle">
              <img
                className="h-[50px] w-[80px] rounded-full border border-gray-200 object-cover md:h-[70px] md:w-[110px]"
                src="https://res.cloudinary.com/dfajjqglx/image/upload/v1768032467/Rectangle_39918_fyk7pj.png"
                alt="Early journey"
              />
            </span>{" "}
            that began with curiosity and a blank screen evolved into a passion
            for crafting purposeful designs, shaped by creativity{" "}
            {/* Second Inline Image */}
            <span className="mx-2 inline-block align-middle">
              <img
                className="h-[40px] w-[60px] rounded-full border border-gray-200 object-cover md:h-[60px] md:w-[90px]"
                src="https://res.cloudinary.com/dfajjqglx/image/upload/v1768048303/Rectangle_39919_haj0us.png"
                alt="Growth"
              />
            </span>{" "}
            and growth through learning.
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Journey;
