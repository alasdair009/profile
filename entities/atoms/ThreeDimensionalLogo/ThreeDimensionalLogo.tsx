import { Root } from "./styles";
import { HTMLAttributes, Suspense } from "react";
import amLogo from "../../assets/am.svg";
import { Canvas, useLoader } from "@react-three/fiber";
import { SVGLoader } from "three-stdlib";
import { ExtrudeGeometry } from "three";
import { OrbitControls, Text } from "@react-three/drei";
import { colors } from "@/entities";

type ThreeDimensionalLogoProps = {} & HTMLAttributes<HTMLDivElement>;

const Figure = () => {
  const svgData = useLoader(SVGLoader, amLogo.src as string);

  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const geometry = new ExtrudeGeometry(shapes, {
    depth: 20,
  });
  geometry.center();

  return (
    <mesh geometry={geometry} scale={0.25}>
      <meshPhongMaterial attach="material" color={colors.greenGrass} />
    </mesh>
  );
};

const Loading = () => {
  return <Text>Loading...</Text>;
};

const Scene = () => (
  <>
    <OrbitControls enableZoom={true} enablePan={true} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Figure />
  </>
);

/**
 * Three Dimensional Logo using ThreeJS
 */
export function ThreeDimensionalLogo({ ...rest }: ThreeDimensionalLogoProps) {
  return (
    <Root data-testid={ThreeDimensionalLogo.name} {...rest}>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Suspense fallback={<Loading />}>
          <Scene />
        </Suspense>
      </Canvas>
    </Root>
  );
}
