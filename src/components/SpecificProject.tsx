import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SpecificProject = (props: any) => {
  const { ref, inView, entry } = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (inView) {
      entry?.target.classList.add("show");
      entry?.target.previousElementSibling?.classList.add("show-text");
      entry?.target.previousElementSibling?.previousElementSibling?.classList.add(
        "show-text"
      );
      entry?.target.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add(
        "show-text"
      );
      return;
    }

    if (entry) {
      if (entry?.target.getBoundingClientRect().top > 0) {
        entry?.target.classList.remove("show");
        entry?.target.previousElementSibling?.classList.remove("show-text");
        entry?.target.previousElementSibling?.previousElementSibling?.classList.remove(
          "show-text"
        );
        entry?.target.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.remove(
          "show-text"
        );
      }
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
