"use client";

import { useRouter } from "next/navigation";
import React from "react";
import logo from "../../../public/Link.svg";
import Image from "next/image";

const Header: React.FC = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/login");
  };
  const handleOnClick3 = () => {
    router.push("/signup");
  };


  const handleOnClick2 = () => {
    router.push("/");
  };

  return (
    <header className="fixed top-0 w-full bg-transparent flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 md:px-12 md:py-4 lg:px-24 lg:py-5">
      <div className="flex items-center gap-0">
        <Image
          onClick={handleOnClick2}
          src={logo}
          alt="Logo"
          className="cursor-pointer"
        />
      </div>
      <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <a
          href=""
          className="text-slate-500 font-inter text-sm sm:text-base md:text-lg font-medium leading-5 sm:leading-6 md:leading-7 text-left"
        >
          Refer & Earn
        </a>
        <a
          href="#resources"
          className="font-inter text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-5 sm:leading-6 md:leading-7 text-left"
        >
          Resources
        </a>
        <a
          href="#about-us"
          className="font-inter text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-5 sm:leading-6 md:leading-7 text-left"
        >
          About us
        </a>
        <button
          onClick={handleOnClick}
          className="bg-white text-black px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg sm:rounded-xl md:rounded-2xl"
        >
          Login
        </button>
        <button  onClick={handleOnClick3} className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg sm:rounded-xl md:rounded-2xl">
          Refer & Earn
        </button>
      </nav>
    </header>
  );
};

export default Header;
