import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import { RxCross2 } from "react-icons/rx";





function Header() {
  const [isMobile, setIsMobile]=useState(false)
  return (
    <>
      <header className="flex justify-between mx-6 items-center h-16 ">
        <img src="/logo.png" alt="" className="" />
        <nav className="hidden md:flex list-none gap-[32px] cursor-pointer">
          <li className="">About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </nav>
        <div className="hidden md:flex ">
          <button className="font-[500]   rounded-2xl border-2 border-white px-10  py-2 hover:text-[#F53855] hover:border-2 hover:border-[#F53855]">
            Sign In{" "}
          </button>
          <button className="font-[500]   rounded-2xl border-2 border-white px-10  py-2 hover:text-[#F53855] hover:border-2 hover:border-[#F53855]">
            Sign Up
          </button>
        </div>
        {
          isMobile?<RxCross2 className="md:hidden text-3xl"   onClick={()=>setIsMobile(false)} />:  <GiHamburgerMenu className="md:hidden text-3xl"  onClick={()=>setIsMobile(true)}/>
        }
      

        {isMobile && <MobileNav setIsMobile={setIsMobile} />}
      </header>
    </>
  );
}

export default Header;
