import { Particle } from "../models/Particle";
import { Sphere } from "./Sphere";
import React, { useEffect, useMemo } from "react";
import { atom, useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";
import { createParticleGroup } from "../utils/createParticleGroup";
import { movement } from "../utils/movement";

export const particleGroupsAtom = atom<Particle[][]>([]);

export default function Particles({ size = 2 }) {
  const [particleGroups, setParticleGroups] = useAtom(particleGroupsAtom);

  const memoizedParticleGroup1 = useMemo<Particle[]>(
    () => createParticleGroup(0, size, "blue", -0.0005),
    [size]
  );
  const memoizedParticleGroup2 = useMemo<Particle[]>(
    () => createParticleGroup(1, size, "green", -0.005),
    [size]
  );

  useEffect(() => {
    setParticleGroups([memoizedParticleGroup1, memoizedParticleGroup2]);
  });

  useFrame(() => {
    if (!particleGroups) return;
    if (!particleGroups[0]) return;
    if (!particleGroups[1]) return;

    const step1 = movement(particleGroups[0], particleGroups[1]);
    const step2 = movement(step1[1], step1[0]);

    setParticleGroups(step2);
  });

  return (
    <>
      {[...memoizedParticleGroup1, ...memoizedParticleGroup2].map(
        (particle, index) => (
          <Sphere particle={particle} index={index} key={index} />
        )
      )}
    </>
  );
}
