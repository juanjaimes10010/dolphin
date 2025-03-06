import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


export default function ThreeScene() {
  return (
    <Canvas style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
      {/* Camera Controls */}
      <OrbitControls />

      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Example 3D Object */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="indigo" />
      </mesh>
    </Canvas>
  );
}
