import Image from "next/image";
import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="md:mt-10 w-screen bg-white py-4 px-10 flex items-center justify-between">
      <div className="w-32">
        <Image src={require("../assets/img/logo.png")} alt="logo" />
      </div>
      <div className="hidden lg:flex space-x-7">
        <p className="navBtn text-red-500">Home</p>
        <p className="navBtn">News</p>
        <p className="navBtn">About Us</p>
        <p className="navBtn">Contact</p>
        <MagnifyingGlassIcon className="navBtn w-6 h-6" />
      </div>
      <div className="lg:hidden">
        <Bars3Icon className="text-black w-6 h-6" />
      </div>
    </div>
  );
};

export default Header;
