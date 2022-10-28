import React, { useEffect } from "react";
import "../css/About.css";
import MyPhoto from "./MyPhoto";
import ProgLags from "../files/icons/ProgLangs";
import KacperLeszczynskiCV from "../files/KacperLeszczynskiCV.pdf";
import {
  DEEP_PURPLE,
  DARK_GREEN,
  ORANGE,
  BACKGROUND_COLOR,
} from "../Constants";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });

  useEffect(() => {
    console.log("1");

    if (inView) {
      console.log("2");
      const element = entry?.target as HTMLElement;
      const triangle = element.children[0] as HTMLElement;
      const image = element.children[1] as HTMLElement;
      triangle.style.transform = "matrix(1,0,0,1,0,0)";
      image.style.transform = "matrix(1,0,0,1,0,0)";
      return;
    }

    if (entry) {
      if (entry?.target.getBoundingClientRect().top > 0) {
        const element = entry?.target as HTMLElement;
        const triangle = element.children[0] as HTMLElement;
        const image = element.children[1] as HTMLElement;
        triangle.style.transform = "matrix(0.01,0,0,0.01,300,90)";
        image.style.transform = "matrix(0.0001,0,0,0.0001,300,440)";
      }
    }
  }, [inView]);

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
        <div className="about-image">
          <svg
            className="main-svg-about"
            ref={ref}
            width="100%"
            viewBox="0 0 600 600"
          >
            <path
              d="M100 446 L500 446 L300 100 Z"
              fill="none"
              stroke={ORANGE}
              strokeWidth={12}
              className="triangle-path"
            />
            <MyPhoto />
          </svg>
          <div className="programm-div">
            <ProgLags />
          </div>
        </div>
      </div>
      <h1 className="about-tags">{"</about>"}</h1>
    </div>
  );
};

export default About;
