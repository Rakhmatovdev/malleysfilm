'use client'
import restService from "@/lib/service";
import ustun from '@/public/Vector.svg';
import { ArrowUpOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Image from "next/image";
import BlogSkeleton from "./BlogSkleton";

const BlogUI = () => {
  const { isPending, data:blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: restService.blogs,
  })
    

    if(isPending){
     return (<BlogSkeleton/>)
    }
  
  
  return (
    <div className="Gradient">
   <div className="pt-10 sm:pt-24 text-white wrapper  pb-[145px]">
     {blogs && ( <div className="">
          <p className="sm:text-[18px] font-bold">{format(blogs[0]?.date,'dd MMMM yyyy')}</p>
          <p className="text-red-500 font-bold text-2xl tracking-wide  sm:text-[48px] mt-6 w-[300px] sm:w-full">{blogs[0].name}</p>
          <p className="text-sm tracking-wide sm:text-[22px] leading-8 mt-4 line-clamp-4 sm:line-clamp-none">
            {blogs[0].text}
          </p>
          <div className="mt-5 sm:mt-[41px] sm:w-full sm:h-full  "><Image className="rounded-2xl bg-transparent bg-cover bg-center   sm:h-min " src={blogs[0].image} height={645} width={1728} alt="Featured image Blog"/></div>
        </div>)}
        
        <div className="mt-10 sm:mt-[90px]">
         <div className="flex items-center gap-x-2">
          <Image className="w-2 h-4 sm:w-6 sm:h-12" src={ustun.src} width={24} height={46} alt="Blog section" />
          <p className="sm:text-[40px] font-bold tracking-wider">Blogs</p>
         </div>
         <div className="pt-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 sm:gap-x-10  md:gap-x-12 lg:gap-x-14 gap-y-[71px]">
          {blogs && blogs.filter(item=>item.id!='2003').map((blog)=><div key={blog.id} className="" >
            <Image src={blog.image} width={385} height={240} alt={blog.name}/>
            <p className="mt-8 text-sm font-bold">{format(blog.date,'dd MMMM yyyy')}</p>  
          
           <div className="mt-3 fij">
           <p className=" text-[20px] font-bold line-clamp-1">{blog.name}</p>
           <ArrowUpOutlined className="rotate-45 text-xl mt-2 cursor-pointer"/>
           </div>
            <p className="mt-3 text-[#C0C5D0] w-[320px] line-clamp-3">{blog.text}</p>
            <div className="mt-6 fij">
              <p className="text-sm cursor-pointer text-[#C94552] px-[14px] py-2 rounded-2xl bg-[#F9F5FF]">Leadership</p>
              <p className="text-sm cursor-pointer text-[#141414] px-[14px] py-2 rounded-2xl bg-[#F8F9FC]">Management</p>
              <p className="text-sm cursor-pointer text-[#185366] px-[14px] py-2 rounded-2xl bg-[#D9F6FF]">Presentation</p>
            </div>

          </div>)}
         </div>
        </div>
      </div>
    </div>
  );
};




export default BlogUI;
