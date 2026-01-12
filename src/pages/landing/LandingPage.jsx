import WorkPage from "./components/WorkPage";
import Jourany from "./components/Jourany";
import WorkCaseStudy from "./components/WorkCaseStudy";
import HowWeWork from "./components/HowWeWork";
import FAQSection from "./components/FAQSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
export default function LandingPage() {
  return (
    <section>
      <HeroSection/>
     <WorkPage />
      <Jourany/>
      <WorkCaseStudy/>
      <div className="w-full h-full overflow-hidden">
      <HowWeWork/>
      </div>
      <GallerySection/>
      <FAQSection/>
    </section>
  );
}
