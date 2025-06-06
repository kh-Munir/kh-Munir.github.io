import React from "react";
import bannerImg from "../../../assets/Image/Banner.jpg";

const ProjectCard = ({ title, main, imgSrc, link }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl text-white">
      <img className="p-4" src={imgSrc || bannerImg} alt="" />

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>

      <p className="px-4 text-sm md:text-md leading-tight">{main}</p>

      <div className="p-2 md:p-4 flex gap-2 md:gap-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
          duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;