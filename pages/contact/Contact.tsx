'use client'
import {
  ArrowUpOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import BG from "../../public/Contact-Info.png";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  address: string,
  phone:number,
  message:string
};

type Input2={
  email:string
}

const ContactUI = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm<Input2>();

  const onSubmit1: SubmitHandler<Inputs> = (data) => {
    console.log("Submit 1:", data);
  };

  const onSubmit2: SubmitHandler<Input2> = (data) => {
    console.log("Submit 2:", data);
  };
  return (
    <div className="Gradient">
      <div className="wrapper text-white mt-10 sm:mt-36">
        <div>
          <div className="sm:fij flex-col sm:flex-row">
            <div className="">
              <div className="sm:text-[28px] text-[18px]">Get Started</div>
              <div className="sm:text-[56px] sm:w-[750px] mt-8 w-[260px] sm:leading-[50px] sm:mt-8 sm:mb-16">
                Get in touch with us. We're here to assist you.
              </div>
            </div>
            <div className="flex sm:flex-col  sm:gap-y-6 gap-x-6 sm:gap-x-0 mt-[16px] sm:mt-0">
              <FacebookOutlined className="cursor-pointer bg-transparent border p-2 sm:p-3 text-2xl rounded-full " />
              <InstagramOutlined className="cursor-pointer border p-2 sm:p-3 text-2xl rounded-full" />
              <TwitterOutlined className="cursor-pointer border p-2 sm:p-3 text-2xl rounded-full" />
            </div>
          </div>
          <div className="mt-6">
            <button className="px-9 py-4 bg-white rounded-xl text-[20px] font-semibold text-black">
              Contact Us
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col gap-y-12 mt-[58px] sm:mt-[120px]">
          <div className="flex flex-col sm:flex-row sm:fij gap-y-8 sm:gap-x-8">
            <input
              type="text"
              className="w-full  border-b-2 bg-transparent placeholder:text-white outline-none px-[10px] pt-[10px] pb-7 sm:text-2xl border-stone-500"
              placeholder="Your Name"
              {...register("name")}
            />
            <input
              type="text"
              className="w-full  border-b-2 bg-transparent placeholder:text-white outline-none px-[10px] pt-[10px] pb-7 sm:text-2xl border-stone-500"
              placeholder="Email Address"
              {...register("address")}
            />
            <input
              type="number"
              className="w-full  border-b-2 bg-transparent placeholder:text-white outline-none px-[10px] pt-[10px] pb-7 sm:text-2xl border-stone-500"
              placeholder="Phone Number (optional)"
              {...register("phone")}
            />
          </div>
          <div className="">
            <textarea
              className="py-[14px] px-[10px] bg-transparent text-white placeholder:text-white outline-none  border-b-2 border-stone-500 resize-none text-2xl w-full h-[146px]"
              placeholder="Message"
              id=""
              {...register("message")}
            ></textarea>
          </div>
          <button type="submit" className="bg-white rounded-xl text-black flex gap-2 px-[30px] py-[18px] w-[342px] items-center">
            <p  className="text-[24px] font-semibold  tracking-wider">
              Leave us a Message
            </p>
            <div className="border-[3px]   border-black flex justify-center items-center    rounded-lg w-6 h-6">
              <ArrowUpOutlined className="rotate-45 text-sm font-bold" />
            </div>
          </button>
        </form>
      </div>
      <div
        className="px-2 mt-12 sm:h-[421px] sm:mt-[129px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${BG.src})`,
         
        }}
      >
        <div className=" flex sm:justify-center py-20 sm:gap-x-[69px] flex-col sm:flex-row ">
          <div className="">
            <div className="sm:text-2xl">Contact Info</div>
            <div className="sm:text-5xl sm:w-[470px] font-semibold mt-6">
              We are always happy to assist you
            </div>
          </div>
          <div className="flex gap-24 mt-8 sm:mt-0 flex-col sm:flex-row">
            <div className="p-7 sm:p-8">
              <div className="text-[22px] font-semibold tracking-wider">
                <p>Email Address</p>
                <div className="w-[27px] h-[3px] bg-black mt-6"></div>
              </div>
              <div className="mt-[27px]">
                <p className="text-[22px] font-semibold tracking-wide">
                  help@info.com
                </p>
                <p className="text-[20px] w-[216px] mt-6">
                  Assistance hours: Monday - Friday 6 am to 8 pm EST
                </p>
              </div>
            </div>
            <div className="p-7 sm:p-8">
              <div className="text-[22px] font-semibold tracking-wider">
                <p> Number</p>
                <div className="w-[27px] h-[3px] bg-black mt-6"></div>
              </div>
              <div className="mt-[27px]">
                <p className="text-[22px] font-semibold tracking-wide">
                  (808) 998-34256
                </p>
                <p className="text-[20px] w-[216px] mt-6">
                  Assistance hours: Monday - Friday 6 am to 8 pm EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-0 Gradient py-[120px] flex flex-col sm:flex-row text-white items-center gap-x-20 justify-center">
        <div className="">
          <p className="text-[18px] font-semibold sm:text-[40px]">Subcribe to our Blog</p>
          <p className="sm:max-w-[560px] mt-4 sm:mt-0 sm:text-[20px] ">
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.
          </p>
        </div>
        <form onSubmit={handleSubmit2(onSubmit2)} className="sm:w-[550px] h-[47px] sm:h-[84px] flex flex-row mt-6  sm:mt-0 w-full">
          <input type="text" className="rounded-l-xl bg-[#5a6666] outline-none placeholder:text-white text-[18px] p-6 w-full" placeholder="Enter your email"{...register2("email")}/>
          <button type="submit" className="px-2  sm:p-6 bg-white rounded-r-xl sm:text-[18px] text-[#1A3231]">Subscribe</button>
        </form>
      </div>

    </div>
  );
};

export default ContactUI;