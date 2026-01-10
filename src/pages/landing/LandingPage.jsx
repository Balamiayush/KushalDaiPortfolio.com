import MainNavbar from "@/shared/components/layouts/header/navbar/MainNavbar";
import WorkPage from "./components/WorkPage";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import Jourany from "./components/Jourany";
import WorkCaseStudy from "./components/WorkCaseStudy";
import HowWeWork from "./components/HowWeWork";
import GallerySection from "./components/GallerySection";
export default function LandingPage() {
  return (
    <section>

    <div className="relative mx-auto w-full px-[24px] py-[24px] ">
      <section className="2xl:h-[90vh] h-full w-full rounded-[24px] bg-[#DAD3FF] px-[24px] py-[24px] xl:h-[723px] flex flex-col justify-between">
        <MainNavbar />

        <div className="heroContainer  flex items-end justify-between w-full left-0  px-[24px] ">
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
            <p className="  max-w-[480px] text-[18px] font-normal leading-[120%] tracking-[0.01em] text-[#1E1E1E]">
              Creative designer shaping brands and products with strategy,
              storytelling, and user-centered design, also offering mentorship
              for design enthusiasts and learners.
            </p>
       </Copy>
         
        </div>
      </section>
     
    </div>
     <WorkPage />
      <Jourany/>
      <WorkCaseStudy/>
      <div className="w-full h-full overflow-hidden">
      <HowWeWork/>
      </div>
      <GallerySection/>
    </section>
  );
}
