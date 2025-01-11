const BlogSkeleton = () => {
    return (
      <div className="Gradient">
        <div className="pt-10 sm:pt-24 text-white wrapper pb-[145px]">
          {/* Blog1 Skeleton */}
          <div className="animate-pulse">
            <div className="h-6 w-1/3 bg-gray-300 rounded mb-4"></div>
            <div className="h-12 w-2/3 bg-gray-300 rounded mb-6"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded mb-4"></div>
            <div className="h-96 w-full bg-gray-300 rounded-xl mt-5"></div>
          </div>
  
          {/* Blogs Skeleton */}
          <div className="mt-10 sm:mt-[90px]">
            <div className="flex items-center gap-x-2">
              <div className="h-6 w-6 sm:h-12 sm:w-12 bg-gray-300 rounded"></div>
              <div className="h-6 w-32 bg-gray-300 rounded"></div>
            </div>
            <div className="pt-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 gap-y-[71px]">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="h-60 w-[385px] bg-gray-300 rounded-lg"></div>
                    <div className="mt-4 h-4 w-1/3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-8 w-24 bg-gray-300 rounded-2xl animate-pulse inline-block"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogSkeleton;
  