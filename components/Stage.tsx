import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import Particles from "./Particles";
import { useControls } from "leva";

export function Stage() {
  const props = useControls({
    size: { value: 50, min: 1, max: 500, step: 1 },
  });
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles {...props} />
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.1}
      />
    </Canvas>
  );
}
