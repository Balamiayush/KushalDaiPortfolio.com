import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { workCaseStudyData } from "../data/work-case-study-data";

gsap.registerPlugin(ScrollTrigger);

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const WorkCaseStudy = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [openId, setOpenId] = useState<number | null>(workCaseStudyData[0]?.id ?? null);

  useGSAP(
    () => {
      const triggers: ScrollTrigger[] = [];
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => setOpenId(workCaseStudyData[i].id),
            onEnterBack: () => setOpenId(workCaseStudyData[i].id),
            invalidateOnRefresh: true,
          })
        );
      });
      return () => triggers.forEach((t) => t.kill());
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 520);
    return () => window.clearTimeout(id);
  }, [openId]);

  return (
    <section ref={sectionRef} className="py-12 md:py-[60px]">
      <LayoutWrapper>
        <ul className="flex flex-col">
          {workCaseStudyData.map(({ id, index, title, description, image, tags }, i) => {
            const isOpen = openId === id;
            const contentId = `work-case-${id}`;

            return (
              <li
                key={id}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="border-t border-[#D9D9DE] last:border-b"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenId((prev) => (prev === id ? null : id))}
                  className="group flex w-full items-center justify-between gap-6 py-6 md:py-8 lg:py-10 text-left focus:outline-2 focus:outline-[#5C4ABB] focus:outline-offset-4"
                >
                  <span className="flex items-baseline gap-5 md:gap-8 lg:gap-[88px]">
                    <span
                      className={`font-[SansPlomb] text-[40px] md:text-[56px] lg:text-[72px] leading-[96%] tracking-[0.01em] transition-colors duration-300 ${
                        isOpen ? "text-[#1E1E20]" : "text-[#9897A3] group-hover:text-[#1E1E20]"
                      }`}
                    >
                      {index}
                      <span className="text-[#5C4ABB]">.</span>
                    </span>
                    <span
                      className={`font-[SansPlomb] text-[clamp(28px,5vw,52px)] leading-[100%] lg:leading-[96%] tracking-[0.01em] transition-colors duration-300 ${
                        isOpen ? "text-[#1E1E20]" : "text-[#9897A3] group-hover:text-[#1E1E20]"
                      }`}
                    >
                      {title}
                    </span>
                  </span>

                  <m.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: SMOOTH_EASE }}
                    className={`shrink-0 inline-flex size-10 md:size-12 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#5C4ABB] text-[#5C4ABB]"
                        : "border-[#D9D9DE] text-[#9897A3] group-hover:border-[#5C4ABB] group-hover:text-[#5C4ABB]"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </m.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={contentId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: SMOOTH_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pb-8 md:pb-10 lg:flex-row lg:items-start lg:gap-10 lg:pb-12">
                        <img
                          src={image}
                          alt={title}
                          loading="lazy"
                          decoding="async"
                          className="w-full lg:w-1/2 lg:max-w-[440px] aspect-[4/3] object-cover rounded-lg"
                        />
                        <div className="flex flex-col gap-4 lg:gap-6 lg:w-1/2">
                          <p className="max-w-[440px] text-[15px] md:text-[17px] lg:text-[18px] leading-[150%] lg:leading-[140%] font-light tracking-[0.01em] text-[#5D5C69]">
                            {description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            {tags.map((tag) => (
                              <BigButton key={tag} size="sm" showArrow={false}>
                                {tag}
                              </BigButton>
                            ))}
                          </div>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </LayoutWrapper>
    </section>
  );
};

export default WorkCaseStudy;
