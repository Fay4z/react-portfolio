import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <div className=" px-5">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className=" absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:34px_24px]">
          <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[410px] rounded-full bg-[#ffa600] opacity-10 blur-[100px]"></div>
        </div>
      </div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
