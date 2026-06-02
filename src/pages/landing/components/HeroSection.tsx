import MainNavbar from "@/shared/components/layouts/header/navbar/MainNavbar";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";

const HeroSection = () => {
  return (
    <div className="relative mx-auto w-full p-3 md:p-[24px]">
      <section className="relative flex w-full flex-col justify-between rounded-[20px] md:rounded-[24px] bg-[#DAD3FF] p-5 md:p-8 lg:p-[24px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px] xl:h-[723px] 2xl:h-[90vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_2400/v1768109206/IMG_5475_qgszwk.png"
          fetchPriority="high"
          decoding="async"
          className="absolute top-0 left-0 z-[-1] hoverImg h-full w-full rounded-[20px] md:rounded-[24px] object-cover"
          alt="Kushal — designer behind 'From Peaks to Pixels'"
        />
        <MainNavbar />

        <div className="heroContainer flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:px-[24px] pt-10 lg:pt-0">
          <div className="flex flex-col items-start gap-3 lg:gap-2 lg:py-[24px]">
            <Copy animateOnScroll={false}>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[120%] tracking-[0.01em] text-[#1E1E1E]">
                Namaste! This is Kushal
              </p>
            </Copy>
            <h1 className="-ml-0.5 lg:-ml-3.5 font-[SansPlomb] text-[clamp(56px,14vw,206px)] leading-[84%] lg:leading-[76%] tracking-[0.01em] text-[#7362C9]">
              From Peaks <br />
              to Pixels
            </h1>
          </div>
          <Copy animateOnScroll={false}>
            <p className="max-w-full lg:max-w-[420px] xl:max-w-[480px] text-[14px] md:text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] font-normal tracking-[0.01em] text-[#1E1E1E]">
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
