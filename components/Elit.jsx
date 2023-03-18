import Image from "next/image";
import React from "react";

const Elit = () => {
  return (
    <div className="h-screen relative">
      {/* Vector */}
      <div className="flex items-end justify-end">
        <Image
          src="/elit-vector.png"
          alt="Elit vector"
          width={1000}
          height={100}
          priority
        />
      </div>
      {/* Content */}
      <div className="absolute top-[50%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 space-y-10">
        <div>
          <Image src="/elit.png" alt="Elit" width={433} height={270} />
        </div>
        <h1 className="text-[#005ADD] font-bold text-5xl">
          Elituer - Our Product Brand
        </h1>
        <h4 className="text-[#E4000F] font-semibold text-xl w-[500px]">
          We use the most recent advances in AI and machine learning to make
          algorithmic nudging more powerful than its non-algorithmic
          counterpart.
        </h4>
        <button className="bg-[#005ADD] clickButton button font-semibold">
          See More
        </button>
      </div>
    </div>
  );
};

export default Elit;
