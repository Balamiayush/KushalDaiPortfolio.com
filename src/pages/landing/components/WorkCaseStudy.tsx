import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { workCaseStudyData } from "../data/work-case-study-data";

const SMOOTH_EASE = [0.33, 1, 0.68, 1] as const;

const WorkCaseStudy = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-[60px] min-h-screen">
      <LayoutWrapper>
        <div className="flex flex-col">
          {workCaseStudyData.map(
            ({ id, index, title, description, image, tags }) => {
              const isActive = hoveredId === id;
              const expandedOnLg = isActive;

              return (
                <m.div
                  key={id}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  onClick={() => setHoveredId((prev) => (prev === id ? null : id))}
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(id)}
                  onBlur={() => setHoveredId(null)}
                  className="flex w-full flex-col gap-5 border-t border-[#D9D9DE] last:border-b py-6 md:py-10 cursor-pointer transition-colors duration-500 focus:outline-2 focus:outline-[#5C4ABB] focus:outline-offset-2 lg:flex-row lg:items-start lg:justify-between lg:gap-10"
                >
                  {/* Left: index + image */}
                  <div className="flex items-center gap-6 lg:gap-[88px]">
                    <h3
                      className={`font-[SansPlomb] text-[48px] md:text-[64px] lg:text-[88px] leading-[96%] tracking-[0.01em] transition-colors duration-500 ${
                        isActive ? "text-[#1E1E20]" : "text-[#9897A3]"
                      }`}
                    >
                      {index}
                      <span className="text-[#5C4ABB]">.</span>
                    </h3>

                    <AnimatePresence>
                      {expandedOnLg && (
                        <m.div
                          initial={{ width: 0, opacity: 0, scale: 0.9 }}
                          animate={{ width: "auto", opacity: 1, scale: 1 }}
                          exit={{ width: 0, opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
                          className="hidden lg:block overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                            className="block object-cover rounded-lg"
                          />
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right: title + (mobile-always / desktop-on-hover) description */}
                  <div className="w-full lg:max-w-[484px] flex flex-col justify-between">
                    <div className="flex flex-col gap-4 lg:gap-6">
                      <h2
                        className={`font-[SansPlomb] text-[clamp(32px,7vw,60px)] leading-[100%] lg:leading-[96%] tracking-[0.01em] transition-colors duration-500 ${
                          isActive ? "text-[#1E1E20]" : "text-[#1E1E20] lg:text-[#9897A3]"
                        }`}
                      >
                        {title}
                      </h2>

                      {/* Mobile/tablet: always-on image + description */}
                      <div className="lg:hidden flex flex-col gap-4">
                        <img
                          src={image}
                          alt={title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
                        />
                        <p className="text-[15px] md:text-[16px] leading-[150%] font-light tracking-[0.01em] text-[#5D5C69]">
                          {description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          {tags.map((tag) => (
                            <BigButton key={tag} size="sm" showArrow={false}>
                              {tag}
                            </BigButton>
                          ))}
                        </div>
                      </div>

                      {/* Desktop: expanded on hover/focus */}
                      <AnimatePresence>
                        {expandedOnLg && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: SMOOTH_EASE }}
                            className="hidden lg:block overflow-hidden"
                          >
                            <p className="max-w-[440px] text-[18px] leading-[140%] font-light tracking-[0.01em] text-[#5D5C69] mb-12">
                              {description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                              {tags.map((tag) => (
                                <BigButton key={tag} size="sm" showArrow={false}>
                                  {tag}
                                </BigButton>
                              ))}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </m.div>
              );
            }
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default WorkCaseStudy;