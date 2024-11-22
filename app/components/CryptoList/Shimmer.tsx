"use client";

const Shimmer = () => {
  return (
    <div className="animate-pulse  grid grid-cols-[26%_14%_1fr_1fr_1fr_1fr_9%] items-center font-semibold border border-[rgb(229,231,235)] border-t-0">
      <div className="text-base flex gap-6 p-5">
        <div className="w-8 h-8 bg-slate-200"></div>
        {/* <div dangerouslySetInnerHTML={{ __html: logo }} /> */}

        <div></div>
      </div>
      <div className="p-5"></div>

      <div className="flex relative"></div>
    </div>
  );
};

export default Shimmer;
