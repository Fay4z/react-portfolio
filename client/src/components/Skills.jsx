import React from "react";
import { skillsData } from "@/Data";

const Skills = () => {
  return (
    <section name="skills" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl mb-12 font-bold relative inline-block">
          Skills
          <span className="block w-full h-2 bg-orange-500 absolute -bottom-2 left-0 mt-1"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                height="40"
                width="40"
              />
              <span className="text-gray-600 font-medium mt-2">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
