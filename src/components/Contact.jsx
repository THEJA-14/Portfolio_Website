import React from "react";
import Resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#354259] flex flex-col justify-center items-center p-4 text-gray-300"
    >
      <form
        method="POST"
        action="https://formsubmit.co/ravithejaravi14@gmail.com"
        className=" flex flex-col max-w-[600px] w-full"
      >
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#B2A4FF]">
            Contact
          </p>
          <p className=" text-gray-300 py-4">
             Feel free to drop a message — I’ll get back to you soon.
          </p>
        </div>
        <input
          className="bg-[#D2DAFF] p-2 text-[#16213E] border-2 border-[#16213E]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#D2DAFF] p-2 my-4 text-[#16213E] border-2 border-[#16213E]"
          type="text"
          placeholder="Email"
          name="name"
        />
        <textarea
          className="bg-[#D2DAFF] p-2 text-[#16213E] border-2 border-[#16213E]"
          name="Messsage"
          id=""
          cols="30"
          rows="10"
          placeholder="Message For Me"
        ></textarea>
        <button className=" text-white border-2 rounded-md hover:bg-[#B2A4FF] hover:text-white px-4 my-8 mx-auto flex items-center duration-300 ">
          Let's Connect
        </button>
      </form>
      <div className=" py-3 flex flex-col items-center">
        <p  className="text-4xl font-bold border-b-4 border-[#B2A4FF]">Get Resume</p>
       <a href={Resume}  download={Resume}><button className=" my-4 px-2 text-white border-2 rounded-md hover:bg-[#B2A4FF] duration-300">Download</button></a>
      </div>
    </div>
  );
};

export default Contact;
