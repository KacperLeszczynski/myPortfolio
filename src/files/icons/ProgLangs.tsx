import { ChildProcess } from "child_process";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProgLags = () => {
  const { ref, inView, entry } = useInView({ threshold: 1 });

  useEffect(() => {
    console.log("1");

    if (inView) {
      console.log("2");
      const element = entry?.target as HTMLElement;
      const child1 = element.children[0] as HTMLElement;
      const child2 = element.children[1] as HTMLElement;
      const child3 = element.children[2] as HTMLElement;

      console.log(child1);
      child1.style.opacity = "1";
      setTimeout(() => {
        child2.style.opacity = "1";

        setTimeout(() => {
          child3.style.opacity = "1";
        }, 300);
      }, 300);

      return;
    }

    if (entry) {
      if (entry?.target.getBoundingClientRect().top > 0) {
        const element = entry?.target as HTMLElement;
        const child1 = element.children[0] as HTMLElement;
        const child2 = element.children[1] as HTMLElement;
        const child3 = element.children[2] as HTMLElement;

        console.log(child1);
        child1.style.opacity = "0";
        child2.style.opacity = "0";
        child3.style.opacity = "0";
      }
    }
  }, [inView]);

  return (
    <svg
      width="100%"
      height={120}
      viewBox="0 0 120 32"
      style={{
        fill: "#38564b",
      }}
      className="programming-langs-svg"
      ref={ref}
    >
      <g
        transform="matrix(1.4,0,0,1.4,0,0)"
        opacity={0}
        className="python-icon"
      >
        <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z" />
        <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z" />
      </g>
      <g
        transform="matrix(1.4,0,0,1.4,40,-4)"
        opacity={0}
        className="javascript-icon"
      >
        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
      </g>
      <g transform="matrix(1.4,0,0,1.4,80,0)" opacity={0} className="c-icon">
        <path d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76 1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57 1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76zM12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48 3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92zm5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z"></path>
      </g>
    </svg>
  );
};

export default ProgLags;
