"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber';
import { useGLTF, Image, MeshTransmissionMaterial, useFBO } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';
import { projects } from '../constants';

// --- REFRACTED FLUID GLASS COMPONENT FOR CARDS ---
const ProjectImageGlass = ({ imageUrl, title }) => {
  return (
    <div className="w-full h-full bg-[#010102]">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 15 }} 
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Scene imageUrl={imageUrl} />
      </Canvas>
    </div>
  );
};

function Scene({ imageUrl }) {
  const { viewport } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const buffer = useFBO();
  const lensRef = useRef();
  const { nodes } = useGLTF('/assets/3d/lens.glb');

  useFrame((state, delta) => {
    const { gl, camera, pointer } = state;

    // Follow mouse within the card
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    easing.damp3(lensRef.current.position, [x, y, 2], 0.1, delta);

    // Render the image scene to the buffer for refraction
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  return (
    <>
      {/* The Background Image Scene */}
      {createPortal(
        <Image 
          url={imageUrl} 
          scale={[viewport.width, viewport.height, 1]} 
          toneMapped={false}
        />,
        scene
      )}

      {/* The Visible Background */}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>

      {/* The Refractive Lens (The "Cursor") */}
      <mesh 
        ref={lensRef} 
        scale={0.25} 
        rotation={[Math.PI / 2, 0, 0]} 
        geometry={nodes.Cylinder.geometry}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.15}
          thickness={2}
          anisotropy={0.1}
          chromaticAberration={0.04}
          transmission={1}
          roughness={0}
        />
      </mesh>
    </>
  );
}