import React from "react";
import tabIMG from "../assets/tab.png";
import clockIMG from "../assets/clock.png";
import heartIMG from "../assets/Heart.png";
import spotifyIMG from "../assets/spotify.png";
import chracterIMG from "../assets/chracter.png";
import blogIMG from "../assets/blog.png";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#354259] text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#B2A4FF]">
            Work
          </p>
          <p className=" py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${tabIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Tab section
              </span>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${clockIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Digital clock
              </span>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${heartIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Heart trail animation
              </span>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${spotifyIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Spotify page
              </span>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${chracterIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Real time character count
              </span>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${blogIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Blog site
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
