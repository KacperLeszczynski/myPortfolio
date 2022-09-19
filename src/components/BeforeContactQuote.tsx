import React, { useEffect } from "react";
import {
  DEEP_PURPLE,
  DARK_GREEN,
  ORANGE,
  BACKGROUND_COLOR,
} from "../Constants";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { useInView } from "react-intersection-observer";

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

const BeforeContactQuote = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      var texts = document.querySelectorAll("text");
      console.log(texts);
      for (var i = 0; i < texts.length; i++) {
        makeBG(texts[i]);
      }
    }
  }, [inView]);

  return (
    <Controller>
      <Scene duration={800} triggerHook={1} offset={400}>
        {(progress: any) => (
          <div className="before-about-contact-div">
            <svg className="main-svg" id="the-main-svg">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ strokeDashoffset: 1800 }}
                  to={{ strokeDashoffset: 0 }}
                >
                  <path
                    d="M400 300 L100 300 L250 40 L550 560 L700 300Z"
                    fill="none"
                    stroke={DEEP_PURPLE}
                    strokeWidth={17}
                    className="triangle-path"
                  />
                </Tween>
              </Timeline>

              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{
                    scale: 0.3,
                    transform: "translateX(300px)",
                    opacity: "50%",
                  }}
                  to={{
                    scale: 1,
                    transform: "translateX(0px)",
                    opacity: "100%",
                  }}
                >
                  <text ref={ref} x="160" y="320" className="main-text">
                    “IT WILL WORK”
                  </text>
                </Tween>
              </Timeline>
            </svg>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

export default BeforeContactQuote;
