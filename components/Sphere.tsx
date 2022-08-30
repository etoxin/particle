import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { Particle } from "../models/Particle";
import { useAtom } from "jotai";
import { particleGroupsAtom } from "./Particles";

export type SphereProps = {
  mesh?: ThreeElements["mesh"];
  particle: Particle;
  index: number;
};

export function Sphere(props: SphereProps) {
  const { particle, index } = props;
  const ref = useRef<THREE.Mesh>(null!);
  const [particleGroups] = useAtom(particleGroupsAtom);

  useFrame((state, delta, xrFrame) => {
    const group = particleGroups[particle.groupIndex];
    if (!group) return;
    const p = group[index];
    if (!p) return;

    ref.current.position.x = particleGroups[particle.groupIndex][index].x;
    ref.current.position.y = particleGroups[particle.groupIndex][index].y;
    ref.current.position.z = particleGroups[particle.groupIndex][index].z;
  });

  return (
    <mesh
      {...props.mesh}
      position={[particle.x, particle.y, particle.z]}
      ref={ref}
      scale={0.5}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={particle.colour} />
    </mesh>
  );
}
