'use client'
import BG from "@/public/images/Rectangle-bg.png";
import logo from "@/public/Logo.svg";
import ustun from "@/public/Vector.svg";
import Navbar from "../rootapp/Navbar";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import restService from "@/lib/service";
import AboutSkeleton from "./AboutSkleton";

const AboutUI = () => {

  const { isPending, error, data:about} = useQuery({
    queryKey: ['about'],
    queryFn: restService.about,
  })
  const { isPending:gisPending, error:gerror, data:galleries} = useQuery({
    queryKey: ['galleries'],
    queryFn: restService.galleries,
  })
console.log(about);
console.log(galleries);

  if(isPending || gisPending){
    return (<AboutSkeleton/>)
  }
  if(error || gerror){
    return <div>Fetch Error...</div>
  }

  return (
    <div className="">
      <section
        style={{ backgroundImage: `url(${BG.src})` }}
        className="h-[360px] sm:w-full sm:h-screen bg-center bg-cover "
      >
        <Navbar />
        <div className="sm:mt-[102px] mt-11 wrapper flex items-center justify-center gap-x-[17px] sm:gap-x-[134px]">
          <div className="mt-[19px] sm:mt-0">
            <Image
                className="rounded-2xl sm:rounded-[80px]" src={about[1].image} width={500} height={500} alt={about[1].text}/>
          </div>
          <div className="">
            <div className="mx-[21px] w-[44px] h-[32px] sm:w-[153px] sm:h-[108px]">
              <Image
                src={logo.src}
                width={153}
                height={108}
                alt="About logo"
              />
            </div>
            <div className="">
              <p className="text-[#C94552] text-sm sm:text-[40px] font-semibold text-balance tracking-wide  mt-2 sm:mt-8 ">
               {about[1].title}
              </p>
              <p className="max-w-[700px] text-white text-[10px] sm:text-[24px] mt-2 sm:mt-8 tracking-wide line-clamp-5 sm:line-clamp-6">
               {about[1].text}  
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[60px] sm:pt-[185px] Gradien text-white wrapper pb-[100px] sm:pb-[165px]">
       
        <div className="mission flex flex-col  sm:flex-row sm:h-[432px] w-full sm:gap-32">
          <div className="">
            <div className="flex items-center gap-x-2 sm:text-[40px]">
              <Image className="w-2 h-4 sm:w-6 sm:h-12" src={ustun.src} width={24} height={48} alt="" />
              <p>{galleries[0]?.title}</p>
            </div>
            <div className="mt-4 sm:mt-8 sm:text-[32px] max-w-[800px] sm:leading-8 tracking-wide text-sm sm:text-base">
             {galleries[0]?.text}
            </div>
          </div>
       
          <div className="flex relative sm:w-[1000px] mt-[60px] sm:mt-0">
            <div className="absolute   w-[89px] h-[113px]  sm:w-[261px] sm:h-[284px] bg-[#237772] rounded-lg sm:rounded-3xl z-0"></div>
            <div className="absolute left-[43px] top-[50px]  z-10 sm:top-[147px] sm:left-[80px]">
              <Image
                className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] rounded-2xl sm:rounded-3xl"
                src={galleries[0]?.images[0]?.image }
                width={432}
                height={285}
                alt="Mission image 1"
              />
            </div>
            <div className="absolute left-[138px] sm:left-[313px] z-20">
              <Image
                className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] rounded-2xl sm:rounded-3xl"
                src={galleries[0]?.images[1]?.image }
                width={432}
                height={285}
                alt="Mission image 2"
              />
            </div>
            <div className="absolute sm:rounded-l-3xl rounded-lg w-[94px] h-[50px] sm:w-[270px] sm:h-[127px]  right-0 top-8 sm:top-20 bg-[#B6414D]"></div>
        
          
          </div>
        </div>
        <div className=" vision flex flex-col-reverse sm:flex-row mt-[180px] sm:mt-[80px]  gap-y-7 sm:gap-y-0 sm:gap-32">
          <div className="sm:mt-[87px]">
            <div className="flex items-center  gap-x-2 sm:text-[40px]">
              <Image className="w-2 h-4 sm:w-6 sm:h-12" src={ustun.src} width={24} height={48} alt="" />
              <p>Our Vision</p>
            </div>
            <div className="mt-4 sm:mt-8 sm:text-[32px] max-w-[800px] tracking-wide text-sm sm:text-base sm:leading-8">
              Each member of the Malleyz Films leadership team has been selected
              to add breadth and depth to our organizational capabilities,
              foster innovative collaboration, and mentor excellence throughout
              the organization.
            </div>
          </div>
          <div className="flex relative h-[240px] sm:h-[590px] sm:w-[1000px] w-full mt-[48px] sm:mt-0">
            <div className="absolute w-[89px] h-[113px]  sm:w-[261px] sm:h-[284px] bg-[#237772] rounded-lg sm:rounded-3xl z-0"></div>
            <div className="absolute top-[46px] left-[37px] sm:left-20 z-20 sm:top-[113px] ">
              <Image
                className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] rounded-2xl sm:rounded-3xl "
                src={galleries[1]?.images[0]?.image}
                width={432}
                height={285}
                alt="Mission image 3"
              />
            </div>
            <div className="absolute top-[122px] left-[137px] sm:left-[315px] sm:top-[305px] z-20">
              <Image
                className="w-[148px] h-[113px] sm:w-[432px] sm:h-[285px] rounded-2xl sm:rounded-3xl"
                src={galleries[1]?.images[1]?.image}
                width={432}
                height={285}
                alt="Mission image 4"
              />
            </div>
            <div className="absolute sm:rounded-l-3xl rounded-lg w-[94px] h-[50px] sm:w-[270px] sm:h-[127px] top-[153px] right-0 sm:top-[384px] bg-[#B6414D]"></div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default AboutUI;
