const BlogsSkeleton = () => {
    return (
      <div className="mt-[34px] sm:mt-[234px] text-white wrapper pb-[50px] sm:pb-40 animate-pulse">
        <div className="mt-10 sm:mt-[90px]">
          <div className="flex items-center justify-between">
            {/* Header */}
            <div className="flex items-center gap-x-2">
              <div className="w-6 h-12 bg-gray-300 rounded"></div>
              <div className="w-32 h-6 sm:w-40 sm:h-10 bg-gray-300 rounded"></div>
            </div>
  
            {/* Navigation Arrows */}
            <div className="flex gap-x-3">
              <div className="w-8 h-8 sm:w-[45px] sm:h-[50px] bg-gray-400 rounded-lg"></div>
              <div className="w-8 h-8 sm:w-[45px] sm:h-[50px] bg-gray-400 rounded-lg"></div>
            </div>
          </div>
  
          {/* Blog Cards Skeleton */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="space-y-4">
                {/* Image Skeleton */}
                <div className="w-full h-[240px] bg-gray-400 rounded"></div>
  
                {/* Date Skeleton */}
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
  
                {/* Title and Arrow */}
                <div className="flex justify-between items-center">
                  <div className="w-48 h-6 bg-gray-300 rounded"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
  
                {/* Description Skeleton */}
                <div className="w-[320px] h-4 bg-gray-300 rounded"></div>
                <div className="w-[300px] h-4 bg-gray-300 rounded"></div>
  
                {/* Skills Skeleton */}
                <div className="flex gap-2">
                  {[...Array(3)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-16 h-6 bg-gray-300 rounded-2xl`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogsSkeleton;
  