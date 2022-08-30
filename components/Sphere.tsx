import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { Particle } from "../models/Particle";

export type SphereProps = {
  mesh?: ThreeElements["mesh"];
  particle: Particle;
};

export function Sphere(props: SphereProps) {
  const { particle } = props;
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  useFrame((state, delta, xrFrame) => {
    ref.current.position.x += 0.01;
    ref.current.position.y += 0.01;
  });

  return (
    <mesh
      {...props.mesh}
      position={[particle.x, particle.y, particle.z]}
      ref={ref}
      scale={clicked ? 0.2 : 0.1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={hovered ? "hotpink" : particle.colour} />
    </mesh>
  );
}
