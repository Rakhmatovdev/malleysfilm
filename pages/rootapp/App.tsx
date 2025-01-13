"use client";
import {Ours} from "@/assets/data";
import BGA from "@/public/images/About-bg.png";
import BG from "@/public/images/bg-home.png";
import logo from "@/public/Logo.svg";
import ustun from "@/public/Vector.svg";
import {
  ArrowUpOutlined,
  LeftOutlined,
  PlayCircleFilled,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination]);
import { Navigation, Pagination } from "swiper/modules";
import PortfolioR from "../portfolio/PortfolioR";
import ServicesUI from "../servicesui/Services";
import { Rate } from "antd";
import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";
import restService from "@/lib/service";
import ASkeleton from "./about/ASkleton";
import AMobileSkeleton from "./about/MSkleton";
import ReviewsSkeleton from "./about/MRSkleton";
import {
  ReviewCardSkeleton1,
  ReviewCardSkeleton2,
  ReviewCardSkeleton3,
} from "./about/RSkleton";
import BlogsSkeleton from "./about/BSkleton";
import OurTeamSection from "./about/Team";
import Projects from "./about/Projects";

const App = () => {
  const { data: about } = useQuery({
    queryKey: ["about"],
    queryFn: restService.about,
  });
  const { data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: restService.blogs,
  });
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: restService.reviews,
  });
 


  
  return (
    <>
      <section
        className="h-[360px] w-full sm:h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BG.src})` }}
      >
        <Navbar />
        <div className="text-white flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col text-center  ">
            <p className="text-[20px] sm:text-[64px] sm:font-light ">
              Time to Production
            </p>
            <p className="text-[12px] sm:text-[32px] mx-auto sm:font-light w-[70%] sm:w-[85%]">
              Discover a premier online destination dedicated to videography
              excellence. Explore a wide range of services including Video
              Production, Editing, Motion Graphics, and more.
            </p>
            <div className="flex flex-col sm:flex-row mx-auto sm:gap-x-8 sm:mt-8 mt-1">
              <div className="flex px-1 py-2  sm:px-10 sm:py-[18px] bg-white text-black gap-2 items-center rounded-xl  tracking-wider font-bold text-[14px]  sm:text-[24px] ">
                <Link href={"/pages/portfolio"}>View Our Portfolio </Link>
                <div className="linker h-[22px]">
                  {" "}
                  <ArrowUpOutlined className="rotate-45" />
                </div>
              </div>
              <div className="flex mx-auto px-1  py-2 mt-[11px] sm:mt-0 sm:px-20 sm:py-[18px] bg-white text-black gap-2 items-center rounded-xl  sm:tracking-wider font-bold text-[14px] sm:text-[24px] ">
                <Link href={"/pages/contact"}>Contact Us </Link>
                <div className="linker h-[22px]">
                  {" "}
                  <ArrowUpOutlined className="rotate-45" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-1 sm:bottom-8 flex right-2 sm:right-8 gap-1 sm:gap-12 sm:leading-8">
            {Ours.map((user) => (
              <div key={user.id} className="flex flex-col items-center ">
                <p className="text-[14px] sm:text-[32px] font-semibold ">
                  +{user.count}
                </p>
                <p className="text-[10px] sm:text-[28px] font-medium  ">
                  {user.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Gradient">
        {/* project here */}
        <Projects/>
        <PortfolioR />
      </section>
      <section className="Gradient">
        <ServicesUI />
      </section>
      <section className="Gradient  pt-[136px]">
        <div
          className="wrapper w-full h-[219px]  p-2 sm:h-[781px] rounded-3xl  sm:rounded-[40px] sm:p-[66px] flex flex-col justify-end text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${BGA.src})` }}
        >
          {about ? (
            <div className="flex">
              <div className=" h-full  w-[60%]">
                <Image
                  className="sm:mx-5 w-[33px] h-[26px] sm:w-[153px] sm:h-[108px]"
                  src={logo.src}
                  width={153}
                  height={108}
                  alt=""
                />
                <p className="text-base sm:text-[40px] text-[#C94552] tracking-wide sm:mt-8">
                  {about[0]?.title}
                </p>
                <p className="sm:mt-8 text-[12px] sm:text-[24px] tracking-wide line-clamp-6  ">
                  {about[0]?.text}
                </p>
              </div>
              <div className="items-end gap-x-8 hidden sm:flex  ">
                {about.map((data) => (
                  <div key={data.id} className="relative ">
                    <Image
                      className=""
                      src={data.image}
                      width={242}
                      height={266}
                      alt={data.title}
                    />
                    <div className="absolute   left-1/2 top-[55%] -translate-x-1/2  -translate-y-1/2 text-center">
                      <PlayCircleFilled className="cursor-pointer  sm:text-[40px] lg:text-[60px]  mb-[10px]" />
                      <div className="flex flex-col  ">
                        <p className=" lg:text-[14px] mt-0 lg:font-semibold ">
                          {data.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ASkeleton />
          )}
        </div>
        {about ? (
          <div className=" mt-[31px] pb-4 items-end flex sm:hidden flex-wrap mx-auto gap-y-2 px-5 justify-between relative   ">
            {about.map((data) => (
              <div key={data.id} className="relative text-white ">
                <Image
                  className="rounded-2xl w-[320px] h-[270px] sm:w-[156] sm:h-[154] "
                  src={data.image}
                  width={156}
                  height={154}
                  alt={data.title}
                />
                <div className="absolute left-1/2 top-1/2 mt-6 -translate-x-1/2 -translate-y-1/2 text-center">
                  <PlayCircleFilled className="cursor-pointer text-[42px]  opacity-75" />
                  <div className="flex flex-col  ">
                    <p className="text-[12px] w-40  mt-[26px]">{data.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AMobileSkeleton />
        )}
      </section>

      <section className="Gradient -z-50">
        {/* <div className="text-white wrapper pt-10 sm:pt-[136px]">
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
            Each member of the Malleyz Films leadership team has been selected
            to add breadth and depth to our organizational capabilities, foster
            innovative collaboration, and mentor excellence throughout the
            organization.
          </p>
          <div className="sm:mt-[38px]  ">
            <div className="sm:flex hidden justify-end items-center gap-x-3 ">
              <LeftOutlined className="w-[45px] h-[50px] bg-white text-red-500 flex justify-center items-center text-3xl rounded-lg box-border  " />
              <RightOutlined className="w-[45px] h-[50px] bg-white text-red-500 flex justify-center items-center text-3xl rounded-lg " />
            </div>
            <div className="pt-6 flex items-center  justify-between flex-wrap gap-y-4">
              {OurTeam.map((tuser) => (
                <div
                  className="sm:rounded-xl rounded-2xl  w-[156px] h-[154px]  sm:w-[250px] sm:h-[328px] bg-center "
                  key={tuser.id}
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
                    {tuser.profession}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <OurTeamSection/>

        <div className="mt-10 sm:mt-[279px] text-white wrapper">
          <div className="hidden xl:flex items-center justify-between gap-[20px]">
            {/*Left-card*/}

            {reviews ? (
              <div className="relative left-card mt-[134px]">
                <div className="absolute bg-[#050505] rounded-lg h-[206px] w-[470px] items-center z-[10] left-0 bottom-0" />
                <div className="absolute min-w-[160px] w-[160px] h-[250px] z-[11] left-[30px] bottom-0">
                  <Image
                    className="rounded-2xl object-cover"
                    src={reviews[0].image}
                    width={160}
                    height={250}
                    alt="Enginer photo"
                  />
                </div>
                <div className="absolute bottom-4 left-52 z-[11] ">
                  <div className="flex items-center gap-x-2 ">
                    <Rate
                      disabled
                      defaultValue={reviews[0].rating}
                      className="text-white"
                    />{" "}
                    <p className="text-[#EEC5C9] text-[10px]">
                      {reviews[0].rating}.0 rating
                    </p>
                  </div>
                  <p className="mt-4 text-sm w-[254px] line-clamp-4">
                    {reviews[0].text}
                  </p>
                  <p className="text-sm text-[#C94552] mt-4">
                    {reviews[0].author}
                  </p>
                  <p className="text-sm text-[#C94552]">
                    {reviews[0].position}
                  </p>
                </div>
                <div className="absolute w-[270px] rounded-3xl bg-[#B6414D] h-[127px]  -left-8 -bottom-[56px] z-[9]" />
              </div>
            ) : (
              <ReviewCardSkeleton1 />
            )}

            {/*Middle-card*/}
            {reviews ? (
              <div className="relative middle-card -translate-x-60">
                <div className="absolute bg-[#050505] rounded-lg h-[206px] w-[470px] items-center z-[10] left-0 bottom-0" />
                <div className="absolute min-w-[160px] w-[160px] h-[250px] z-[11] left-[30px] bottom-0">
                  <Image
                    className="rounded-2xl object-cover"
                    src={reviews[1].image}
                    width={160}
                    height={250}
                    alt="Enginer photo"
                  />
                </div>
                <div className="absolute bottom-4 left-52 z-[11] ">
                  <div className="flex items-center gap-x-2 ">
                    <Rate
                      disabled
                      defaultValue={reviews[1].rating}
                      className="text-white"
                    />{" "}
                    <p className="text-[#EEC5C9] text-[10px]">
                      {reviews[1].rating}.0 rating
                    </p>
                  </div>
                  <p className="mt-4 text-sm w-[254px] line-clamp-4">{reviews[1].text}</p>
                  <p className="text-sm text-[#C94552] mt-4">
                    {reviews[1].author}
                  </p>
                  <p className="text-sm text-[#C94552]">
                    {reviews[1].position}
                  </p>
                </div>
                <div className=" absolute   w-[261px] h-[284px] rounded-3xl bg-[#237772] bottom-0 -left-40 "></div>
                <div className=" absolute   w-[261px] h-[284px] rounded-3xl bg-[#237772] bottom-0  left-96 "></div>
              </div>
            ) : (
              <ReviewCardSkeleton2 />
            )}

            {/*Right-card*/}
            {reviews ? (
              <div className="relative right-card -translate-x-[470px] mt-[134px]">
                <div className="absolute bg-[#050505] rounded-lg h-[206px] w-[470px] items-center z-[10] left-0 bottom-0" />
                <div className="absolute min-w-[160px] w-[160px] h-[250px] z-[11] left-[30px] bottom-0">
                  <Image
                    className="rounded-2xl object-cover"
                    src={reviews[2].image}
                    width={160}
                    height={250}
                    alt="Enginer photo"
                  />
                </div>
                <div className="absolute bottom-4 left-52 z-[11] ">
                  <div className="flex items-center gap-x-2 ">
                    <Rate
                      disabled
                      defaultValue={reviews[2].rating}
                      className="text-white"
                    />{" "}
                    <p className="text-[#EEC5C9] text-[10px]">
                      {reviews[2].rating}.0 rating
                    </p>
                  </div>
                  <p className="mt-4 text-sm w-[254px] line-clamp-4">{reviews[2].text}</p>
                  <p className="text-sm text-[#C94552] mt-4">
                    {reviews[2].author}
                  </p>
                  <p className="text-sm text-[#C94552]">
                    {reviews[2].position}
                  </p>
                </div>
                <div className="absolute w-[270px] rounded-3xl bg-[#B6414D] h-[127px]  left-[232px] -bottom-[56px] z-[9]" />
              </div>
            ) : (
              <ReviewCardSkeleton3 />
            )}
          </div>
        </div>

        {/*Reviews*/}
        <div className="text-white wrapper">
          {/* <div className="flex items-center sm:justify-center gap-x-2 ">
                        <Image className={'w-2 h-4 sm:w-6 sm:h-12'} src={ustun} width={24} height={48} alt="Ustun"/>
                        <p className="sm:text-[40px] font-semibold ">Reviews</p>
                    </div>
                    <p className="text-[18px] sm:text-center mt-4 sm:mt-10 tracking-wider">
                        Helping 500 creators take beautiful screenshots everyday...
                    </p>
                    <div className="hidden sm:flex justify-center items-center mt-6 gap-x-2">
                        {Users.map((user) => (
                            <div className="" key={user.id}>
                                <Image
                                    className="rounded-full bg-white w-[48px] h-[48px] bg-center object-cover   "
                                    src={user.image}
                                    width={48}
                                    height={48}
                                    alt={user.name}
                                />
                            </div>
                        ))}
                    </div> */}
          {/* <div className="flex sm:hidden justify-center items-center mt-6 gap-x-2">
                        {Users.slice(0,4).map((user) => (
                            <div className="" key={user.id}>
                                <Image
                                    className="rounded-full bg-white w-[48px] h-[48px] bg-center object-cover   "
                                    src={user.image}
                                    width={48}
                                    height={48}
                                    alt={user.name}
                                />
                            </div>
                        ))}
                        <div className="rounded-full w-[48px] h-[48px] border-2 flex justify-center items-center cursor-pointer  ">
                            <p className={''}> +{Users.length-4}</p>
                        </div>


                    </div> */}

          <div className={"flex flex-col sm:hidden mt-[73px]"}>
            {reviews ? (
              reviews.map((enginer) => (
                <div
                  key={enginer.id}
                  className={"relative h-[240px] flex justify-center  "}
                >
                  <div
                    className={
                      "absolute bg-[#050505] rounded-lg h-[206px]  w-[328px] items-center z-[10]  top-0 "
                    }
                  />
                  <Image
                    className={"absolute z-20 -top-4  left-10"}
                    src={enginer.image}
                    alt={enginer.author}
                    width={128}
                    height={221}
                  />
                  <div className="absolute top-2 left-48 z-[11] ">
                    <div className="flex items-center gap-x-2 ">
                      <Rate
                        disabled
                        defaultValue={enginer.rating}
                        className="text-white text-[10px]"
                      />{" "}
                      <p className="text-[#EEC5C9] text-[10px]">
                        {enginer.rating}.0 rating
                      </p>
                    </div>
                    <p className="mt-2 text-[12px] w-[135px] line-clamp-5">
                      {enginer.text}
                    </p>
                    <p className="text-sm text-[#C94552] mt-2">
                      {enginer.author}
                    </p>
                    <p className="text-[12px] w-[138px] sm:w-full text-[#C94552] line-clamp-1">
                      {enginer.position}
                    </p>
                  </div>
                  <div
                    className={
                      "absolute  -right-2 -top-4 rounded-3xl bg-[#237772] w-[139px] h-[151px] z-[9]"
                    }
                  />
                  <div
                    className={
                      "absolute  -left-2 bottom-14  rounded-r-3xl bg-[#B6414D] w-[148px] h-[60px] z-[9]"
                    }
                  />
                </div>
              ))
            ) : (
              <ReviewsSkeleton />
            )}
          </div>

          {/* <div className="text-center sm:mt-[29px]">
                        <p className="sm:text-[32px] text-lg">5.0 User Rating</p>
                        <Rate
                            defaultValue={5}
                            className="text-[#C94552] mt-2 sm:text-3xl"
                            disabled
                        />
                    </div> */}
        </div>

        {/*blog*/}
        {blogs ? (
          <div className="mt-[34px] sm:mt-[234px] text-white wrapper pb-[50px] sm:pb-40">
            <div className="mt-10 sm:mt-[90px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Image
                    className="w-2 h-4 sm:w-6 sm:h-12"
                    src={ustun}
                    width={24}
                    height={46}
                    alt="Blog section"
                  />
                  <p className="sm:text-[40px] font-bold tracking-wider">
                    Blogs
                  </p>
                </div>

                <div className="flex gap-x-3 relative">
                <div className="flex gap-x-3">

<LeftOutlined className="cursor-pointer swiper-button-prev   bg-white text-red-500 flex justify-center items-center text-sm sm:text-3xl rounded-lg "/>
<RightOutlined className="cursor-pointer swiper-button-next w-8 h-8 sm:w-[45px] sm:h-[50px] bg-white text-red-500 flex justify-center items-center text-sm sm:text-3xl rounded-lg "/>


</div>
                </div>
              </div>

              <div
                className="mt-10"
                style={{
                  width: "100%",
                }}
              >
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                  }}
                  pagination={{ clickable: true }}
                >
                  {blogs.filter(item=>item.id!="2003").map((blog) => (
                    <SwiperSlide key={blog.id}>
                      <div>
                        <Image
                          src={blog.image}
                          width={385}
                          height={240}
                          alt={blog.name}
                        />
                        <p className="mt-8 text-sm font-bold"></p>

                        <div className="mt-3 fij flex justify-between items-center">
                          <p className="text-[20px] font-bold line-clamp-1">
                            {blog.name}
                          </p>
                          <ArrowUpOutlined className="rotate-45 text-xl mt-2 cursor-pointer" />
                        </div>

                        <p className="mt-3 text-[#C0C5D0] w-[320px] line-clamp-3">
                          {blog.text}
                        </p>

                        <div className="mt-6 fij flex gap-1  items-center">
                          <p className="text-sm cursor-pointer text-[#C94552] px-[14px] py-2 rounded-2xl bg-[#F9F5FF]">
                            Leadership
                          </p>
                          <p className="text-sm cursor-pointer text-[#141414] px-[14px] py-2 rounded-2xl bg-[#F8F9FC]">
                            Management
                          </p>
                          <p className="text-sm cursor-pointer text-[#185366] px-[14px] py-2 rounded-2xl bg-[#D9F6FF]">
                            Presentation
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ) : (
          <BlogsSkeleton />
        )}
      </section>
    </>
  );
};

export default App;
