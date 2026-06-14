import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import WorkItem from "./WorkItem";
import ButtonArrow from "@/shared/components/icons/ButtonArrow";
import { ROUTES } from "@/shared/constants/routes";
import { workData } from "../data/work-data";

type TopDataProps = {
  activeIndex: number;
  onTitleClick: (index: number) => void;
};

const TopData = ({ activeIndex, onTitleClick }: TopDataProps) => {
  const numberRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(numberRef.current, {
      y: -activeIndex * 120,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      y: -activeIndex * 160,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });
  }, [activeIndex]);

  return (
    <div className="sticky top-[4vw] flex h-[535px] w-[457px] flex-col gap-8">
      {/* NUMBERS */}
      <div className="relative h-[120px] overflow-hidden">
        <div ref={numberRef}>
          {["01", "02", "03"].map((num) => (
            <h3
              key={num}
              className="font-[SansPlomb] text-[120px] leading-[96%] tracking-[0.01em] text-[#9897A3]"
            >
              {num}
            </h3>
          ))}
        </div>
      </div>

      {/* TITLES */}
      <div className="flex flex-col gap-4">
        {workData.map((item, i) => (
          <WorkItem
            key={item.title}
            title={item.title}
            active={i === activeIndex}
            onClick={() => onTitleClick(i)}
          />
        ))}
      </div>

      {/* CTA → active work's case study */}
      <Link
        to={`${ROUTES.WORK_PAGE}/${workData[activeIndex]?.id ?? ""}`}
        className="inline-flex w-fit items-center gap-2 text-[15px] font-medium text-[#5E4FC4] transition-all hover:gap-3 focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4"
      >
        See case study
        <ButtonArrow className="stroke-current" />
      </Link>

      {/* DESCRIPTION */}
      <div className="absolute bottom-0 h-[160px] w-[457px] overflow-hidden">
        <div ref={textRef}>
          {workData.map((item) => (
            <div key={item.title} className="flex flex-col gap-6">
              <h3 className="font-[SansPlomb] text-6xl leading-[96%] text-[#5E4CBB]">
                {item.title}
              </h3>
              <p className="max-w-[450px] text-lg text-[#5F5C6D]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopData;
