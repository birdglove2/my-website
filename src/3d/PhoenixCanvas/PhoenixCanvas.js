import { PerspectiveCamera, Environment, OrbitControls, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import PhoenixModel from './PhoenixModel';
import gsap from 'gsap';
import * as THREE from 'three';
import { angleToRadians } from 'utils';

export const PhoenixCanvas = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[15, 2, -8]} autoZoom={false} />
        <OrbitControls autoRotate autoRotateSpeed={0.3} />
        <OrbitControls />
        <ambientLight args={['#ffffff', 0.1]} />
        <spotLight
          args={['#ffffff', 9, 10, -angleToRadians(180), 0.4]}
          position={[-6, 6, -1]}
          castShadow
        />
        <PhoenixModel scale={0.01} />
        <Html position={[12, 3, -2]}>
          <h1
            style={{
              position: 'fixed',
              color: 'white',
              fontSize: '40px',
              fontWeight: '600',
              width: '300px',
            }}
          >
            Coming soon...
          </h1>
        </Html>

        <mesh rotation={[angleToRadians(-90), 0, 0]} receiveShadow>
          <boxGeometry args={[20, 20, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <Environment background>
          <mesh>
            <sphereGeometry args={[10, 100, 100]} />
            <meshBasicMaterial color="#9b9184" side={THREE.BackSide} />
          </mesh>
        </Environment>
      </Suspense>
    </Canvas>
  );
};
