import { Particle } from "../models/Particle";

export const movement = (particles: Particle[][]): Particle[][] => {
  const [particles1, particles2] = particles;
  const gravity = -0.0005;

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
      if (d > 0 && d < 80) {
        F = (gravity * 0.9) / d;
        fx += F * dx;
        fy += F * dy;
      }
    }
    if (!a || !b) throw Error("undefined A");
    a.vx = a.vx + fx * 0.5;
    b.vx = b.vx + fx * 0.5;
    a.vy = a.vy + fy * 0.5;
    b.vy = b.vy + fy * 0.5;
    a.x += a.vx;
    b.x += b.vx;
    a.y += a.vy;
    b.y += b.vy;
  }

  return particles;
};