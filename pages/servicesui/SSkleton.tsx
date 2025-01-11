const ServicesSkeleton = () => {
    return (
      <div className="Gradient">
        <div className="wrapper text-white pb-24 pt-10 sm:pt-[84px] animate-pulse">
          <div className="flex gap-x-2 items-center">
            <div className="w-6 h-12 bg-gray-400 rounded"></div>
            <div className="w-32 h-6 sm:w-40 sm:h-10 bg-gray-300 rounded"></div>
          </div>
          <div className="sm:mt-10 grid gap-x-[29px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="mt-4 sm:mt-0 bg-gradient-to-b from-[#132121] via-[#132121] to-[#124B5B] p-6 rounded-lg"
              >
                {/* Image Skeleton */}
                <div className="w-full h-[200px] sm:h-[250px] bg-gray-400 rounded"></div>
  
                {/* Text Content Skeleton */}
                <div className="mt-6 space-y-4">
                  <div className="w-32 h-6 bg-gray-300 rounded"></div>
                  <div className="w-40 h-4 bg-gray-300 rounded"></div>
                  <div className="w-full h-[60px] bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Footer Text Skeleton */}
          <div className="mt-20 sm:mt-10 sm:text-center">
            <div className="w-full sm:w-3/4 lg:w-1/2 h-4 bg-gray-300 mx-auto rounded"></div>
            <div className="w-full sm:w-2/3 lg:w-1/3 h-4 bg-gray-300 mx-auto mt-4 rounded"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesSkeleton;
  