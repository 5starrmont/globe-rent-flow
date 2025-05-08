
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function RotatingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#111827"
        emissive="#3B82F6"
        emissiveIntensity={0.5}
        roughness={0.7}
        metalness={0.3}
        wireframe={true}
      />
    </Sphere>
  );
}

const GlobeRenderer = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <RotatingSphere />
    </Canvas>
  );
};

// Fallback component to show when WebGL fails
const GlobeFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 h-64 rounded-full border-4 border-blue-500 border-opacity-50 border-t-blue-500 animate-spin"></div>
    </div>
  );
};

export default function Globe() {
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasError(true);
      }
    } catch (e) {
      setHasError(true);
    }
  }, []);
  
  // Error handler for React Error Boundary
  const handleError = () => {
    console.log("Globe rendering error detected - using fallback");
    setHasError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 z-0 opacity-70"
    >
      {isClient && !hasError ? (
        <ErrorBoundary onError={handleError}>
          <GlobeRenderer />
        </ErrorBoundary>
      ) : (
        <GlobeFallback />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </motion.div>
  );
}

// Simple Error Boundary implementation
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Globe rendering error:", error, errorInfo);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <GlobeFallback />;
    }
    return this.props.children;
  }
}
