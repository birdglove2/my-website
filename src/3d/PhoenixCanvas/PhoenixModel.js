/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NORBERTO-3D (https://sketchfab.com/norberto3d)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
title: phoenix bird
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/phoenix/scene.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group position={[-100, 250, 0]} rotation={[-Math.PI / 2, 0, 0.05]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group>
              <group>
                <group>
                  <primitive object={nodes._rootJoint} />
                  <group rotation={[-Math.PI / 2, 0, 0]} />
                  <group rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh
                    geometry={nodes.Object_7.geometry}
                    material={materials.MatI_Ride_FengHuang_01a}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    geometry={nodes.Object_8.geometry}
                    material={materials.MatI_Ride_FengHuang_01b}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/phoenix/scene.gltf');