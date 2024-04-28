import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import IMAGES from "@/images/Images";

const Projects = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card>
            <img
              alt="Project 1"
              className="w-full h-auto rounded-t-lg"
              height="200"
              src={IMAGES.Placeholder}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">
                A brief description of Project 1.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>React</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Node.js</Badge>
              </div>
              <div className="flex gap-2">
                <Link
                  className="bg-[#FFDD00] text-black hover:bg-[#FCCB00] px-4 py-2 rounded-md"
                  href="#"
                >
                  Live Demo
                </Link>
                <Link
                  className="border border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 px-4 py-2 rounded-md"
                  href="#"
                >
                  GitHub
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Project 2"
              className="w-full h-auto rounded-t-lg"
              height="200"
              src={IMAGES.Placeholder}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">
                A brief description of Project 2.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Vue.js</Badge>
                <Badge>Sass</Badge>
                <Badge>Express</Badge>
              </div>
              <div className="flex gap-2">
                <Link
                  className="bg-[#FFDD00] text-black hover:bg-[#FCCB00] px-4 py-2 rounded-md"
                  href="#"
                >
                  Live Demo
                </Link>
                <Link
                  className="border border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 px-4 py-2 rounded-md"
                  href="#"
                >
                  GitHub
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Project 3"
              className="w-full h-auto rounded-t-lg"
              height="200"
              src={IMAGES.Placeholder}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-600 mb-4">
                A brief description of Project 3.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Angular</Badge>
                <Badge>Material UI</Badge>
                <Badge>Firebase</Badge>
              </div>
              <div className="flex gap-2">
                <Link
                  className="bg-[#FFDD00] text-black hover:bg-[#FCCB00] px-4 py-2 rounded-md"
                  href="#"
                >
                  Live Demo
                </Link>
                <Link
                  className="border border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 px-4 py-2 rounded-md"
                  href="#"
                >
                  GitHub
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
