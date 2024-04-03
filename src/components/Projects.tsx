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
    <section className="projects-container-part" id="project">
      <h1 className="projects-tags">{"<projects>"}</h1>
      <div className="projects-container">
        <SpecificProject
          header="My Portfolio website"
          text="Responsive website that uses many SVGs, Greensock (GSAP), ScrollMagic, React three with many transitions and animations."
          buttonText="Visit Website"
          codeLink="https://github.com/HaZeL-spc/myPortfolio"
          projectLink="https://kacperleszczynski.pl/"
        />
        <SpecificProject
          header="Instrument App"
          text="TypeScript react project. Smooth website of brand called Instrument with intersection-observers and animations."
          buttonText="Visit Website"
          codeLink="https://github.com/HaZeL-spc/InstrumentApp"
          projectLink="https://kacperleszczynski.github.io/InstrumentApp/"
        />
        <SpecificProject
          header="Card Animation"
          text="React project which needed math to calculate position of cards to animate them correctly. To do it I used styled-components."
          buttonText="Visit Website"
          codeLink="https://github.com/HaZeL-spc/cardAnimation"
          projectLink="https://kacperleszczynski.github.io/cardAnimation/"
        />
        <SpecificProject
          header="Spotify Stats Curses"
          text="This project is based on Spotify API and Genius API. User logs his account onto the website and gets info about how many times their favourite artists cursed in their songs and few other stats about it."
          buttonText="Visit Website"
          codeLink="https://github.com/HaZeL-spc/SpotifyStatsCurses"
        />

        <SpecificProject
          header="Maps Project"
          text="Form app, where user writes start and finish point and gets road between them using Leaflet API. It gives more info about the road and you can save it in PDF using jspdf."
          buttonText="Visit Website"
          codeLink="https://github.com/HaZeL-spc/MapsProject"
          projectLink="https://kacperleszczynski.github.io/mapsProject/"
        />
        <SpecificProject
          header="Arsenal App"
          text="React and Django REST framework connected app. Django uses web-scraping to get data and to make API. React-side gets this API and displays information in good-looking format."
          buttonText="Visit Website"
          codeLink="https://github.com/HaZeL-spc/ArsenalApp"
        />
      </div>
      <h1 className="projects-tags">{"</projects>"}</h1>
    </section>
  );
};

export default Projects;
