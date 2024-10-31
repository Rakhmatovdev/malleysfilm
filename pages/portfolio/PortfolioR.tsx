
import Link from 'next/link'
import ustun from "@/public/Vector.svg";
import Image from 'next/image';
import Image1 from "@/public/Portfolio-Image1.png";
import Image2 from "@/public/Portfolio-Image2.png";
import Image3 from "@/public/Portfolio-Image3.png";
import Image4 from "@/public/Portfolio-Image4.png";
import Image5 from "@/public/Portfolio-Image5.png";
import Image6 from "@/public/Portfolio-Image6.png";
import Image7 from "@/public/Portfolio-Image7.png";
import Image8 from "@/public/Portfolio-Image8.png";
import play from "@/public/Subtract.svg";

const PortfolioR = () => {
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
        href={"/portfolio"}
      >
        See All
      </Link>
    </div>
  </div>
  <div className="mt-6 sm:mt-[50px]">
        <div className="fij">
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image1.src}
              width={600}
              height={350}
              alt="Portfolio image 1"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="w-5 h-5 lg:w-[60px] lg:h-[60px] cursor-pointer"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="-translate-x-3 sm:-translate-x-5 text-[8px] sm:text-base text-white">
                Hernan Almar
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image2.src}
              width={315}
              height={350}
              alt="Portfolio image 2"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image3.src}
              width={535}
              height={350}
              alt="Portfolio image 3"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image4.src}
              width={470}
              height={350}
              alt="Portfolio image 3"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
        </div>
        <div className="fij">
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image5.src}
              width={318}
              height={350}
              alt="Portfolio image 4"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image6.src}
              width={471}
              height={350}
              alt="Portfolio image 5"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image7.src}
              width={535}
              height={350}
              alt="Portfolio image 6"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              className="bg-cover bg-center"
              src={Image8.src}
              width={599}
              height={350}
              alt="Portfolio image 7"
            />
            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <Image
                className="cursor-pointer w-5 h-5 lg:w-[60px] lg:h-[60px]"
                src={play.src}
                width={60}
                height={60}
                alt="Play image"
              />
              <p className="text-white text-[12px] sm:text-2xl -translate-x-2.5 sm:pt-5">
                Brahma
              </p>
              <p className="text-[8px] sm:text-base -translate-x-3  sm:-translate-x-5 text-white">
                Hernan Almar
              </p>
            </div>
          </div>
        </div>
      </div>
  </> )
}

export default PortfolioR