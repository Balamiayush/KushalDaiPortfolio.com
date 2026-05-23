import MainNavbar from "@/shared/components/layouts/header/navbar/MainNavbar";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";

const HeroSection = () => {
  return (
    <div className="relative mx-auto w-full px-[24px] py-[24px]">
      <section className="relative flex h-full w-full flex-col justify-between rounded-[24px] bg-[#DAD3FF] px-[24px] py-[24px] xl:h-[723px] 2xl:h-[90vh]">
        <img
          src="https://res.cloudinary.com/dfajjqglx/image/upload/v1768109206/IMG_5475_qgszwk.png"
          className="absolute top-0 left-0 z-[-1] hoverImg h-full w-full rounded-[24px] object-cover"
          alt=""
        />
        <MainNavbar />

        <div className="heroContainer left-0 flex w-full items-end justify-between px-[24px]">
          <div className="flex flex-col items-start py-[24px]">
            <Copy animateOnScroll={false}>
              <p className="text-[18px] leading-[120%] tracking-[0.01em] text-[#1E1E1E]">
                Namaste! This is Kushal
              </p>
            </Copy>
            <h1 className="-ml-3.5 font-[SansPlomb] text-[206px] leading-[76%] tracking-[0.01em] text-[#7362C9]">
              From Peaks <br />
              to Pixels
            </h1>
          </div>
          <Copy animateOnScroll={false}>
            <p className="max-w-[480px] text-[18px] leading-[120%] font-normal tracking-[0.01em] text-[#1E1E1E]">
              Creative designer shaping brands and products with strategy,
              storytelling, and user-centered design, also offering mentorship
              for design enthusiasts and learners.
            </p>
          </Copy>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
