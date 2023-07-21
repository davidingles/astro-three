import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useGLTF } from "@react-three/drei";


export function Dav(props) {
  const { nodes, materials } = useGLTF("/models/Estuche_con_asas.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.162, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Estuche_con_asas.gltf");



const Estuche_con_asas = () => {

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
       
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
        </div>
  )
}
export default Estuche_con_asas
