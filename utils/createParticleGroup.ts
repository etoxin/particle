import { Particle } from "../models/Particle";
import { randomInteger } from "./randomInteger";

export const createParticleGroup = (
  groupIndex: number,
  size: number,
  colour: string,
  gravity: number = -0.0005
): Particle[] => {
  const particles = [];
  for (let i = 0; i < size; i++) {
    particles.push({
      x: randomInteger(-5, 5),
      y: randomInteger(-5, 5),
      z: randomInteger(-5, 5),
      vx: 0,
      vy: 0,
      vz: 0,
      gravity,
      colour,
      groupIndex,
    });
  }
  return particles;
};
