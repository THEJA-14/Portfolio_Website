import React from "react";
import {  HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";



const Main = () => {
  return (
    <div name="main" className=" w-full h-screen bg-[#354259]">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-zinc-400">
        <p className=" text-[#B2A4FF]">Hi, Iam</p>
        <h1 className=" text-[#3AB0FF] font-bold text-4xl sm:text-7xl">RAVITHEJA K L</h1>
        <h4 className=" text-[#ABD9FF] font-bold text-4xl sm:text-7xl">Aspiring Full Stack Developer</h4>
        <p className="text-[#D9F8C4] py-4 mx-w-[700px]">
          Passionate about building impactful digital solutions with clean code and creative design. Eager to learn, build, and contribute to real-world tech.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
          <button className=" text-white group border-2 px-6 py-2 my-3 flex items-center hover:bg-[#B2A4FF] hover:border-[#B2A4FF] duration-300">
            Explore more
            <span>
            <HiArrowNarrowRight className=" group-hover:rotate-90 duration-300 ml-3" />
            </span>
            
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
