'use client'
import Image3 from "@/public/Portfolio-Image3.png";
import play from "@/public/Subtract.svg";
import ustun from "@/public/Vector.svg";
import Image from "next/image";
import PortfolioR from "./PortfolioR";
import { useQuery } from "@tanstack/react-query";
import restService from "@/lib/service";
import { LatestSkelton } from "./PSkleton";
const PortfolioUI = () => {
  const { data: portfolios} = useQuery({
    queryKey: ["portfolios"],
    queryFn: restService.portfolios,
  });
  console.log(portfolios);

 
  return (
    <div className="Gradient">
      <PortfolioR/>

      
    
      {portfolios?(<div className="wrapper text-white pb-[100px]">
        <div className="mt-12 sm:mt-[184px] sm:text-[28px]">Latest Project</div>
        <div className="mt-6 fij items-start flex-wrap  ">
          <div className="">
            <div className="flex gap-2 items-center">
              <Image
                src={ustun.src}
                width={24}
                height={48}
                alt="Ustun"
                className="w-2 h-4 sm:w-6 sm:h-12"
              />
              <p className="sm:text-[40px] font-semibold">
                {portfolios[0].author}
              </p>
            </div>
            <div className="sm:max-w-[600px] sm:text-[24px] mt-12 line-clamp-[9] sm:line-clamp-none  ">
              {portfolios[0].text}
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="relative">
              <Image
                src={Image3.src}
                width={737}
                height={481}
                alt="Brahma image"
                className="w-full h-[400px] "
              />
              <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 hidden sm:block">
                <Image
                  className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                  src={play.src}
                  width={60}
                  height={60}
                  alt="Play image"
                />
                <p className="mt-8"> Brahma</p>
                <p className="-translate-x-5 text-white">Hernan Almar</p>
              </div>
            </div>
          </div>
        </div>
      </div>):<LatestSkelton/>}
    </div>
  );
};

export default PortfolioUI;
