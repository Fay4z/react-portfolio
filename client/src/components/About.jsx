import React from "react";
import { Button } from "./ui/button";
import IMAGES from "@/images/Images";

const About = () => {
  return (
    <div>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <img
                alt="About Me"
                className="w-full h-auto rounded-lg shadow-lg"
                height="200"
                src={IMAGES.Placeholder}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div className="px-4 md:px-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a Freelance Software Engineer, I have a diverse set of skills
                and experiences that I bring to every project. I am passionate
                about creating innovative and user-friendly solutions that solve
                real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                In addition to my technical expertise, I am also committed to
                making a positive impact on the world. I believe that technology
                can be a powerful tool for social good, and I am always looking
                for ways to use my skills to benefit the community.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-[#FFDD00] text-black hover:bg-[#FCCB00]">
                  Learn More
                </Button>
                <Button
                  className="border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700"
                  variant="outline"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
