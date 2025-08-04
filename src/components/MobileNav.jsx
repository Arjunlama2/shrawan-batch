import React from "react";

function MobileNav({setIsMobile}) {
  return (
    <div className="md:hidden fixed top-12   bg-black/70 w-full h-[100vh] " onClick={()=>setIsMobile(false)}>
      <div className="absolute right-0 flex flex-col gap-5 items-center w-1/2 h-full bg-red-600 text-white   " onClick={(e)=>e.stopPropagation()}>
        <nav className=" cursor-pointer list-none flex flex-col gap-5">
          <li className="">About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </nav>
        <div className="flex flex-col gap-5">
          <button className="font-[500]   rounded-2xl border-2 border-white px-10  py-2 hover:text-[#F53855] hover:border-2 hover:border-[#F53855]">
            Sign In{" "}
          </button>
          <button className="font-[500]   rounded-2xl border-2 border-white px-10  py-2 hover:text-[#F53855] hover:border-2 hover:border-[#F53855]">
            Sign Up
          </button>
        </div>  
      </div>
    </div>
  );
}

export default MobileNav;
