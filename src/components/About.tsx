import React from "react";
import "../css/About.css";
import KacperLeszczynskiCV from "../files/KacperLeszczynskiCV.pdf";
import { saveAs } from "file-saver";

const About = () => {
  return (
    <div className="about-container-part" id="about">
      <h1 className="about-tags">{"<about>"}</h1>
      <div className="about-container">
        <div className="about-text">
          <h1>
            I am developer, who tries to expand his knowledge in many
            technologies. I am currently studying, but in free time i am
            learning web-development.
          </h1>
          <br />
          <h2>
            I am familiar with HTML, CSS and Javascript. I work mainly in React.
          </h2>
          <br />
          <h2>
            The most important to me is to develop myself everyday in every
            aspect of life. I am into books. I go to gym few times a week and i
            play basketball. I attend conferences, recruitment fairs and
            additional IT-related events at my university.
          </h2>
          <br />
          <h2>
            I am looking for my first developer job and i am really motivated to
            work for it
          </h2>
          <br />
          <a
            download="KacperLeszczynskiCV"
            href={KacperLeszczynskiCV}
            className="download-pdf-button"
          >
            CV (PDF)
          </a>
        </div>
        <div className="about-image"></div>
      </div>
      <h1 className="about-tags">{"</about>"}</h1>
    </div>
  );
};

export default About;
