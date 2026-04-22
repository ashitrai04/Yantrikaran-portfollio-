import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Float, ContactShadows, OrbitControls, Html } from '@react-three/drei'

// ─────────────────────────────────────────────────────────────────────────────
//  SHARED DEFAULTS — change these to affect every submarine at once.
//  Any page can override any single value via props (see pages/RoboticsPage.jsx
//  for per-ship MK1/MK2/MK3 tuning blocks).
// ─────────────────────────────────────────────────────────────────────────────
export const DEFAULTS = {
  scale: 3.2,                       // model size — bigger = closer / larger submarine
  cameraPosition: [2.4, 1.1, 3.4],  // [x, y, z] — smaller distance = bigger zoom
  cameraFov: 28,                    // field of view — smaller = more "zoomed in"
  ambient: 0.1,                     // overall brightness — lower = darker model
  hemi: 0.5,                        // soft fill from above/below
  keyLight: 1.5,                    // main directional light
  fillLight: 0.1,                  // opposite-side fill
  rimLight: 0.5,                   // back rim
  autoRotateSpeed: 1.1,             // 0 disables auto-rotate
  minDistance: 1.6,                 // closest scroll-zoom
  maxDistance: 8,                   // farthest scroll-zoom
}

function Model({ src, scale }) {
  const group = useRef()
  const { scene } = useGLTF(src)
  return (
    <group ref={group} scale={scale} position={[0, -0.25, 0]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/sub-mk1.glb')

export default function SubmarineScene({
  className = '',
  src = '/sub-mk1.glb',
  // All tunables below are optional overrides. Omit to inherit from DEFAULTS.
  scale = DEFAULTS.scale,
  cameraPosition = DEFAULTS.cameraPosition,
  cameraFov = DEFAULTS.cameraFov,
  ambient = DEFAULTS.ambient,
  hemi = DEFAULTS.hemi,
  keyLight = DEFAULTS.keyLight,
  fillLight = DEFAULTS.fillLight,
  rimLight = DEFAULTS.rimLight,
  autoRotateSpeed = DEFAULTS.autoRotateSpeed,
  minDistance = DEFAULTS.minDistance,
  maxDistance = DEFAULTS.maxDistance,
}) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        camera={{ position: cameraPosition, fov: cameraFov }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={ambient} />
        <hemisphereLight intensity={hemi} color="#ffffff" groundColor="#9aa3b2" />
        <directionalLight position={[5, 6, 4]}  intensity={keyLight} color="#ffffff" />
        <directionalLight position={[-4, 3, -3]} intensity={fillLight} color="#ffffff" />
        <pointLight       position={[0, 2, -3]}  intensity={rimLight} color="#ffffff" />

        <Suspense fallback={
          <Html center>
            <div className="font-mono text-xs text-white/70 tracking-[0.3em]">LOADING MODEL…</div>
          </Html>
        }>
          <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.35}>
            <Model src={src} scale={scale} />
          </Float>
        </Suspense>

        <ContactShadows position={[0, -1.7, 0]} opacity={0.32} scale={11} blur={2.8} far={4} />

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={minDistance}
          maxDistance={maxDistance}
          autoRotate
          autoRotateSpeed={autoRotateSpeed}
          enableDamping
          dampingFactor={0.08}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 1.6}
        />
      </Canvas>
    </div>
  )
}
