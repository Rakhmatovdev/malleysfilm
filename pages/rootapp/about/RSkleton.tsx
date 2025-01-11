export const ReviewCardSkeleton1 = () => {
    return (
      <div className="relative left-card mt-[134px] animate-pulse">
        {/* Background Card Skeleton */}
        <div className="absolute bg-gray-800 rounded-lg h-[206px] w-[470px] items-center z-[10] left-0 bottom-0"></div>
        
        {/* Image Placeholder */}
        <div className="absolute min-w-[160px] w-[160px] h-[250px] z-[11] left-[30px] bottom-0 bg-gray-300 rounded-2xl"></div>
        
        {/* Content Skeleton */}
        <div className="absolute bottom-4 left-52 z-[11]">
          {/* Rating Skeleton */}
          <div className="flex items-center gap-x-2">
            <div className="bg-gray-400 h-[10px] w-[80px] rounded-md"></div>
            <div className="bg-gray-400 h-[10px] w-[50px] rounded-md"></div>
          </div>
          
          {/* Text Placeholder */}
          <div className="mt-4 space-y-2">
            <div className="bg-gray-400 h-[10px] w-[254px] rounded-md"></div>
            <div className="bg-gray-400 h-[10px] w-[200px] rounded-md"></div>
          </div>
          
          {/* Author Skeleton */}
          <div className="bg-gray-400 h-[12px] w-[150px] rounded-md mt-4"></div>
          
          {/* Position Skeleton */}
          <div className="bg-gray-400 h-[12px] w-[150px] rounded-md mt-2"></div>
        </div>
        
        {/* Decorative Left Shape Skeleton */}
        <div className="absolute w-[270px] rounded-3xl bg-gray-600 h-[127px] -left-8 -bottom-[56px] z-[9]"></div>
      </div>
    );
  };

  
  export const ReviewCardSkeleton2 = () => {
    return (
      <div className="relative middle-card -translate-x-60 animate-pulse">
        {/* Background Card Skeleton */}
        <div className="absolute bg-gray-800 rounded-lg h-[206px] w-[470px] items-center z-[10] left-0 bottom-0"></div>
  
        {/* Image Placeholder */}
        <div className="absolute min-w-[160px] w-[160px] h-[250px] z-[11] left-[30px] bottom-0 bg-gray-300 rounded-2xl"></div>
  
        {/* Content Skeleton */}
        <div className="absolute bottom-4 left-52 z-[11]">
          {/* Rating Skeleton */}
          <div className="flex items-center gap-x-2">
            <div className="bg-gray-400 h-[10px] w-[80px] rounded-md"></div>
            <div className="bg-gray-400 h-[10px] w-[50px] rounded-md"></div>
          </div>
  
          {/* Description Placeholder */}
          <div className="mt-4 space-y-2">
            <div className="bg-gray-400 h-[10px] w-[254px] rounded-md"></div>
            <div className="bg-gray-400 h-[10px] w-[200px] rounded-md"></div>
          </div>
  
          {/* Name Skeleton */}
          <div className="bg-gray-400 h-[12px] w-[150px] rounded-md mt-4"></div>
  
          {/* Profession Skeleton */}
          <div className="bg-gray-400 h-[12px] w-[150px] rounded-md mt-2"></div>
        </div>
  
        {/* Decorative Background Shapes */}
        <div className="absolute w-[261px] h-[284px] rounded-3xl bg-gray-600 bottom-0 -left-40"></div>
        <div className="absolute w-[261px] h-[284px] rounded-3xl bg-gray-600 bottom-0 left-96"></div>
      </div>
    );
  };
  
  export const ReviewCardSkeleton3 = () => {
    return (
      <div className="relative right-card -translate-x-[470px] mt-[134px] animate-pulse">
        {/* Background Card Skeleton */}
        <div className="absolute bg-gray-800 rounded-lg h-[206px] w-[470px] items-center z-[10] left-0 bottom-0"></div>
  
        {/* Image Placeholder */}
        <div className="absolute min-w-[160px] w-[160px] h-[250px] z-[11] left-[30px] bottom-0 bg-gray-300 rounded-2xl"></div>
  
        {/* Content Skeleton */}
        <div className="absolute bottom-4 left-52 z-[11]">
          {/* Rating Skeleton */}
          <div className="flex items-center gap-x-2">
            <div className="bg-gray-400 h-[10px] w-[80px] rounded-md"></div>
            <div className="bg-gray-400 h-[10px] w-[50px] rounded-md"></div>
          </div>
  
          {/* Description Placeholder */}
          <div className="mt-4 space-y-2">
            <div className="bg-gray-400 h-[10px] w-[254px] rounded-md"></div>
            <div className="bg-gray-400 h-[10px] w-[200px] rounded-md"></div>
          </div>
  
          {/* Name Skeleton */}
          <div className="bg-gray-400 h-[12px] w-[150px] rounded-md mt-4"></div>
  
          {/* Profession Skeleton */}
          <div className="bg-gray-400 h-[12px] w-[150px] rounded-md mt-2"></div>
        </div>
  
        {/* Decorative Background Shapes */}
        <div className="absolute w-[270px] rounded-3xl bg-gray-600 h-[127px] left-[232px] -bottom-[56px] z-[9]"></div>
      </div>
    );
  };
  