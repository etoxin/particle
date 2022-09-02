import { Particle } from "../models/Particle";
import { randomInteger } from "./randomInteger";
import { XStageWidth, YStageWidth, ZStageWidth } from "./constants";

export const createParticleGroup = (
  groupIndex: number,
  size: number,
  colour: string,
  gravity: number = -0.0005
): Particle[] => {
  const particles = [];
  for (let i = 0; i < size; i++) {
    particles.push({
      x: randomInteger(-XStageWidth, XStageWidth),
      y: randomInteger(-YStageWidth, YStageWidth),
      z: randomInteger(-ZStageWidth, ZStageWidth),
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
