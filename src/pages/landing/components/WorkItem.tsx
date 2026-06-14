type WorkItemProps = {
  title: string;
  active?: boolean;
  onClick: () => void;
};

const WorkItem = ({ title, active = false, onClick }: WorkItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex cursor-pointer items-center gap-2 text-left"
    >
      <span
        className={`h-[2px] transition-all duration-300 ease-out ${active ? "w-8 bg-[#1D1D1E]" : "w-4 bg-[#6D6C7B]"} group-hover:w-8 group-hover:bg-[#1D1D1E]`}
      />
      <p
        className={`text-lg leading-[96%] font-medium tracking-[0.01em] transition-all duration-300 ease-out ${active ? "text-[#1D1D1E]" : "text-[#6D6C7B]"} [leading-trim:cap-height] group-hover:translate-x-0.5 group-hover:text-[#1D1D1E]`}
      >
        {title}
      </p>
    </button>
  );
};

export default WorkItem;
