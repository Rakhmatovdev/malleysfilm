"use client";
import { NavLinks } from "@/assets/data";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import logo from "/public/Logo.svg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setToggle(false) });
  const pathname = usePathname();
 
  return (
    <div className=" wrapper relative">
      <div className="flex justify-between items-center  pt-10 ">
        <Link href={"/"} className="">
          <Image
            src={logo}
            width={109}
            height={85}
            className="w-8 h-6 sm:w-[109px] sm:h-[85px]"
            alt="Image logo"
          />
        </Link>
        <div className="flex items-center gap-28">
          <ul className="py-6 hidden md:flex gap-[46px] ">
            {NavLinks.map((link) => {
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    passHref
                    className="text-lg bg-transparent text-white "
                  >
                    <div
                      className={
                        pathname == link.path
                          ? "text-[#F60119]  drop-shadow-lg shadow-red-600"
                          : ""
                      }
                    >
                      {link.title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <button className="py-2 text-[20px] px-9 rounded-xl bg-white hidden md:flex">
            Login
          </button> */}
        </div>

        <div className="items-center gap-4 flex md:hidden ">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="flex "
            ref={ref}
          >
            <div className="text-white cursor-context-menu  ">
              {" "}
              <MenuOutlined />
            </div>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="absolute bg-black right-2 sm:top-24 z-50  md:hidden rounded-2xl w-[151px] h-[226px] ">
          <ul className="flex flex-col gap-2 px-6 py-4 ">
            {NavLinks.map((link) => {
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    passHref
                    className="text-center  bg-transparent text-white "
                  >
                    <div
                      className={
                        pathname == link.path
                          ? "text-[#F60119] drop-shadow-xl shadow-red-600"
                          : ""
                      }
                    >
                      {link.title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
