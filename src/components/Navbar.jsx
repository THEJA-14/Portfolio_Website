import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = ()=> setNav(!nav)
  return (
    <div className=" fixed w-full h-20 flex justify-between items-center p-4 bg-[#354259] text-zinc-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "80px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
        <Link to="main" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/> }
      </div>

      {/* mobile menu */}
      <div className={!nav ? 'hidden': 'absolute top-0 left-0 h-screen w-full bg-[#354259] flex flex-col justify-center items-center duration-300'} >
        <ul>
          <li className="py-6 text-4xl"> <Link onClick={handleClick} to="main" smooth={true} duration={500}>
          Home
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>
      </div>

      {/* Social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
       <ul>
        <li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
        <a className="flex justify-between items-center w-full text-gray-300"
         href="https://www.linkedin.com/in/ravitheja-k-l-649150229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          Linkedin <FaLinkedin size={30}/>
        </a>
        </li>
        <li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#51557E]">
        <a className="flex justify-between items-center w-full text-gray-300"
         href="https://github.com/THEJA-14">
          GitHub <FaGithub size={30}/>
        </a>
        </li>
        <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#809A6F]">
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ravithejaravi746@gmail.com&su=Contact%20via%20Portfolio&body=Hi%20Ravitheja,"
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-between items-center w-full text-gray-300"
>
  Email <HiOutlineMail size={30} />
</a>

</li>
  <li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#8a3ab9]">
    <a className="flex justify-between items-center w-full text-gray-300"
        href="https://www.instagram.com/theja_14/profilecard/?igsh=Y3N2cmJsMGluaDJz">
        Instagram <FaInstagram size={30}/>
    </a>
  </li>
</ul>
</div>
</div>
  );
};

export default Navbar;
