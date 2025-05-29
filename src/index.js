import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app";
import App2 from "./components/app2";
import App3 from "./components/app3";

import { startTransition } from "react";

import AboutSection from "./components/aboutsection";
import ReactDOM from "react-dom";
import "../public/styles.css";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutsection" element={<App2 />} />
      <Route path="/Resume" element={<App3 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
