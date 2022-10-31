import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { TimelineProps } from "react-gsap/dist/Timeline";

const LoadingAnimation = () => (
  <Controller>
    {/* <Scene duration={9000} pin={{ pushFollowers: true }} triggerHook={0.5}>
        {(progress: any) => (
          <Timeline totalProgress={progress} paused>
            <Timeline
              target={
                <div className="loading-panel" aria-readonly={true}>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                  <div className="white-line"></div>
                </div>
              }
              children={<></>}
            ></Timeline>
            
            <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
          </Timeline>
        )}
      </Scene> */}

    <Scene
      duration={window.innerHeight*3}
      pin={{ pushFollowers: true }}
      triggerHook={0.7}
      offset={300}
    >
      {(progress: any) => (
        <section className="loading-animation-container">
          <div className="wrapper">
            <h1>Loading...</h1>
            <div className="loading-panel" aria-readonly={true}>
              <div className="white-line"></div>
              <div className="white-line"></div>
              <div className="white-line"></div>
              <div className="white-line"></div>
              <div className="white-line"></div>
              <div className="white-line"></div>
              <div className="white-line"></div>
              <div className="white-line"></div>
            </div>
            <Timeline totalProgress={progress} paused>
              <Tween from={{ width: "0%" }} to={{ width: "100%" }}>
                <div className="loading-panel-fill"></div>
              </Tween>
            </Timeline>
          </div>
        </section>
      )}
    </Scene>
  </Controller>
);
export default LoadingAnimation;
