import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Make sure it's installed
import { startTransition } from "react";
import { Strikethrough } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // scroll up
      } else {
        setShowNavbar(false); // scroll down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#efefefef3] backdrop-blur-md shadow-sm transition-transform duration-600 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto pl-12 pr-6 py-7 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="hover:text-gray-300 transition-colors">
          <div className="text-xl font-normal font-mono tracking-tight">
            Soni.G
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:block space-x-8 text-sm font-medium text-[#584391]">
          <a href="/resume" className="hover:text-gray-500 transition-colors ">
            Resume
          </a>
          <a
            href="/AboutSection"
            className="hover:text-gray-500 transition-colors"
          >
            About me
          </a>

          <a href="https://calendly.com/imksonig/30min">
            <button className="bg-white text-gray-900 border text-sm font-light px-6 py-2 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
              Book a Meet
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="text-center bg-gray-200 px-6 pb-4 md:hidden">
          <a
            href="/resume"
            className="block py-2 text-xl font-medium text-[#584391] hover:text-black"
          >
            Resume
          </a>
          <a
            href="/AboutSection"
            className="block py-2 text-xl font-medium text-[#584391] hover:text-black"
          >
            About me
          </a>
          <a href="https://calendly.com/imksonig/30min">
            <button className="mt-4 w-full bg-white text-gray-800 text-xl font-medium px-6 py-2 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300">
              Book a Meet
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
