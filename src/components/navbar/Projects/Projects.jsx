import React from "react";
import ProjectCard from "./ProjectCard";
import BayatImg from "../../../assets/Image/bayt-architects.webp";

const Projects = () => {
  return (
    <div id="Projects" className="px-4 py-10 sm:px-6 md:px-10 lg:px-24 text-[#4B164C">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
        Projects
      </h1>

      {/* Project Cards Container */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-center sm:items-stretch">
        <ProjectCard
          title="BAYT Architects"
          main="A project centered on developing an online presence for an architecture firm."
          imgSrc={BayatImg}
          link="https://baytarchitects.com/"
        />

        <ProjectCard
          title="YouTube Clone"
          main="A YouTube clone built using Next.js and styled with modern UI libraries."
        />
      </div>
    </div>
  );
};

export default Projects;
