import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';

interface InteractiveCardProps {
  position: [number, number, number];
  text: string;
  color?: string;
}

const InteractiveCard = ({ position, text, color = "#6366f1" }: InteractiveCardProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {text}
      </Text>
    </group>
  );
};

export default InteractiveCard;