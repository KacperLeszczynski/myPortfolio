import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SpecificProject = (props: any) => {
  const { ref, inView, entry } = useInView({ threshold: 0.7 });

  useEffect(() => {
    console.log(entry);
    if (inView) {
      entry?.target.classList.add("show");
    } else {
      entry?.target.classList.remove("show");
    }
  }, [inView]);

  return (
    <div className="project">
      <div className="project-detail-wrapper">
        <h1>{props.header}</h1>
        <p>{props.text}</p>
        <a>{props.buttonText}</a>
        <div className="project-fill" ref={ref}></div>
      </div>
    </div>
  );
};

export default SpecificProject;
