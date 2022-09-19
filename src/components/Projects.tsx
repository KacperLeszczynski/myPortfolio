import React from "react";
import {
  DEEP_PURPLE,
  DARK_GREEN,
  ORANGE,
  BACKGROUND_COLOR,
} from "../Constants";
import SpecificProject from "./SpecificProject";

import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container-part" id="project">
      <h1 className="projects-tags">{"<projects>"}</h1>
      <div className="projects-container">
        <SpecificProject
          header="Some Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolor dignissimo excepturi reprehenderit repudiandae?"
          buttonText="Visit Website"
        />
        <SpecificProject
          header="Some Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolor dignissimos ipsam eveniet voluptatem qui
              quaerat, natus vero porro nam ullam voluptas fugiat iusto
              asperiores ducimus quisquam excepturi reprehenderit repudiandae?"
          buttonText="Visit Website"
        />
        <SpecificProject
          header="Some Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolor dignissimos ipsam eveniet voluptatem qui
              quaerat, natus vero porro nam ullam voluptas fugiat iusto
              asperiores ducimus quisquam excepturi reprehenderit repudiandae?"
          buttonText="Visit Website"
        />
      </div>
      <h1 className="projects-tags">{"</projects>"}</h1>
    </div>
  );
};

export default Projects;
