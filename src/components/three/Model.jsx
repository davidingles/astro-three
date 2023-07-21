import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Dav } from './Dav'
import styles from './Index.module.css'

const Model = () => {

  return (
        <div className={styles.canvas} style={{backgroundColor: 'rgba(0,0,0,0)'}}>
        
          <Canvas
            className='shadow-xl'
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
        
                <Dav
                  scale={.5}
                  position={[-.0,0.1,-0.00]}
                  rotation={[Math.PI / 1000, 0, 0]}
                />
        
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
        </div>
  )
}
export default Model
