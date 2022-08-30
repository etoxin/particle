import { Particle } from "../models/Particle";
import { Sphere } from "./Sphere";
import React, { useEffect, useMemo, useState } from "react";
import { randomInteger } from "../utils/randomInteger";
import { atom, useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";

export const particleGroupsAtom = atom<Particle[][]>([]);

const createParticleGroup = (
  groupIndex: number,
  size: number,
  colour: string
): Particle[] => {
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
      groupIndex,
    });
  }
  return _particles;
};

export default function Particles({ size = 2 }) {
  const [particleGroups, setParticleGroups] = useAtom(particleGroupsAtom);

  const movement = (particles: Particle[][]): Particle[][] => {
    const [particles1, particles2] = particles;
    const gravity = -0.005;

    for (let i = 0; i < particles1.length; i++) {
      let fx = 0;
      let fy = 0;
      let a, b, F, dx, dy, d;

      for (let j = 0; j < particles2.length; j++) {
        a = particles1[i];
        b = particles2[j];

        dx = a.x - b.x;
        dy = a.y - b.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d > 0) {
          F = (gravity * 0.9) / d;
          fx += F * dx;
          fy += F * dy;
        }
      }
      if (!a || !b) throw Error("undefined A");
      a.vx = a.vx + fx * 0.5;
      a.vy = a.vy + fy * 0.5;
      a.x += a.vx;
      a.y += a.vy;

      b.vx = b.vx + fx * 0.5;
      b.vy = b.vy + fy * 0.5;
      b.x += b.vx;
      b.y += b.vy;
    }

    return particles;
  };

  const memoizedParticleGroup1 = useMemo<Particle[]>(
    () => createParticleGroup(0, size, "blue"),
    [size]
  );
  const memoizedParticleGroup2 = useMemo<Particle[]>(
    () => createParticleGroup(1, size, "green"),
    [size]
  );

  useEffect(() => {
    setParticleGroups([memoizedParticleGroup1, memoizedParticleGroup2]);
  });

  useFrame(() => {
    if (!particleGroups) return;
    if (!particleGroups[0]) return;
    if (!particleGroups[1]) return;
    setParticleGroups(movement(particleGroups));
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
