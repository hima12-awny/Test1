import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    planeGeometry: ReactThreeFiber.Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
    icosahedronGeometry: ReactThreeFiber.Object3DNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>;
    meshPhongMaterial: ReactThreeFiber.Object3DNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>;
    lineBasicMaterial: ReactThreeFiber.Object3DNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>;
    bufferGeometry: ReactThreeFiber.Object3DNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
    line: ReactThreeFiber.Object3DNode<THREE.Line, typeof THREE.Line>;
    group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
    ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
    directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
    pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
  }
}
