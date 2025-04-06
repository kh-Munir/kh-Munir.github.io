import React from 'react';
import AboutImg from "../../../assets/Image/Img.jpeg";

const About = () => {
  return (
    <div id="About" className="bg-[#4C9F70] text-white overflow-hidden shadow-xl py-12 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          About
        </h2>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Image Section */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              className="h-40 sm:h-60 lg:h-80 w-auto rounded-full object-cover"
              src={AboutImg}
              alt="About"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-md sm:text-lg font-medium text-[#EFF3EA] leading-relaxed">
              I am a Computer Science graduate from Bangladesh and now live in Canada.
              I was a Frontend Developer at an agency for 1 year and worked on various
              projects with them. Currently, I am enrolled in a merit-based Data Analysis
              course in Canada and am looking for an opportunity to grow my career as a Data Analyst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
