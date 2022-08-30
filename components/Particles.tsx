import { Particle } from "../models/Particle";
import { Sphere } from "./Sphere";
import React, { useMemo } from "react";
import { randomInteger } from "../utils/randomInteger";

const createParticleGroup = (size: number, colour: string): Particle[] => {
  const _particles = [];
  for (let i = 0; i < size; i++) {
    _particles.push({
      x: randomInteger(-5, 5),
      y: randomInteger(-5, 5),
      z: -12,
      vx: 0,
      vy: 0,
      vz: 0,
      colour,
    });
  }
  return _particles;
};

export default function Particles({ size = 2 }) {
  const particleGroup1 = useMemo<Particle[]>(
    () => createParticleGroup(size, "blue"),
    [size]
  );
  const particleGroup2 = useMemo<Particle[]>(
    () => createParticleGroup(size, "green"),
    [size]
  );

  return (
    <>
      {[...particleGroup1, ...particleGroup2].map((particle) => (
        <Sphere particle={particle} />
      ))}
    </>
  );
}
