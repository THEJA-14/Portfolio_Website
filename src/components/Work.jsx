import React from "react";
import weather from "../assets/weatherApp.jpg";
import numPlate from "../assets/numplate.png";


const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#354259] text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#B2A4FF]">
            Work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                WeatherApp
              </span>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${numPlate})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Automatic Numberplate Detection
              </span>
              
            </div>
          </div>   
            </div>
          </div>
        </div>
  );
};

export default Work;
