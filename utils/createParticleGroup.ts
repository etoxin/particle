import { Particle } from "../models/Particle";
import { randomInteger } from "./randomInteger";

export const createParticleGroup = (
  groupIndex: number,
  size: number,
  colour: string
): Particle[] => {
  const particles = [];
  for (let i = 0; i < size; i++) {
    particles.push({
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
  return particles;
};
