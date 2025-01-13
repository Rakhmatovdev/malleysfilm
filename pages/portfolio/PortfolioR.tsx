'use client'
import Link from 'next/link'
import ustun from "@/public/Vector.svg";
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import restService from '@/lib/service';
import SPortfolio from './PSkleton';

const PortfolioR = () => {
  const { data: portfolios,isPending} = useQuery({
    queryKey: ["portfolios"],
    queryFn: restService.portfolios,
  });
  console.log(portfolios);

if(isPending){
  return <SPortfolio/>
}
  
  return (<>

 
    <div className="wrapper  ">
    <div className="fij pt-[43px] sm:pt-[85px]">
      <div className="flex gap-2 items-center">
        <Image
          src={ustun.src}
          width={24}
          height={48}
          alt="ustun image"
          className="w-2 h-4 sm:w-6 sm:h-12"
        />
        <p className="font-semibold text-white sm:text-[40px] "> Portfolio</p>
      </div>
      <Link
        className="text-white text-[28px] hidden sm:flex"
        href={"/pages/portfolio"}
      >
        See All
      </Link>
    </div>
  </div>
  <div className="mt-6 sm:mt-[50px]">
        <div className="fij">
          <div className="relative max-w-[600px] max-h-[350px]"    style={{ width: "600px", height: "350px" }}>
            {/* <Image
              className="bg-cover bg-center"
              src={Image1.src}
              width={600}
              height={350}
              alt="Portfolio image 1"
            /> */}
             {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[0].video_url}
          title={portfolios[0].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
           
          </div>
          <div className="relative max-w-[315px] max-h-[350px]"    style={{ width: "315px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[1].video_url}
          title={portfolios[1].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
            
          </div>
          <div className="relative max-w-[535px] max-h-[350px]"    style={{ width: "535px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[2].video_url}
          title={portfolios[2].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
           
          </div>
          <div className="relative  max-w-[470px] max-h-[350px]"    style={{ width: "470px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[3].video_url}
          title={portfolios[3].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
          </div>
        </div>
        <div className="fij">
          <div className="relative max-w-[318px] max-h-[350px]"    style={{ width: "318px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[4].video_url}
          title={portfolios[4].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
          
            
          </div>
          <div className="relative max-w-[471px] max-h-[350px]"    style={{ width: "471px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[5].video_url}
          title={portfolios[5].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
          
          </div>
          <div className="relative max-w-[535px] max-h-[350px]"    style={{ width: "535px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[6].video_url}
          title={portfolios[6].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
          </div>
          <div className="relative max-w-[599px] max-h-[350px]"    style={{ width: "599px", height: "350px" }}>
          {portfolios && (<iframe
          className="absolute inset-0 w-full h-full"
          src={portfolios[7].video_url}
          title={portfolios[7].author}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          
        ></iframe>)}
          </div>
        </div>
      </div>
  </> )
}

export default PortfolioR