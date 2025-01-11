import React from "react";

const ASkeleton = () => {
  return (
    <div className="flex animate-pulse">
      {/* Left Section Skeleton */}
      <div className="h-full w-[60%]">
        {/* Logo Skeleton */}
        <div className="bg-gray-300 w-[33px] h-[26px] sm:w-[153px] sm:h-[108px] rounded-md sm:mx-5"></div>

        {/* Title Skeleton */}
        <div className="h-6 sm:h-10 w-[100px] sm:w-[200px] bg-gray-300 rounded-md mt-4 sm:mt-8"></div>
        {/* Text Skeleton */}
        <div className="space-y-2 sm:space-y-4 mt-4 sm:mt-8 pr-10">
          <div className="h-3 sm:h-5 bg-gray-300 rounded-md w-full"></div>
          <div className="h-3 sm:h-5 bg-gray-300 rounded-md w-[90%]"></div>
          <div className="h-3 sm:h-5 bg-gray-300 rounded-md w-[95%]"></div>
          <div className="h-3 sm:h-5 bg-gray-300 rounded-md w-[85%]"></div>
        </div>
      </div>

      {/* Right Section Skeleton */}
      <div className="items-end gap-x-8 hidden sm:flex">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="relative">
              {/* Image Skeleton */}
              <div className="bg-gray-300 w-[242px] sm:w-[180px] sm:h-[180px] h-[266px] rounded-lg"></div>

              {/* Play Button Skeleton */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-10 h-10 sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px] bg-gray-300 rounded-full mb-4"></div>
                <div className="space-y-2">
                  {/* Title Skeleton */}
                  <div className="h-4 sm:h-6 w-[150px] bg-gray-300 rounded-md"></div>
                  {/* Subtitle Skeleton */}
                  <div className="h-3 sm:h-5 w-[100px] bg-gray-300 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ASkeleton;
