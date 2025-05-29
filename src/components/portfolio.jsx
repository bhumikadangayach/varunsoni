import React from "react";

const PortfolioSection = () => {
  return (
    <div className="w-full bg-[#f7f7f7] px-6 md:px-40 py-16">
      <div className="text-black text-left space-y-14">
        {/* Experience Section */}
        <div className="px-4">
          <h2 className="text-4xl text-[#2a2a28]">Experience</h2>
          <p className="mt-4 font-semibold text-lg text-[#444444]">
            Founder (NukeLancerS)
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-[#444444] text-lg">
            <li>Web2/3 Based Freelance Agency</li>
            <li>3.5+ Years</li>
          </ul>
        </div>

        {/* Invitation Section */}
        <div className="px-4">
          <p className="text-lg font-semibold text-[#444444]">
            Lets Get Over A Meet to discuss up my past projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className="px-4">
          <h2 className="text-4xl text-[#2a2a28]">Skills</h2>
          <ul className="list-disc list-inside mt-4 space-y-1 text-lg text-[#444444]">
            <li>Proficient in Figma, Framer, Dora.ai and Blender 3d.</li>
            <li>Strong understanding of user-centered design principles.</li>
            <li>
              Ability to conduct comprehensive user research and usability
              testing.
            </li>
            <li>Excellent problem-solving skills and attention to detail.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="px-4">
          <h2 className="text-4xl text-[#2a2a28]">Projects</h2>
          <ul className="list-disc list-inside mt-4 space-y-1 text-lg text-[#444444] font-bold">
            <li>Get Connected for detail Projects Case Studies.</li>
          </ul>
        </div>

        {/* Personal Qualities Section */}
        <div className="px-4">
          <h2 className="text-4xl text-[#2a2a28]">Personal qualities</h2>
          <ul className="list-disc text-[#444444] list-inside mt-4 space-y-1 text-lg">
            <li>
              Creative and innovative thinker with a keen eye for aesthetics.
            </li>
            <li>
              Strong communicator, capable of effectively articulating design
              concepts.
            </li>
            <li>Collaborative team player with a positive attitude.</li>
            <li>
              Passionate about staying current with technology and design
              trends.
            </li>
          </ul>
        </div>

        {/* Interests Section */}
        <div className="px-4">
          <h2 className="text-4xl text-[#2a2a28]">Interests</h2>
          <ul className="list-disc list-inside mt-4 space-y-1 text-lg text-[#444444]">
            <li>
              Staying abreast of the latest trends in technology and design.
            </li>
            <li>Reading, especially Phycology and design literature.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
