import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export const GameArea = () => {
  const { scene } = useGLTF("/models/map.glb");
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  return <primitive object={scene} />;
};

useGLTF.preload("/models/map.glb");
