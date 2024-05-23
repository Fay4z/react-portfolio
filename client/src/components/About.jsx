import React from "react";
import { Button } from "./ui/button";
import IMAGES from "@/images/Images";
import { Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div>
      <section name="about" className=" py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <img
                alt="About Me"
                className="w-full h-auto rounded-lg shadow-lg"
                height="200"
                src={IMAGES.orangeLake}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div className="px-4 md:px-0">
              <h2 className="text-3xl sm:text-4xl mb-4 font-bold relative inline-block">
                About Me
                <span className="block w-full h-2 bg-orange-500 absolute -bottom-2 left-0 mt-1"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a versatile and driven professional seeking new
                opportunities to contribute my expertise and make a positive
                difference. I look forward to embracing fresh challenges and
                collaborating with like-minded individuals in a stimulating
                environment that values creativity and continuous growth I have
                a diverse set of skills and experiences that I bring to every
                project. I am passionate about creating innovative and
                user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                In addition to my technical expertise, I am also committed to
                making a positive impact on the world. I believe that technology
                can be a powerful tool for social good, and I am always looking
                for ways to use my skills to benefit the community.
              </p>
              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a className="text-gray-600 hover:underline" href="#">
                      fayazjr212@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-orange-500" />
                    <div>
                      <h3 className="text-lg font-medium">Phone</h3>
                      <a className="text-gray-600 hover:underline" href="#">
                        +91 9791803884
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
