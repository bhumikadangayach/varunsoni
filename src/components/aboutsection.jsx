import React from "react";

export default function AboutSection() {
  return (
    <div>
      <section className="w-full px-20 bg-white md:px-20 pb-20 pt-36 text-3xl bg-white">
        <h2 className="text-3xl md:text-6xl text-black mb-16 text-center md:text-left">
          Who I am beyond Design
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image */}
          <img
            src="https://framerusercontent.com/images/ychMFZwMy62g6MVR6b8IgNoT2aw.png?scale-down-to=1024" // Replace with your actual image path
            alt="Gateway of India"
            className="w-full md:w-1/2 c shadow-md object-cover"
          />

          {/* Text Content */}
          <div className="md:w-1/2 text-gray-800 rounded-xl space-y-6 text-lg leading-relaxed">
            <h2 className="text-3xl font-medium text-black">
              More than a UX/UI designer, I’m a Web3 Enthusiast.
            </h2>
            <p>
              Every app is a canvas, and every interface, a journey. Everyday
              wonders like a perfect espresso or a new book inspire my
              creativity. For the past three years, I’ve immersed myself in Web3
              and aim to delve deeper into both Web3 and UI/UX design,
              continually learning and innovating.
            </p>
            <p>
              I’ve been immersed in Web3, and I’m eager to delve deeper into
              both Web3 and UI/UX design, constantly learning and innovating.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#efefef] text-black px-20 md:px-16 py-16 font-manrope">
        <div className="max-w-6xl mx-auto">
          {/* Section 1 */}
          <h2 className="text-5xl md:text-5xl  mb-6">
            My inspirations and interests
          </h2>
          <div className="md:flex md:gap-10 text-lg md:text-xl text-gray-800 leading-relaxed mb-20">
            <p className="md:w-1/2">
              Inspiration strikes me in the quiet moments — during solo travels,
              attending Web3 events, hackathons and much more.
            </p>
            <p className="md:w-1/2 mt-6 md:mt-0">
              Other than all, I am also an esoteric seeker who always wants to
              learn/experience about astrology, numbers, paranormal activities,
              etc.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-5xl md:text-5xl mb-6">Looking ahead</h2>
          <div className="md:flex md:gap-10 text-lg md:text-xl text-gray-800 leading-relaxed">
            <p className="md:w-1/2">
              As I immerse deeper into the world of UX/UI design, I’m
              particularly excited about the potential of integrating
              sustainable practices into digital design, thereby embedding
              purpose.
            </p>
            <p className="md:w-1/2 mt-6 md:mt-0">
              I dream of contributing to projects that not only look good but
              also do good. I’m also keen on exploring how AI can further
              personalize user experiences without losing the human touch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
