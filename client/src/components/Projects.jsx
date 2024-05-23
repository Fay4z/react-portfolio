import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import IMAGES from "@/images/Images";

const Projects = () => {
  return (
    <section name="projects" className=" py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl mb-8 font-bold relative inline-block">
          Projects
          <span className="block w-full h-2 bg-orange-500 absolute -bottom-2 left-0 mt-1"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card>
            <img
              alt="Task Manager"
              className="w-full h-auto rounded-t-lg"
              height="200"
              src={IMAGES.taskmanager}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4 py-4 border-t-2 border-gray-200">
              <h3 className="text-xl font-bold mb-2">Task Manager</h3>
              <p className="text-gray-600 mb-4">
                The Task Manager project aims to streamline productivity by
                efficiently organizing and tracking tasks, providing users with
                a centralized platform for managing their workflow and
                priorities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>React</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Node JS</Badge>
                <Badge>Express JS</Badge>
                <Badge>Mongo DB</Badge>
              </div>
              <div className="flex gap-2">
                <Link
                  className="bg-[#FFDD00] text-black hover:bg-[#FCCB00] px-4 py-2 rounded-md"
                  to="https://taskpro-manager.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </Link>
                <Link
                  className="border border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 px-4 py-2 rounded-md"
                  to="https://github.com/Fay4z/TaskPro-Manager"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="QR Generator"
              className="w-full h-auto rounded-t-lg"
              height="200"
              src={IMAGES.qrGenerator}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4  border-t-2 border-gray-200">
              <h3 className="text-xl font-bold mb-2">QR Generator</h3>
              <p className="text-gray-600 mb-4">
                The QR Generator project offers a simple yet powerful tool to
                create customized QR codes, enabling seamless information
                sharing and digital interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Ejs</Badge>
                <Badge>Node JS</Badge>
                <Badge>Express JS</Badge>
                <Badge>Mongo DB</Badge>
              </div>
              <div className="flex gap-2">
                {/* <Link
                  className="bg-[#FFDD00] text-black hover:bg-[#FCCB00] px-4 py-2 rounded-md"
                  to="#"
                >
                  Live Demo
                </Link> */}
                <Link
                  className="border border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 px-4 py-2 rounded-md"
                  to="https://github.com/Fay4z/QR-generator"
                  target="_blank"
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
              src={IMAGES.Portfolio}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <CardContent className="p-4 border-t-2 border-gray-200">
              <h3 className="text-xl font-bold mb-2">Protfolio</h3>
              <p className="text-gray-600 mb-4">
                The Portfolio project serves as a digital showcase, allowing me
                to exhibit my skills, achievements, and projects to potential
                employers or clients
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Vite</Badge>
                <Badge>React JS</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
              <div className="flex gap-2">
                <Link
                  className="bg-[#FFDD00] text-black hover:bg-[#FCCB00] px-4 py-2 rounded-md"
                  to="#"
                  target="_blank"
                >
                  Live Demo
                </Link>
                <Link
                  className="border border-gray-600 text-gray-600 hover:border-gray-700 hover:text-gray-700 px-4 py-2 rounded-md"
                  to="https://github.com/Fay4z/react-portfolio"
                  target="_blank"
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
