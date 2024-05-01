import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 pb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                height="40"
                width="40"
                alt="html5 logo"
              />
              <span className="text-gray-600 font-medium">HTML5</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                height="40"
                width="40"
                alt="css3 logo"
              />
              <span className="text-gray-600 font-medium">CSS3</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="40"
                width="40"
                alt="javascript logo"
              />
              <span className="text-gray-600 font-medium">JS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                height="40"
                width="40"
                alt="tailwindcss logo"
              />
              <span className="text-gray-600 font-medium">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height="40"
                width="40"
                alt="react logo"
              />
              <span className="text-gray-600 font-medium">React JS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                height="40"
                width="40"
                alt="nodejs logo"
              />
              <span className="text-gray-600 font-medium">Node JS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                height="40"
                width="40"
                alt="expressjs logo"
              />

              <span className="text-gray-600 font-medium">Express JS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                height="40"
                width="40"
                alt="mongodb logo"
              />
              <span className="text-gray-600 font-medium">Mongo DB</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                height="40"
                width="40"
                alt="mysql logo"
              />
              <span className="text-gray-600 font-medium">Mysql</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                height="40"
                width="40"
                alt="c logo"
              />
              <span className="text-gray-600 font-medium">C</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                height="40"
                width="40"
                alt="firebase logo"
              />
              <span className="text-gray-600 font-medium">Firebase</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://skillicons.dev/icons?i=github"
                height="40"
                width="40"
                alt="github logo"
              />
              <span className="text-gray-600 font-medium">Github</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                height="40"
                width="40"
                alt="git logo"
              />
              <span className="text-gray-600 font-medium">Git</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function AngryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h0" />
      <path d="M15 10h0" />
    </svg>
  );
}

function BeanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function PiIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  );
}

function ShellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
    </svg>
  );
}

function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

export default Skills;
