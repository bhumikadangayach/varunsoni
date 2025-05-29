import React from "react";

const customers = [
  { src: "https://i.imgur.com/YOUR1.png", alt: "Unpaid Company" },
  { src: "https://i.imgur.com/YOUR2.png", alt: "5 Dollar Jobs" },
  { src: "https://i.imgur.com/YOUR3.png", alt: "Virtual Company" },
  { src: "https://i.imgur.com/YOUR4.png", alt: "2:47 Studio" },
  { src: "https://i.imgur.com/YOUR5.png", alt: "Hypermove" },
  { src: "https://i.imgur.com/YOUR6.png", alt: "Heystack" },
  { src: "https://i.imgur.com/YOUR7.png", alt: "Crown World" },
  { src: "https://i.imgur.com/YOUR8.png", alt: "BitcoinVerse" },
  { src: "https://i.imgur.com/YOUR9.png", alt: "Reacti.ai" },
  { src: "https://i.imgur.com/YOUR10.png", alt: "DZAP" },
  { src: "https://i.imgur.com/YOUR11.png", alt: "Grabz" },
];

function Customers() {
  return (
    <section className="bg-black text-white py-20 text-center">
      <h2 className="text-1xl md:text-2xl font-semibold text-blue-300 mb-10">
        The Customers Who Didn't Immediately Asked for a Refund
      </h2>

      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl mx-auto gap-6 px-4">
        {customers.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-12 md:h-16 max-w-[160px] object-contain"
          />
        ))}
        <p className="text-white mt-12 text-lg">and more</p>
      </div>

      {/* <p className="text-white mt-12 text-lg">and more</p> */}
    </section>
  );
}
export default Customers;
