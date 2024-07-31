import { Root } from "./styles";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { HTMLAttributes, useEffect, useRef } from "react";
import amLogo from "../../assets/am.svg";
import homekit from "../../assets/homekit.svg";

type ThreeDLogoProps = {} & HTMLAttributes<HTMLDivElement>;

const extrudeSettings = {
  steps: 2,
  depth: 16,
  bevelEnabled: true,
  bevelThickness: 1,
  bevelSize: 1,
  bevelOffset: 0,
  bevelSegments: 1,
};

/**
 * Three dimensional logo
 */
export function ThreeDLogo({ ...rest }: ThreeDLogoProps) {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const loader = new SVGLoader();
    let shapes: THREE.Shape[];

    const camera = new THREE.PerspectiveCamera(75, 1000 / 1000, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    const ambientLight = new THREE.AmbientLight("#888888");
    renderer.setSize(500, 500);

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    camera.position.z = 50;
    camera.position.x = 50;
    camera.position.y = 50;

    // load a SVG resource
    loader.load(
      // resource URL
      homekit.src,
      // called when the resource is loaded
      function (data) {
        const paths = data.paths;
        const group = new THREE.Group();

        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];

          const material = new THREE.MeshBasicMaterial({
            color: "red",
            side: THREE.DoubleSide,
            depthWrite: false,
          });

          shapes = SVGLoader.createShapes(path);

          for (let j = 0; j < shapes.length; j++) {
            const shape = shapes[j];
            const geometry = new THREE.ShapeGeometry(shape);
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          }
        }

        scene.add(ambientLight, group);
        const animate = function () {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      },
      // called when loading is in progresses
      function (xhr) {
        console.log(xhr.loaded);
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );

    // const animate = function () {
    //   requestAnimationFrame(animate);
    //   renderer.render(scene, camera);
    // };
    // animate();
  });
  return <Root ref={refContainer} {...rest} />;
}
