import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen text-gray-300 bg-[#354259]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-[#B2A4FF]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ravitheja K L, a final year Computer Science Engineering student at Sahyadri College of Engineering and Management, Mangalore. I’m passionate about crafting user-friendly digital solutions that solve real-world problems.
With a strong foundation in full stack web development, I love transforming ideas into scalable and maintainable applications.
</p>
          </div>
          <div className=" sm:text-left text-4xl font-bold">
            <p>I specialize in full stack development with a focus on React.js, Tailwind CSS, Node.js, and PostgreSQL. I use Git, Postman, and Figma to streamline my workflow and follow clean code practices. I'm a quick learner who enjoys building efficient, user-focused solutions and working collaboratively in tech-driven environments.
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
