import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Mesh,
  LineSegments,
  EdgesGeometry,
  BoxBufferGeometry,
  IcosahedronBufferGeometry,
  DodecahedronBufferGeometry,
  LineBasicMaterial,
} from "three";

import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { Line2 } from "three/examples/jsm/lines/Line2";

extend({ LineMaterial, LineGeometry, Line2 });

// const edges = new EdgesGeometry(geometry);
// const lines = new LineSegments(edges, new LineBasicMaterial({ color: "red" }));

const RotatingCube = (props: any) => {
  const boxRef = useRef<Mesh>(null);
  const geom = useMemo(
    () =>
      new IcosahedronBufferGeometry(
        props.size[0]
        // props.size[1]
        // props.size[2]
      ),
    []
  );

  console.log(props.xMove);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += props.xMove;
      boxRef.current.rotation.y += props.yMove;
    }
  });

  return (
    <mesh ref={boxRef}>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[geom]} />
        <lineBasicMaterial
          color={props.color}
          attach="material"
          linewidth={50}
        />
      </lineSegments>
    </mesh>
  );
};

const Scene = (props: any) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[3, -3, 2]} />
      <RotatingCube
        size={props.size}
        color={props.color}
        xMove={props.xMove}
        yMove={props.yMove}
      />
    </Canvas>
  );
};

export default Scene;
