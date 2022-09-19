import React, { useMemo, useRef } from "react";
import {
  Mesh,
  LineSegments,
  EdgesGeometry,
  BoxBufferGeometry,
  IcosahedronBufferGeometry,
  DodecahedronBufferGeometry,
  LineBasicMaterial,
} from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";

const MeshPrepare = () => {
  const geom = useMemo(
    () =>
      new IcosahedronBufferGeometry(
        2
        // props.size[1]
        // props.size[2]
      ),
    []
  );
  const boxRef = useRef<Mesh>(null);

  // useFrame(() => {
  //   if (boxRef.current) {
  //     boxRef.current.rotation.x += 0.02;
  //     boxRef.current.rotation.y += 0.03;
  //   }
  // });
  return (
    <mesh ref={boxRef}>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[geom]} />
        <lineBasicMaterial color={"blue"} attach="material" linewidth={50} />
      </lineSegments>
    </mesh>
  );
};

const Shape2d = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[3, -3, 2]} />
      <MeshPrepare />
    </Canvas>
  );
};

export default Shape2d;
