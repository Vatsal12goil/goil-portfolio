import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, Torus, Icosahedron, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Animated, distorting central torus knot
const AnimatedKnot = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]} scale={1.4}>
      <torusKnotGeometry args={[1.1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#3b0764"
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.6}
        distort={0.35}
        speed={2}
      />
    </mesh>
  );
};

// Floating wireframe icosahedron
const WireShape = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.005;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.6} />
      </mesh>
    </Float>
  );
};

// Glowing floating spheres
const GlowSphere = ({ position, color, size = 0.4 }: { position: [number, number, number]; color: string; size?: number }) => (
  <Float speed={2} rotationIntensity={0.4} floatIntensity={2}>
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        toneMapped={false}
      />
    </mesh>
  </Float>
);

// Particle field
const Particles = ({ count = 400 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#a5b4fc" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#60a5fa" />
        <pointLight position={[-10, -8, -5]} intensity={1} color="#ec4899" />
        <pointLight position={[0, 5, 5]} intensity={0.8} color="#22d3ee" />

        <Stars radius={80} depth={40} count={1500} factor={3} saturation={0} fade speed={1.5} />
        <Particles count={350} />

        <AnimatedKnot />

        <WireShape position={[-4.5, 2, -3]} color="#22d3ee" scale={0.9} />
        <WireShape position={[4.5, -1.5, -2]} color="#f472b6" scale={1.1} />
        <WireShape position={[-3, -2.5, -1]} color="#a78bfa" scale={0.6} />
        <WireShape position={[3.5, 2.8, -4]} color="#34d399" scale={0.7} />

        <GlowSphere position={[-5, -1, 0]} color="#06b6d4" size={0.18} />
        <GlowSphere position={[5, 1.5, -1]} color="#f59e0b" size={0.22} />
        <GlowSphere position={[2, -3, 1]} color="#ec4899" size={0.16} />
        <GlowSphere position={[-2, 3, 0]} color="#8b5cf6" size={0.2} />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
