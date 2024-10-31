import ustun from "@/public/Vector.svg";
import { Services } from "@/services/data";
import { ArrowRightOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";

const ServicesUI = () => {
 
  return (
    <div className="Gradient">
      <div className="wrapper text-white pb-24 pt-10 sm:pt-[84px]">
        <div className="flex gap-x-2 items-center">
          <Image className="w-2 h-4 sm:w-6 sm:h-12" src={ustun.src} width={24} height={46} alt="Ustun" />
          <p className="font-semibold sm:text-[40px]">Services</p>
        </div>
        <div className="sm:mt-10 grid gap-x-[29px]  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {Services.map((service)=><div className=" mt-4 sm:mt-0 bg-gradient-to-b from-[#132121] via-[#132121] to-[#124B5B]" key={service.id}>
             <Image src={service.image} width={410} height={499} alt="" />
             <div className="px-6 py-8">
              <div className="fij">
                <div>
                  <p className="text-2xl">{service.name}</p>
                  <p className="text-lg">{service.title}</p>
                </div>
                <div className="border rounded-[8px] ">
                <ArrowRightOutlined className="text-sm px-1 sm:px-1 cursor-pointer " />
                </div>
              </div>
             <div className="text-sm mt-2 font-light line-clamp-4 sm:line-clamp-none">
              {service.description}
             </div>
             </div>
          </div>)}
        </div>
        <div className="">
          <p className="font-light text-xl tracking-wider mt-20 sm:mt-10 sm:text-center  ">Discover a premier online destination dedicated to videography excellence. Explore a wide range of services including Video Production, Editing, Motion Graphics, and more.</p>
        </div>
        <div className="flex justify-center items-center mt-10  ">
        <div className="bg-white text-black py-[18px] px-10 cursor-pointer rounded-xl flex justify-center items-center gap-x-2" >
          <p className="text-2xl">Book You Services</p>
         <div className="linker"><ArrowUpOutlined className="rotate-45 "/></div> 
          </div></div>
      </div>
    </div>
  );
};

export default ServicesUI;
