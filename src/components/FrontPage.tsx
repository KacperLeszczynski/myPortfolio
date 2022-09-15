import React, { useEffect, useRef } from "react";
import LoadingAnimation from "./LoadingAnimation";
import Scene from "./RotatingCube";
import RotatingCube from "./RotatingCube";
import {
  DEEP_PURPLE,
  DARK_GREEN,
  ORANGE,
  BACKGROUND_COLOR,
} from "../Constants";

const FrontPage = () => {
  return (
    <div className="front-page-container" id="home">
      <h1 className="front-page-text">
        Hi! My name is Kacper. I am web developer, who wants to develop his
        skills to maximum level
      </h1>
      <div className="first-shape">
        <Scene
          size={[2, 2, 2]}
          color={DARK_GREEN}
          xMove={0.003}
          yMove={0.005}
        />
      </div>
      <div className="second-shape">
        <Scene
          size={[1.5, 1.5, 1.5]}
          color={ORANGE}
          xMove={0.003}
          yMove={0.002}
        />
      </div>
      <div className="third-shape">
        <Scene
          size={[0.8, 0.8, 0.8]}
          color={DEEP_PURPLE}
          xMove={0.006}
          yMove={0.004}
        />
      </div>
    </div>
  );
};

export default FrontPage;
