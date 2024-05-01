import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">Digisailor</h3>
              <p className="text-gray-600 mb-2 dark:text-gray-400">
                React Developer Intern
              </p>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Jan 2020 - Present
              </p>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Collaborated with cross-functional teams to deliver and
                  develop high-quality web application solutions using React.
                </p>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Got exposure into{" "}
                  <span className="font-bold">
                    `SPA(Single Page Application)`
                  </span>{" "}
                  by learning React concepts like hooks, context, and State
                  Management etc..
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">EY-AICTE</h3>
              <p className="text-gray-600 mb-2 dark:text-gray-400">
                Full Stack Developer Intern
              </p>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Mar 2024 - Apr 2024
              </p>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Throughout the internship, I embraced challenges head-on,
                  troubleshooting bugs, and optimizing code performance
                </p>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                  Working with Python frameworks like Django and Flask, I gained
                  hands-on experience in backend development, crafting robust
                  APIs and database architectures.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">Stark Industries</h3>
              <p className="text-gray-600 mb-2 dark:text-gray-400">
                Embedded Systems Engineer
              </p>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Sep 2017 - Dec 2018
              </p>
              <p className="text-gray-600 leading-relaxed dark:text-gray-400">
                Designed and developed embedded systems for industrial
                automation using Arduino and Raspberry Pi. Collaborated with
                cross-functional teams to integrate hardware and software
                components.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
