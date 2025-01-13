'use client'
import ustun from "@/public/Vector.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import restService from "@/lib/service";

const OurTeamSection = () => {
    const { data: teams} = useQuery({
        queryKey: ["teams"],
        queryFn: restService.teams,
      });
  return (
    <div className="text-white wrapper pt-10 sm:pt-[136px]">
      <div className="flex items-center sm:justify-center gap-2 ">
        <Image
          className="w-2 h-4 sm:w-6 sm:h-12"
          src={ustun}
          width={24}
          height={48}
          alt="Ustun"
        />
        <p className="sm:text-[40px] font-semibold">Our Team</p>
      </div>
      <p className="mt-8 sm:text-[32px] font-medium tracking-wide sm:text-center line-clamp-4 sm:line-clamp-none">
        Each member of the Malleyz Films leadership team has been selected to
        add breadth and depth to our organizational capabilities, foster
        innovative collaboration, and mentor excellence throughout the
        organization.
      </p>

      <div className="sm:mt-[38px]">
     
        <div className="pt-6">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {teams? teams.map((tuser) => (
              <SwiperSlide key={tuser.id}>
                <div
                  className="sm:rounded-xl rounded-2xl w-[156px] h-[154px] sm:w-[250px] sm:h-[328px] bg-center object-cover"
                  style={{ backgroundImage: `url(${tuser.image})` }}
                >
                  <Image
                    className="mt-[7px] ml-[14px] sm:mt-4 sm:ml-[22px] w-[9px] h-[15px] sm:w-[16px] sm:h-[32px]"
                    src={ustun}
                    width={16}
                    height={32}
                    alt="Ustun icon"
                  />
                  <p className="mt-[90px] text-sm sm:mt-[208px] ml-5 sm:text-2xl sm:tracking-wide ">
                    {tuser.name}
                  </p>
                  <p className="ml-5 mt-[4px] sm:text-[12px] text-[8px] line-clamp-1">
                    {tuser.position}
                  </p>
                </div>
              </SwiperSlide>
            )):Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                  {/* Skeleton Card */}
                  <div className="sm:rounded-xl rounded-2xl w-[156px] h-[154px] sm:w-[250px] sm:h-[328px] bg-gray-700 animate-pulse">
                    <div className="h-[32px] w-[16px] mt-4 ml-[22px] bg-gray-500 rounded"></div>
                    <div className="h-[24px] w-[80%] mt-[208px] ml-5 bg-gray-500 rounded"></div>
                    <div className="h-[16px] w-[60%] mt-2 ml-5 bg-gray-500 rounded"></div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
