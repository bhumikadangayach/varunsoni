import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Customers from "./customers";
import Footer from "./footer";
import HeroSplit from "./link";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Customers />
      <HeroSplit />
      <Footer />
    </div>
  );
}

export default App;
