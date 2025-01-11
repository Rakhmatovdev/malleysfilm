'use client'
import { AboutFooter, HelpsFooter, ServicesFooter } from "@/assets/data";
import restService from "@/lib/service";
import Logo from "@/public/Logo.svg";
import { Inputs } from "@/types/types";
import {
  FacebookOutlined,
  InstagramOutlined,
  RightOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import { useQuery } from "@tanstack/react-query";
import Image from 'next/image';
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import SocialLinksSkeleton from "./SocialLink";


const Footer = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  const { isPending, error, data:footer} = useQuery({
    queryKey: ['footer'],
    queryFn: restService.footer,
  })


  console.log(footer);
  

 if(error){
   return <div>Error...</div>
 }
  return (
    <div className=' text-white bg-gradient-to-t from-[#0C8386]  to-[#2F5A5B]'>
      <div className=" ">
   <div className=" pt-11 fij wrapper">
    <Link href={"/"} className="sm:ml-[151px]"><Image src={Logo} width={109} height={85} className="w-[55px] h-[43px] sm:w-[109px] sm:h-[85px] cursor-pointer" alt='Logo'/></Link>
    <div className="sm:fij gap-20">
      <p className="sm:text-[22px] text-sm text-center ">Ready to get started?</p>
      <button className='py-4 px-16 bg-red-400 text-white font-semibold text-sm sm:text-[17px] rounded-lg mt-2 sm:mt-0'>Get started</button>
    </div>
   </div>
        <hr className='mt-3 hidden sm:flex' />
      </div>
      <div className="mt-10 wrapper flex sm:justify-between gap-x-10 sm:gap-0 flex-wrap">

      <div className="flex flex-col w-full sm:w-[385px] sm:ml-[151px] mb-4 sm:mb-0">
        <p className="max-w-[120px] sm:max-w-[220px]  sm:text-[22px]">Subscribe to our
        newsletter</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-end  ">
          <input {...register("email")} type="text" placeholder='Email address' className='flex-1  sm:pr-24 border-b pb-5 text-sm outline-none placeholder:text-[#979797]  border-[#979797] bg-transparent ' />
       <button type="submit" className="py-4 px-5 bg-red-500 rounded-t-lg  "> <RightOutlined /></button>
        </form>
      </div>
      
      <div className="service">
       <ul className="flex flex-col gap-y-4  sm:mr-0">
        <li className="font-semibold">Services</li>
         {ServicesFooter.map(data=><Link key={data.id} href={data.path}>
         {data.title}
         </Link>)}
       </ul>
      </div>

      <div className="about">
         <ul className="flex flex-col gap-y-4">
          <li className="font-semibold">About</li>
          {AboutFooter.map(data=><Link key={data.id} href={data.path}>
         {data.title}
         </Link>)}
         </ul>
      </div>
      <div className="help xl:pr-32  mt-4 sm:mt-0  w-full sm:w-[200px] flex sm:items-start  items-end justify-between ">
     <ul className="flex flex-col w-[200px] gap-y-4">
      <li className="font-semibold">Help</li>
      {HelpsFooter.map(data=><Link key={data.id} href={data.path}>
         {data.title}
         </Link>)}
     </ul>
     <div className="gap-2 sm:hidden flex">
        <FacebookOutlined className={"cursor-pointer text-lg"} />
        <TwitterOutlined className={"cursor-pointer text-lg"} />
        <InstagramOutlined className={"cursor-pointer text-lg"} />
        </div>
      </div>

      </div>

      <div className="wrapper flex  sm:gap-x-0 pb-[100px] pt-[70px] justify-center sm:fij ">
        <div className="flex sm:gap-20 gap-x-4 ">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
    {footer ?   ( <div className="gap-2 hidden sm:flex">
      <Link href={footer[0]?.path} className=""> <FacebookOutlined className={"cursor-pointer text-xl"} /></Link>
      <Link href={footer[1]?.path} className=""> <TwitterOutlined  className={"cursor-pointer text-xl"}/></Link> 
      <Link href={footer[2]?.path} className=""> <InstagramOutlined className={"cursor-pointer text-xl"} /></Link>
        </div>):<SocialLinksSkeleton/>
        }

      </div>
    </div>
  )
}

export default Footer