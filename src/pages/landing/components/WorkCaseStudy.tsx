import { useEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { workCaseStudyData } from "../data/work-case-study-data";

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

type Item = (typeof workCaseStudyData)[number];

function CaseRow({
  item,
  isOpen,
  onActive,
}: {
  item: Item;
  isOpen: boolean;
  onActive: (id: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [contentRef] = useAutoAnimate();
  // Active when the row crosses a thin band just below the viewport middle
  // (below the fixed header), via IntersectionObserver — no scroll-trigger
  // refresh needed when rows resize.
  const inView = useInView(ref, { margin: "-45% 0px -50% 0px" });

  useEffect(() => {
    if (inView) onActive(item.id);
  }, [inView, item.id, onActive]);

  const contentId = `work-case-${item.id}`;
  const titleColor = isOpen
    ? "text-[#1E1E20]"
    : "text-[#9897A3] group-hover:text-[#1E1E20]";

  return (
    <li ref={ref} className="border-t border-[#D9D9DE] last:border-b">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => onActive(item.id)}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4 md:py-8 lg:py-10"
      >
        <span className="flex items-baseline gap-5 md:gap-8 lg:gap-22">
          <span
            className={`font-[SansPlomb] text-[40px] leading-[96%] tracking-[0.01em] transition-colors duration-300 md:text-[56px] lg:text-7xl ${titleColor}`}
          >
            {item.index}
            <span className="text-[#5C4ABB]">.</span>
          </span>
          <span
            className={`font-[SansPlomb] text-[clamp(28px,5vw,52px)] leading-[100%] tracking-[0.01em] transition-colors duration-300 lg:leading-[96%] ${titleColor}`}
          >
            {item.title}
          </span>
        </span>

        <m.span
          aria-hidden
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: SMOOTH_EASE }}
          className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 md:size-12 ${
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

      {/* auto-animate handles the expand/collapse height transition */}
      <div ref={contentRef}>
        {isOpen && (
          <div
            id={contentId}
            className="flex flex-col gap-6 pb-8 md:pb-10 lg:flex-row lg:items-start lg:gap-10 lg:pb-12"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-lg object-cover lg:w-1/2 lg:max-w-[440px]"
            />
            <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-6">
              <p className="max-w-[440px] text-[15px] leading-[150%] font-light tracking-[0.01em] text-[#5D5C69] md:text-[17px] lg:text-lg lg:leading-[140%]">
                {item.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {item.tags.map((tag) => (
                  <BigButton key={tag} size="sm" showArrow={false}>
                    {tag}
                  </BigButton>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

const WorkCaseStudy = () => {
  const [openId, setOpenId] = useState<number | null>(
    workCaseStudyData[0]?.id ?? null
  );

  return (
    <section className="py-12 md:py-15">
      <LayoutWrapper>
        <ul className="flex flex-col">
          {workCaseStudyData.map((item) => (
            <CaseRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onActive={setOpenId}
            />
          ))}
        </ul>
      </LayoutWrapper>
    </section>
  );
};

export default WorkCaseStudy;
