import React from "react";

const AMobileSkeleton = () => {
  return (
    <div className="mt-[31px] pb-4 items-end flex sm:hidden flex-wrap mx-auto gap-y-2 px-5 justify-between relative animate-pulse">
      {Array(4) // Adjust this number based on the number of items you expect
        .fill(0)
        .map((_, index) => (
          <div key={index} className="relative text-white">
            {/* Skeleton for Image */}
            <div className="rounded-2xl bg-gray-300 w-[320px] h-[270px]"></div>

            {/* Skeleton for Play Button and Text */}
            <div className="absolute  left-1/2 top-1/2 mt-6 -translate-x-1/2 -translate-y-1/2 text-center">
              {/* Play Icon Skeleton */}
              <div className="w-10 h-10 ml-[60px] bg-gray-400 rounded-full opacity-75"></div>
              
              {/* Title Skeleton */}
              <div className="flex flex-col mt-6">
                <div className="bg-gray-400 w-[160px] h-4 rounded-md mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AMobileSkeleton;
