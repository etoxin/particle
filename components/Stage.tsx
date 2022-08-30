import { Canvas } from "@react-three/fiber";
import React from "react";
import Particles from "./Particles";
import { useControls } from "leva";

export function Stage() {
  const props = useControls({
    size: { value: 5, min: 1, max: 1000, step: 1 },
  });
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles {...props} />
    </Canvas>
  );
}
