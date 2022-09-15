import React from "react";
import "../css/MainPage.css";
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
    </div>
  );
};

export default MainPage;
