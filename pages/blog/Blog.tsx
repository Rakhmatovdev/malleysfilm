import Fimage from "@/public/images/Featured-Image.png";
import ustun from '@/public/Vector.svg';
import { BlogData } from "@/services/data";
import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";

const BlogUI = () => {
  return (
    <div className="Gradient">
      <div className="pt-10 sm:pt-24 text-white wrapper  pb-[145px]">
        <div className="">
          <p className="sm:text-[18px] font-bold">Sunday, 1 Jan 2023</p>
          <p className="text-red-500 font-bold text-2xl tracking-wide  sm:text-[48px] mt-6 w-[300px] sm:w-full">Bill Walsh leadership lessons</p>
          <p className="text-sm tracking-wide sm:text-[22px] leading-8 mt-4 line-clamp-4 sm:line-clamp-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate
          </p>
          <div className="mt-5 sm:mt-[41px] sm:w-full sm:h-full  "><Image className="rounded-2xl bg-transparent bg-cover bg-center   sm:h-min " src={Fimage.src} height={645} width={1728} alt="Featured image Blog"/></div>
        </div>
        <div className="mt-10 sm:mt-[90px]">
         <div className="flex items-center gap-x-2">
          <Image className="w-2 h-4 sm:w-6 sm:h-12" src={ustun.src} width={24} height={46} alt="Blog section" />
          <p className="sm:text-[40px] font-bold tracking-wider">Blogs</p>
         </div>
         <div className="pt-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 sm:gap-x-10  md:gap-x-12 lg:gap-x-14 gap-y-[71px]">
          {BlogData.map((blog)=><div key={blog.id} className="" >
            <Image src={blog.image} width={385} height={240} alt={blog.title}/>
            <p className="mt-8 text-sm font-bold">{blog.createdAt}</p>
           <div className="mt-3 fij">
           <p className=" text-[20px] font-bold">{blog.title}</p>
           <ArrowUpOutlined className="rotate-45 text-xl mt-2 cursor-pointer"/>
           </div>
            <p className="mt-3 text-[#C0C5D0] w-[320px]">{blog.description}</p>
            <div className="mt-6 fij">
              <p className="text-sm cursor-pointer text-[#C94552] px-[14px] py-2 rounded-2xl bg-[#F9F5FF]">{blog.skils[0]}</p>
              <p className="text-sm cursor-pointer text-[#141414] px-[14px] py-2 rounded-2xl bg-[#F8F9FC]">{blog.skils[1]}</p>
              <p className="text-sm cursor-pointer text-[#185366] px-[14px] py-2 rounded-2xl bg-[#D9F6FF]">{blog.skils[2]}</p>
            </div>

          </div>)}
         </div>
        </div>
      </div>
    </div>
  );
};




export default BlogUI;
