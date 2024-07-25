// src/types/declarations.d.ts
import '@react-three/fiber';
import { ThreeGlobe } from 'three-globe';

declare module '@react-three/fiber' {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

