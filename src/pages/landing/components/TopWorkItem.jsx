import WorkItem from "./WorkItem";


const workList = [
  { title: "Cr8rs", active: true },
  { title: "AfrikaPro" },
  { title: "Market 33" },
];

const TopData = () => {
  return (
    <div className="sticky top-0 w-[457px] h-[535px] flex flex-col gap-8 ">
      <h3 className="font-[SansPlomb] text-[120px] leading-[96%] tracking-[0.01em] text-[#9897A3]">
        01
      </h3>

      <div className="flex flex-col xl:max-w-[117px] text-nowrap   gap-4">
        {workList.map((item) => (
          <WorkItem
            key={item.title}
            title={item.title}
            active={item.active}
          />
        ))}
      </div>
    </div>
  );
};

export default TopData;
