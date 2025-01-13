const PSkleton = () => {
    return (
        <>
          {/* Skeleton Loader */}
          <div className="wrapper">
            <div className="fij pt-[43px] sm:pt-[85px]">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-4 sm:w-6 sm:h-12 bg-gray-700 animate-pulse rounded"></div>
                <div className="w-[100px] sm:w-[150px] h-5 sm:h-10 bg-gray-700 animate-pulse rounded"></div>
              </div>
              <div className="w-[100px] sm:w-[120px] h-5 sm:h-7 bg-gray-700 animate-pulse rounded hidden sm:block"></div>
            </div>
          </div>
      
          <div className="mt-6 sm:mt-[50px]">
            <div className="fij gap-4 flex-wrap">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] bg-gray-700 animate-pulse rounded overflow-hidden">
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 lg:w-[60px] lg:h-[60px] bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="w-[60px] sm:w-[120px] h-3 sm:h-5 bg-gray-600 rounded mt-2 sm:mt-4"></div>
                    <div className="w-[40px] sm:w-[100px] h-2 sm:h-4 bg-gray-600 rounded mt-1 sm:mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
      
}

export default PSkleton

export const LatestSkelton = () => {
    return (
        <div className="wrapper text-white pb-[100px]">
        <div className="mt-12 sm:mt-[184px] sm:text-[28px]">
          <div className="skeleton w-[150px] h-[24px] sm:w-[200px] sm:h-[28px] bg-gray-300 animate-pulse"></div>
        </div>
        <div className="mt-6 fij items-start flex-wrap">
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="skeleton w-2 h-4 sm:w-6 sm:h-12 bg-gray-300 animate-pulse"></div>
              <div className="skeleton w-[200px] sm:w-[300px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse"></div>
            </div>
            <div className="sm:max-w-[600px] sm:text-[24px] mt-12">
              <div className="skeleton w-full h-[16px] bg-gray-300 animate-pulse mb-2"></div>
              <div className="skeleton w-full h-[16px] bg-gray-300 animate-pulse mb-2"></div>
              <div className="skeleton w-3/4 h-[16px] bg-gray-300 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="relative">
              <div className="skeleton w-full h-[400px] bg-gray-300 animate-pulse"></div>
              <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 hidden sm:block">
                <div className="skeleton w-[60px] h-[60px] bg-gray-300 rounded-full animate-pulse"></div>
                <div className="mt-8">
                  <div className="skeleton w-[80px] h-[16px] bg-gray-300 animate-pulse"></div>
                </div>
                <div className="-translate-x-5 text-white">
                  <div className="skeleton w-[120px] h-[16px] bg-gray-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  