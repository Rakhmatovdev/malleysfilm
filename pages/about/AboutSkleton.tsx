import React from "react";

const AboutSkeleton = () => {
  return (
    <div className="">
      {/* Hero Section Skeleton */}
      <section className="h-[360px] sm:w-full sm:h-screen bg-center bg-cover animate-pulse">
        <div className="h-12 sm:h-20 bg-gray-300 rounded-md"></div>
        <div className="sm:mt-[102px] mt-11 wrapper flex items-center gap-x-[17px] sm:gap-x-[134px]">
          <div className="mt-[19px] sm:mt-0">
            <div className="w-[707px] h-[590px] sm:rounded-[80px] bg-gray-300"></div>
          </div>
          <div>
            <div className="mx-[21px] w-[44px] h-[32px] sm:w-[153px] sm:h-[108px] bg-gray-300 rounded-md"></div>
            <div className="mt-2 sm:mt-8">
              <div className="h-8 sm:h-16 bg-gray-300 rounded-md w-32 sm:w-60 mb-4"></div>
              <div className="max-w-[700px] h-[10px] sm:h-[24px] bg-gray-300 rounded-md mb-2"></div>
              <div className="max-w-[700px] h-[10px] sm:h-[24px] bg-gray-300 rounded-md mb-2"></div>
              <div className="max-w-[700px] h-[10px] sm:h-[24px] bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section Skeleton */}
      <section className="pt-[60px] sm:pt-[185px] Gradien text-white wrapper pb-[100px] sm:pb-[165px] animate-pulse">
        <div className="mission flex flex-col sm:flex-row sm:h-[432px] w-full sm:gap-32">
          <div>
            <div className="flex items-center gap-x-2 sm:text-[40px]">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-8 sm:h-16 bg-gray-300 rounded-md w-32 sm:w-60"></div>
            </div>
            <div className="mt-4 sm:mt-8 sm:text-[32px] max-w-[800px] sm:leading-8 tracking-wide">
              <div className="h-6 sm:h-8 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-6 sm:h-8 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-6 sm:h-8 bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <div className="flex relative sm:w-[1000px] mt-[60px] sm:mt-0">
            <div className="absolute w-[89px] h-[113px] sm:w-[261px] sm:h-[284px] bg-gray-300 rounded-md"></div>
            <div className="absolute left-[43px] top-[50px] sm:top-[147px] sm:left-[80px]">
              <div className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] bg-gray-300 rounded-md"></div>
            </div>
            <div className="absolute left-[138px] sm:left-[313px]">
              <div className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] bg-gray-300 rounded-md"></div>
            </div>
            <div className="absolute w-[94px] h-[50px] sm:w-[270px] sm:h-[127px] right-0 top-8 sm:top-20 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </section>

      {/* Vision Section Skeleton */}
      <section className="pt-[60px] sm:pt-[185px] Gradien text-white wrapper pb-[100px] sm:pb-[165px] animate-pulse">
        <div className="vision flex flex-col-reverse sm:flex-row mt-[180px] sm:mt-[80px] gap-y-7 sm:gap-y-0 sm:gap-32">
          <div className="sm:mt-[87px]">
            <div className="flex items-center gap-x-2 sm:text-[40px]">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-8 sm:h-16 bg-gray-300 rounded-md w-32 sm:w-60"></div>
            </div>
            <div className="mt-4 sm:mt-8 sm:text-[32px] max-w-[800px] tracking-wide">
              <div className="h-6 sm:h-8 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-6 sm:h-8 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-6 sm:h-8 bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <div className="flex relative h-[240px] sm:h-[590px] sm:w-[1000px] w-full mt-[48px] sm:mt-0">
            <div className="absolute w-[89px] h-[113px] sm:w-[261px] sm:h-[284px] bg-gray-300 rounded-md"></div>
            <div className="absolute top-[46px] left-[37px] sm:left-20">
              <div className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] bg-gray-300 rounded-md"></div>
            </div>
            <div className="absolute top-[122px] left-[137px] sm:left-[315px] sm:top-[305px]">
              <div className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] bg-gray-300 rounded-md"></div>
            </div>
            <div className="absolute w-[94px] h-[50px] sm:w-[270px] sm:h-[127px] top-[153px] right-0 sm:top-[384px] bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSkeleton
