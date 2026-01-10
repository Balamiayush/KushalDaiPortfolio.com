import React from "react";

const WorkItem = ({ title, active = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer items-center gap-2"
    >
      {/* Animated line */}
      <span
        className={`h-[2px] transition-all duration-300 ease-out ${active ? "w-8 bg-[#1D1D1E]" : "w-4 bg-[#9897A3]"} group-hover:w-8 group-hover:bg-[#1D1D1E]`}
      />

      {/* Text */}
      <p
        className={`text-[18px] leading-[96%] font-medium tracking-[0.01em] transition-all duration-300 ease-out ${active ? "text-[#1D1D1E]" : "text-[#9897A3]"} [leading-trim:cap-height] group-hover:translate-x-[2px] group-hover:text-[#1D1D1E]`}
      >
        {title}
      </p>
    </div>
  );
};

export default WorkItem;
