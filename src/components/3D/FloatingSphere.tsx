import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingSphere = ({ position, color = "#8b5cf6" }: { position: [number, number, number], color?: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};

export default FloatingSphere;