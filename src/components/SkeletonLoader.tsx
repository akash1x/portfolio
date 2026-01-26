import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-6 md:px-10 lg:px-0 overflow-x-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="h-20 flex justify-between items-center py-6">
        <div className="w-12 h-12 bg-[#233554] rounded-full"></div>
        <div className="hidden md:flex gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-4 bg-[#233554] rounded"></div>
          ))}
        </div>
      </div>

      {/* Intro Skeleton */}
      <div className="min-h-screen flex flex-col justify-center gap-5">
        <div className="w-40 h-5 bg-[#233554] rounded"></div>
        <div className="w-3/4 h-16 bg-[#233554] rounded"></div>
        <div className="w-2/3 h-16 bg-[#233554] rounded"></div>
        <div className="w-1/2 h-20 bg-[#233554] rounded mt-4"></div>
        <div className="w-40 h-12 bg-[#233554] rounded mt-8"></div>
      </div>

      {/* Generic Section Skeleton (About, Exp, etc.) */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="py-20 flex flex-col gap-8">
          <div className="flex gap-4 items-center mb-8">
            <div className="w-8 h-8 bg-[#233554] rounded-full"></div>
            <div className="w-48 h-8 bg-[#233554] rounded"></div>
            <div className="flex-1 h-[1px] bg-[#233554]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-full h-4 bg-[#233554] rounded"></div>
              <div className="w-full h-4 bg-[#233554] rounded"></div>
              <div className="w-3/4 h-4 bg-[#233554] rounded"></div>
            </div>
            <div className="w-full h-64 bg-[#233554] rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
