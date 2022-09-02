import { Particle } from "../models/Particle";
import {XStageWidth, YStageWidth} from "./constants";

export const movement = (
  particles1: Particle[],
  particles2: Particle[]
): Particle[][] => {
  for (let i = 0; i < particles1.length; i++) {
    let fx = 0;
    let fy = 0;
    let a, b, F, dx, dy, d;

    for (let j = 0; j < particles2.length; j++) {
      a = particles1[i];
      b = particles2[j];
      const gravity = a.gravity;

      dx = a.x - b.x;
      dy = a.y - b.y;
      d = Math.sqrt(dx * dx + dy * dy);
      if (d > 0 && d < 80) {
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
    if (a.x <= -XStageWidth || a.x >= XStageWidth) {
      a.vx *= -1;
    }
    if (a.y <= -YStageWidth || a.y >= YStageWidth) {
      a.vy *= -1;
    }
  }

  return [particles1, particles2];
};
