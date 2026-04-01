"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';

function FloatingObjects() {
  const group = useRef<any>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      group.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-4, 1, -5]}>
        <Torus args={[1.5, 0.4, 16, 50]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#ff3366" wireframe opacity={0.6} transparent />
        </Torus>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[5, -2, -6]}>
        <Sphere args={[1, 32, 32]}>
          <MeshDistortMaterial color="#00f0ff" distort={0.5} speed={3} />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={2.5} position={[2, 3, -8]}>
        <Torus args={[0.8, 0.2, 16, 32]}>
          <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={2} />
        </Torus>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, background: '#050505' }} />;
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ff3366" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00f0ff" />
        
        <FloatingObjects />
        
        {/* Cinematic Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1.5} />
      </Canvas>
    </div>
  );
}
