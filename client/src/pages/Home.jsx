import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className=" px-5">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
