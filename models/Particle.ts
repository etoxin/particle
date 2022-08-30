import { ThreeElements } from "@react-three/fiber";

export type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  colour: string;
  groupIndex: number;
};
