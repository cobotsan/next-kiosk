'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import * as THREE from 'three';

function KioskModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Main Kiosk Body */}
      <Box ref={meshRef} args={[2, 4, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4ca958" />
      </Box>
      
      {/* Screen */}
      <Box args={[1.8, 2.5, 0.1]} position={[0, 0.5, 0.3]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      
      {/* Base */}
      <Box args={[2.5, 0.5, 1]} position={[0, -2.25, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>
    </group>
  );
}

export default function ThreeDViewer() {
  return (
    <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <KioskModel />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          minDistance={3}
          maxDistance={10}
        />
      </Canvas>
      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
        Click and drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}