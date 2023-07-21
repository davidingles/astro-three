import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
// import { Dav } from './Dav'
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";


export function Dav(props) {
  const { nodes, materials } = useGLTF("/models/B1_cerrada.gltf");
  return (
    <>
      
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001"].geometry}
          material={materials["TQ_ARD_front.001"]}
          name="meshPhongMaterial"
          // material={new THREE.MeshPhongMaterial( { color: 0xff0000 } )}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_1"].geometry}
          material={materials["TQ_ARD_back.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom001_2"].geometry}
          material={materials["TQ_ARD_edge.001"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/B1_cerrada.gltf");

const B1_cerrada = () => {

  return (
        <div style={{backgroundColor: 'rgba(0,0,0,0)'}}>
        
          <Canvas
            style={{ width: '100%', margin:'auto'}}
            camera={{view:
              {
                enabled: true,
                fullWidth: 100,
                fullHeight: 100,
                offsetX: 0,
                offsetY: -30,
                width: 100,
                height: 100,
              }
              ,  focus: 10, fov: 80 ,zoom: 6, position:[0, .5, 1.5]}} >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
        
              <Dav/>

                {/* <Dav
                  scale={.5}
                  position={[-.0,0.1,-0.00]}
                  rotation={[Math.PI / 1000, 0, 0]}
                >
                  <group>
                    <mesh material={new THREE.MeshPhongMaterial( { color: 0xff00ff } )}/>
                    <mesh/>
                    <mesh/>
                  </group>
                </Dav> */}
        
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
        </div>
  )
}
export default B1_cerrada
