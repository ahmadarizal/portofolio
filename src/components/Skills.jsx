import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/next.js.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlap.png";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">Css</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={react} alt="REACT icon" />
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={nextjs} alt="NEXT icon" />
            <p className="my-4">Next.js</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={tailwind} alt="TAILWIND icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={github} alt="GITHUP icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={gitlab} alt="GITLAP icon" />
            <p className="my-4">Gitlab</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={git} alt="GIT icon" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
