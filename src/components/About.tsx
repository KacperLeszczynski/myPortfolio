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
            As a developer, I try to expand my knowledge in many technologies. I am currently studying and during my free time I am constantly increasing my skills in web-development.
          </h1>
          <br />
          <h2>
            I am familiar with HTML, CSS and Javascript. I work mainly in React.
          </h2>
          <br />
          <h2>
            The most essential thing for me is self-development on daily basis. When it comes to my interests I really am into books.  I also attend gym few times a week and play basketball. I am deeply involved in wide range of activities in the university life as: conferences, recruitments fairs and additional IT-related events.
          </h2>
          <br />
          <h2>
            I want to start my career as developer, so I am looking for a job in IT industry. It has always been my main interest, so I am motivated to work.
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
