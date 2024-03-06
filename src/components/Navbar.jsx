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
        <img src={Logo} alt="logo image" style={{ width: "80px" }} />
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
         href="https://www.linkedin.com/login">
          Linkedin <FaLinkedin size={30}/>
        </a>
        </li>
        <li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#51557E]">
        <a className="flex justify-between items-center w-full text-gray-300"
         href="https://github.com/">
          GitHub <FaGithub size={30}/>
        </a>
        </li>
        <li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#809A6F]">
        <a className="flex justify-between items-center w-full text-gray-300"
         href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail/e-11-f9a3947f40b05141793839a2de7d-bb1b176139af2db6c6dcb52bb968a8a42b88e126&dsh=S1527355678:1709370799838553&flowEntry=SignUp&flowName=GlifWebSignIn&service=mail&theme=glif&TL=ADg0xR2uvSNzcgly3J5OLDW7_uTiqQFnZhcCgI1XVgBmroeYRWk1ch5N0wjcdVtB">
          Email <HiOutlineMail size={30}/>
        </a>
        </li>
        <li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#8a3ab9]">
        <a className="flex justify-between items-center w-full text-gray-300"
         href="https://www.instagram.com/?hl=en">
          Instagram <FaInstagram size={30}/>
        </a>
        </li>
       </ul>
      </div>
    </div>
  );
};

export default Navbar;
