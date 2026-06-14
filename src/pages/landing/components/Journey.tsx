import { useRef } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Journey = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      let split: SplitText | null = null;

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!textRef.current) return;
        split = new SplitText(textRef.current, {
          type: "words",
          wordsClass: "journey-word",
        });

        gsap.set(split.words, { color: "#9897A3" });

        gsap.to(split.words, {
          color: "#1D1D1E",
          ease: "none",
          stagger: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            // Pin below the fixed header so the text doesn't tuck under it.
            start: "top 120px",
            end: "+=120%",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => split?.revert();
      });

      return () => {
        mm.revert();
        split?.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[600px] md:min-h-[760px] lg:min-h-[946px] w-full items-center justify-center py-16 md:py-20"
    >
      <LayoutWrapper>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[SansPlomb] text-[clamp(28px,5.5vw,64px)] leading-[110%] md:leading-none font-normal tracking-tight">
            <span ref={textRef}>
              <span className="text-[#1D1D1E]">A journey</span>{" "}
              <span className="mx-1 md:mx-2 inline-block align-middle">
                <img
                  className="h-[36px] w-[56px] sm:h-[50px] sm:w-[80px] rounded-full border border-gray-200 object-cover md:h-[70px] md:w-[110px]"
                  src="https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_220/v1768032467/Rectangle_39918_fyk7pj.png"
                  loading="lazy"
                  decoding="async"
                  alt="Early journey"
                />
              </span>{" "}
              that began with curiosity and a blank screen evolved into a passion
              for crafting purposeful designs, shaped by creativity{" "}
              <span className="mx-1 md:mx-2 inline-block align-middle">
                <img
                  className="h-[30px] w-[44px] sm:h-[40px] sm:w-[60px] rounded-full border border-gray-200 object-cover md:h-[60px] md:w-[90px]"
                  src="https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_180/v1768048303/Rectangle_39919_haj0us.png"
                  loading="lazy"
                  decoding="async"
                  alt="Growth"
                />
              </span>{" "}
              and growth through learning.
            </span>
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Journey;
