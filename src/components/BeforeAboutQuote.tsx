import React, { useEffect, useRef, useState } from "react";
import {
  DEEP_PURPLE,
  DARK_GREEN,
  ORANGE,
  BACKGROUND_COLOR,
} from "../Constants";
import GeometryIcon from "../files/GeometryIcon";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { useInView } from "react-intersection-observer";
import Shape2d from "./Shape2d";

function makeBG(elem: SVGTextElement) {
  var svgns = "http://www.w3.org/2000/svg";
  var bounds = elem.getBBox();
  var bg = document.createElementNS(svgns, "rect");
  bg.setAttribute("x", bounds.x.toString());
  bg.setAttribute("y", bounds.y.toString());
  bg.setAttribute("width", bounds.width.toString());
  bg.setAttribute("height", bounds.height.toString());
  bg.setAttribute("fill", BACKGROUND_COLOR);

  if (elem.parentNode) elem.parentNode.insertBefore(bg, elem);
}

const BeforeAboutQuote = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  // const text1Ref = useRef<SVGTextElement | null>(null);
  // const text2Ref = useRef<SVGTextElement | null>(null);

  //makes bg to texts in svg
  useEffect(() => {
    if (inView) {
      var texts = document.querySelectorAll("text");
      for (var i = 0; i < texts.length; i++) {
        makeBG(texts[i]);
      }
    }
  }, [inView]);

  return (
    <Controller>
      {/* <Shape2d /> */}
      <Scene duration={window.innerHeight} triggerHook={1} offset={window.innerHeight/3}>
        {(progress: any) => (
          <section className="before-about-quote-div" ref={ref}>
            <GeometryIcon color={ORANGE} classname="right-icon-svg" progress={progress}/>
            <GeometryIcon color={ORANGE} classname="left-icon-svg" progress={progress}/>
            <svg
              className="main-svg"
              id="the-main-svg"
              width="100%"
              height="80%"
              viewBox="0 0 800 600"
            >
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ strokeDashoffset: 1300 }}
                  to={{ strokeDashoffset: 0 }}
                >
                  <path
                    d="M285 167.05 L200 20 L600 20 L400 366 Z"
                    fill="none"
                    stroke={ORANGE}
                    strokeWidth={17}
                    className="triangle-path"
                  />
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ transform: "translateX(-70px)" }}
                  to={{ transform: "translateX(0px)" }}
                >
                  <text ref={ref} x="400" y="110" className="main-text">
                    “IF YOU WORK
                  </text>
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ transform: "translateX(70px)" }}
                  to={{ transform: "translateX(-10px)" }}
                >
                  <text x="100" y="180" className="main-text">
                    IT WILL WORK”
                  </text>
                </Tween>
              </Timeline>
            </svg>
          </section>
        )}
      </Scene>
    </Controller>
  );
};

export default BeforeAboutQuote;
