import React from "react";
import avatarImg from "../../../assets/Image/undraw_firmware_3fxd.png";
import TextChange from "../../../TextChanger";

const Home = () => {
  return (
    <div className="text-[#4B164C] flex flex-col-reverse lg:flex-row w-full items-center lg:items-start p-6 sm:p-10 lg:p-20 gap-10">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug tracking-tight">
          <TextChange />
        </h1>
        <p className="text-sm sm:text-base lg:text-2xl mt-4 lg:mt-6 tracking-tight">
          A former frontend developer is switching to data analysis, with a focus on statistical modelling, SQL, 
          and data visualisation.
        </p>
      </div>
      
      {/* Right Section (Image) */}
      <div className="w-full flex justify-center lg:justify-end">
        <img 
          className="h-40 sm:h-60 lg:h-80 w-auto rounded-full object-cover"
          src={avatarImg} 
          alt="Firmware illustration" 
        />
      </div>
      
    </div>
  );
};

export default Home;
