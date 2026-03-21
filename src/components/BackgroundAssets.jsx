import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function FloatingElements() {
  const group = useRef()
  
  useFrame(() => {
    // Tie parallax effect directly to window global scroll state
    const scrollY = window.scrollY
    group.current.position.y = (scrollY * 0.005) % 10 // Reset cleanly to create endless loop feel
    group.current.rotation.x += 0.001
    group.current.rotation.y += 0.002
  })

  return (
    <group ref={group}>
      <mesh position={[-6, 4, -8]}>
        <torusGeometry args={[1.5, 0.4, 16, 50]} />
        <meshStandardMaterial color="#A855F7" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[7, -2, -10]}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#FFFFFF" wireframe transparent opacity={0.15} />
      </mesh>

      <mesh position={[-4, -8, -12]}>
        <octahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial color="#A855F7" wireframe transparent opacity={0.2} />
      </mesh>

      <mesh position={[6, 8, -15]}>
        <dodecahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color="#FFFFFF" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export default function BackgroundAssets() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FloatingElements />
      </Canvas>
    </div>
  )
}
