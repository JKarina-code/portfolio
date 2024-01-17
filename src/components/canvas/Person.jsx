import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader } from "../Loader";
const Person = () => {
  const person = useGLTF("./person/scene.gltf");
  return (
    <primitive
      object={person.scene}
      scale={2.5}
      position-y={[-2]}
      
    />
  );
};

const PersonCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 27, near: 0.1, far: 200, position: [6, 5, 6] }}
      style={{
        backgroundColor: "#8a516e1F",
        width: "60vw",
        height: "60vh",
      }}
    >
      <ambientLight intensity={1.5} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
        />

        <Person />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PersonCanvas;
