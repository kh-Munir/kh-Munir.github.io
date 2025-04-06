import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import IconImg from "../../../assets/Image/ICON-BLUE.png";

const Experience = () => {
  return (
    <div id="Experience" className="px-4 py-10 sm:px-6 md:px-10 lg:px-24">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#4B164C] font-bold mb-10 text-center md:text-left">
        Experience
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        
        {/* Skill Icons */}
        <div className="flex flex-wrap justify-center gap-6 w-full lg:w-1/2">
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>

        {/* Experience Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950 bg-opacity-40 p-6 rounded-lg max-w-md w-full">
            <img src={IconImg} alt="Company Icon" className="w-20 h-20 object-contain" />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-lg font-semibold leading-snug">
                Frontend Developer,{" "}
                <a
                  href="https://vintsolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-300 hover:text-blue-500"
                >
                  Vint Solution
                </a>
              </h2>
              <p className="text-sm mt-1 font-light">
                September 2023 - September 2024
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
