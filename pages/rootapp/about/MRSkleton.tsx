import React from "react";

const ReviewsSkeleton = () => {
  return (
    <div className="flex flex-col sm:hidden mt-[73px] animate-pulse">
      {Array(3) // Adjust the number of placeholders based on expected review items
        .fill(0)
        .map((_, index) => (
          <div key={index} className="relative h-[240px] flex justify-center">
            {/* Background Card Skeleton */}
            <div className="absolute bg-gray-800 rounded-lg h-[206px] w-[328px] items-center z-[10] top-0"></div>

            {/* Image Skeleton */}
            <div className="absolute z-20 -top-4 left-10 bg-gray-300 w-[128px] h-[221px] rounded-md"></div>

            {/* Content Skeleton */}
            <div className="absolute top-2 left-48 z-[11]">
              {/* Rating Skeleton */}
              <div className="flex items-center gap-x-2">
                <div className="bg-gray-400 h-[10px] w-[80px] rounded-md"></div>
                <div className="bg-gray-400 h-[10px] w-[50px] rounded-md"></div>
              </div>

              {/* Review Text Skeleton */}
              <div className="mt-2 space-y-1">
                <div className="bg-gray-400 h-[10px] w-[135px] rounded-md"></div>
                <div className="bg-gray-400 h-[10px] w-[120px] rounded-md"></div>
                <div className="bg-gray-400 h-[10px] w-[90px] rounded-md"></div>
              </div>

              {/* Author Skeleton */}
              <div className="bg-gray-400 h-[12px] w-[90px] rounded-md mt-2"></div>

              {/* Position Skeleton */}
              <div className="bg-gray-400 h-[10px] w-[138px] rounded-md mt-1"></div>
            </div>

            {/* Decorative Left Skeleton */}
            <div className="absolute -right-2 -top-4 rounded-3xl bg-gray-600 w-[139px] h-[151px] z-[9]"></div>

            {/* Decorative Bottom Skeleton */}
            <div className="absolute -left-2 bottom-14 rounded-r-3xl bg-gray-600 w-[148px] h-[60px] z-[9]"></div>
          </div>
        ))}
    </div>
  );
};

export default ReviewsSkeleton;
