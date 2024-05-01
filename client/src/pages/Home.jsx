import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <div className=" px-5">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
