import { useRef } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Journey = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Split ONLY text
    const split = new SplitText(textRef.current, {
      type: "words",
      wordsClass: "journey-word",
    });

    // Initial state
    gsap.set(split.words, {
      color: "#9897A3",
    });

    // Scroll animation
    gsap.to(split.words, {
      color: "#1D1D1E",
      ease: "none",
      stagger: 1, // 👈 controls speed of reveal
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=120%",
        scrub: 1.2, // 👈 slow & smooth
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[946px]  w-full items-center justify-center py-20"
    >
      <LayoutWrapper>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[SansPlomb] text-[40px] leading-none font-normal tracking-tight md:text-[64px]">
            <span ref={textRef}>
              <span className="text-[#1D1D1E]">A journey</span>{" "}
              <span className="mx-2 inline-block align-middle">
                <img
                  className="h-[50px] w-[80px] rounded-full border border-gray-200 object-cover md:h-[70px] md:w-[110px]"
                  src="https://res.cloudinary.com/dfajjqglx/image/upload/v1768032467/Rectangle_39918_fyk7pj.png"
                  alt="Early journey"
                />
              </span>{" "}
              that began with curiosity and a blank screen evolved into a passion
              for crafting purposeful designs, shaped by creativity{" "}
              <span className="mx-2 inline-block align-middle">
                <img
                  className="h-[40px] w-[60px] rounded-full border border-gray-200 object-cover md:h-[60px] md:w-[90px]"
                  src="https://res.cloudinary.com/dfajjqglx/image/upload/v1768048303/Rectangle_39919_haj0us.png"
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
