import React from "react";
import "../css/MainPage.css";
import About from "./About";
import BeforeAboutQuote from "./BeforeAboutQuote";
import BeforeContactQuote from "./BeforeContactQuote";
import Contact from "./Contact";
import FrontPage from "./FrontPage";
import LoadingAnimation from "./LoadingAnimation";
import Projects from "./Projects";
import RotatingCube from "./RotatingCube";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <FrontPage />
      <LoadingAnimation />
      <Projects />
      <BeforeAboutQuote />
      <About />
      <BeforeContactQuote />
      <Contact />
    </div>
  );
};

export default MainPage;
