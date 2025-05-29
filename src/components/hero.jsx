import { Video } from "lucide-react";
import React from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Moving from "./moving";
const IntroSection = () => {
  return (
    <section className="bg-[#DEDEDE] flex flex-col text-left px-24 py-40 ">
      {/* Profile Photo */}
      <img
        src="https://framerusercontent.com/images/ychMFZwMy62g6MVR6b8IgNoT2aw.png?scale-down-to=1024" // Replace with your image
        alt="Varun Soni \"
        className="w-24 h-24 rounded-full object-cover mb-6"
      />

      {/* Main Heading */}
      <h1 className="text-2xl md:text-6xl  leading-snug">
        I'm Varun Soni, The{" "}
        <span className="italic font-normal">Tolerable</span> UI/UX Designer
        (from India
        <span className="text-sm ml-1 font-normal">
          cuz no one sponor me a international trip
        </span>
        )
      </h1>

      {/* Description */}
      <p className="max-w-3xl mt-6 text-gray-700 text-lg md:text-xl">
        I use my <em>limited</em> knowledge of user psychology and aesthetics to
        create <em>barely</em> functional, <em>somewhat</em> visually appealing
        UI/UX Designs and Cinematic Videos. My goal is to make your user
        experience as <em>tolerable</em> as possible.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/sonigvarun/"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/soni_g_varun/"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/soni_g_varun"
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition"
        >
          <FaXTwitter />
        </a>
      </div>
      <Moving />
      <h2 className="text-3xl md:text-4xl font-semibold text-center mt-16 mb-10 text-gray-800">
        What is NukeLancerS?
      </h2>

      {/* Visual Underneath */}
      <div className="max-w-5xl mx-auto">
        <Video
          src="https://youtu.be/gjmxnT0_4pc"
          alt="NukeLancerS Visual"
          className="rounded-xl shadow-xl w-full"
        />
      </div>
    </section>
  );
};

export default IntroSection;
