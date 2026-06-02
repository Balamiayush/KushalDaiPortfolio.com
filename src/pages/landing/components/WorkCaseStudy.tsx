import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { workCaseStudyData } from "../data/work-case-study-data";

const WorkCaseStudy = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const smoothEase = [0.33, 1, 0.68, 1] as const;

  return (
    <section className=" py-[60px] min-h-screen">
      <LayoutWrapper>
        <div className="flex flex-col">
          {workCaseStudyData.map(
            ({ id, index, title, description, image, tags }) => {
              const isHovered = hoveredId === id;

              return (
                <motion.div
                  key={id}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isHovered}
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(id)}
                  onBlur={() => setHoveredId(null)}
                  className="flex w-full justify-between items-start border-t border-[#D9D9DE] last:border-b py-10 cursor-pointer transition-colors duration-500 focus:outline-2 focus:outline-[#5C4ABB] focus:outline-offset-2"
                >
                  {/* Left Section: Index & Image */}
                  <div className="flex items-center gap-[88px]">
                    <h3
                      className={`font-[SansPlomb] text-[88px] leading-[96%] tracking-[0.01em] transition-colors duration-500 ${
                        isHovered ? "text-[#1E1E20]" : "text-[#9897A3]"
                      }`}
                    >
                      {index}
                      <span className="text-[#5C4ABB]">.</span>
                    </h3>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ width: 0, opacity: 0, scale: 0.9 }}
                          animate={{ width: "auto", opacity: 1, scale: 1 }}
                          exit={{ width: 0, opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6, ease: smoothEase }}
                          className="overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                            className="block  object-cover rounded-lg"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Section: Title, Description & Tags */}
                  <div className="max-w-[484px] w-full flex flex-col justify-between">
                    <div className="flex flex-col gap-6">
                      <h2
                        className={`font-[SansPlomb] text-[60px] text-nowrap leading-[96%] tracking-[0.01em] transition-colors duration-500 ${
                          isHovered ? "text-[#1E1E20]" : "text-[#9897A3]"
                        }`}
                      >
                        {title}
                      </h2>

                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: smoothEase }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-[440px] text-[18px] leading-[140%] font-light tracking-[0.01em] text-[#5D5C69] mb-12">
                              {description}
                            </p>

                            <div className="flex items-center gap-4">
                              {tags.map((tag) => (
                                <BigButton key={tag} size="sm" showArrow={false}>
                                  {tag}
                                </BigButton>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default WorkCaseStudy;