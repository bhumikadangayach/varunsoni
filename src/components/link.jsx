import React from "react";

const HeroSplit = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div className="w-1/2 bg-[#ececec] flex flex-col justify-center px-16">
        <h1 className="text-5xl font-light text-gray-800">NukeLancerS</h1>
        <p className="mt-4 text-xl text-gray-600">
          Web2/3 Creative Design/Production Studio
        </p>
        <a
          href="#"
          className="mt-6 flex items-center text-[#584391] text-sm font-medium hover:text-gray-500 transition-colors"
        >
          Know More
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img
          src="https://framerusercontent.com/images/x4HAbIqMESoV1VRAKMP2sIN7o.png"
          alt="Background Visual"
          className="object-cover w-full h-full hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
};

export default HeroSplit;
