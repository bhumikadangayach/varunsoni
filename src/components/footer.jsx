import React from "react";
import { Linkedin, Instagram, X } from "lucide-react";
import { Section } from "lucide-react";

const Footer = () => {
  const handleClick = () => {
    window.open(
      "https://x.com/NukelancerS/status/1853368973666255016",
      "_blank"
    );
  };

  return (
    <div className="bg-[#444444] text-white font-sans min-h-screen">
      {/* Top Section */}
      <div className="px-20 py-32">
        <h2 className="text-5xl font-semibold mb-4">
          Interested in connecting?
        </h2>
        <p className="text-lg mb-6">
          Let’s talk projects, collaborations, or anything design!
        </p>
        <a href="https://calendly.com/imksonig/30min">
          <button className="bg-[#2A2A2B] text-white px-10 py-3 rounded-md hover:bg-gray-100 text-black">
            Book a call
          </button>
        </a>
      </div>

      {/* Footer Bar */}
      <div className="bg-[#2A2A2B] text-gray-400 px-20 py-6 items-center">
        <div className="flex flex-col md:flex-row ">
          {/* Left - Name */}
          <div className="font-semibold pr-10 text-white mb-4 md:mb-0">
            Soni_G_Varun
          </div>

          {/* Center - Links */}
          <div className="flex gap-6 text-sm mb-4 md:mb-0">
            <a href="/resume" className="hover:text-white transition">
              Resume
            </a>
            <a href="/AboutSection" className="hover:text-white transition">
              About me
            </a>
          </div>

          {/* Right - Icons */}
          <div className="flex ml-auto h-10 w-auto gap-4 pc-5 gap-4 pb-20">
            {[
              <a href="https://www.linkedin.com/in/sonigvarun/">
                <Linkedin />
              </a>,
              <a href="https://www.instagram.com/soni_g_varun/">
                <Instagram />
              </a>,
              <a href="https://x.com/soni_g_varun">
                <X />
              </a>,
            ].map((Icon, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:scale-110 transition-transform"
              >
                {Icon}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-600 mx-6 py-8 pb-10 text-center text-sm">
          Copyright 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
