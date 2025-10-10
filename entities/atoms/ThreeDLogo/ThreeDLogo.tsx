"use client";

import { HTMLAttributes, useEffect, useRef } from "react";
import styles from "./ThreeDLogo.module.scss";
import {
  ACESFilmicToneMapping,
  AmbientLight,
  BufferGeometry,
  Clock,
  Color,
  DirectionalLight,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Group,
  Material,
  Matrix4,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  Scene,
  ShadowMaterial,
  Shape,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import amLogo from "../../assets/am.svg";

type ThreeDLogoProps = {
  svgText?: string;
  svgUrl?: string; // defaults to /am.svg in /public
  style?: "matte" | "metal" | "gloss" | "glass";
  color?: number; // brand primary
  depth?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  autoRotate?: boolean;
  exposure?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * SVG Logo rendered in 3D.
 */
export function ThreeDLogo({
  className,
  svgText,
  svgUrl = amLogo.src,
  /** Brand look */
  style = "metal",
  color = 0x6b7cff,
  depth = 8,
  bevelEnabled = true,
  bevelThickness = 0.7,
  bevelSize = 0.6,
  /** Rendering feel */
  autoRotate = false,
  exposure = 1.0,
  ...rest
}: ThreeDLogoProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!mountRef.current || !canvasRef.current) return;

    const renderer = new WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMappingExposure = exposure;

    // Env lighting
    const pmrem = new PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // --- Scene & Camera ---
    const scene = new Scene();
    scene.background = new Color(0xf5f7fb);
    scene.environment = envTex;

    const camera = new PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 18, 38);

    // --- Lights ---
    scene.add(new AmbientLight(0xffffff, 0.35));
    const key = new DirectionalLight(0xffffff, 1.0);
    key.position.set(24, 40, 18);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.0002;
    scene.add(key);

    // Rim light for nicer edges
    const rim = new DirectionalLight(0xffffff, 0.25);
    rim.position.set(-30, 25, -20);
    scene.add(rim);

    // --- Shadow receiver ---
    const floor = new Mesh(
      new PlaneGeometry(300, 300),
      new ShadowMaterial({ opacity: 0.18 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -5;
    floor.receiveShadow = true;
    scene.add(floor);

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // --- Style presets ---
    const material = materialForStyle(style, color);

    const group = new Group();
    group.castShadow = true;
    scene.add(group);

    const loader = new SVGLoader();

    const loadAndBuild = async () => {
      try {
        const data = svgText
          ? loader.parse(svgText)
          : await fetch(svgUrl).then(async (r) => loader.parse(await r.text()));

        const shapes: Shape[] = [];
        for (const p of data.paths) shapes.push(...SVGLoader.createShapes(p));

        const geoms: BufferGeometry[] = [];
        for (const s of shapes) {
          const g = new ExtrudeGeometry(s, {
            depth,
            bevelEnabled,
            bevelThickness,
            bevelSize,
            bevelSegments: 2,
            curveSegments: 32,
          });
          g.computeBoundingBox();
          geoms.push(g);
        }

        const merged = mergeFallback(geoms);
        centerAndScale(merged, 28);

        const mesh = new Mesh(merged, material);
        mesh.castShadow = true;
        mesh.receiveShadow = false;
        group.add(mesh);
      } catch (e) {
        console.error("SVG load/parse failed:", e);
      }
    };

    loadAndBuild();

    // --- Resize ---
    const onResize = () => {
      const el = mountRef.current!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = el.clientWidth * dpr;
      const h = el.clientHeight * dpr;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mountRef.current);
    onResize();

    // --- Animate ---
    let raf = 0;
    const clock = new Clock();
    const animate = () => {
      const dt = clock.getDelta();
      controls.update();
      if (autoRotate) group.rotation.y += dt * 0.35;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      pmrem.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if ((obj as Mesh).geometry) (obj as Mesh).geometry.dispose();
        const m = (obj as Mesh).material as Material | Material[] | undefined;
        if (m) Array.isArray(m) ? m.forEach((mm) => mm.dispose()) : m.dispose();
      });
    };
  }, [
    autoRotate,
    bevelEnabled,
    bevelSize,
    bevelThickness,
    color,
    depth,
    exposure,
    style,
    svgText,
    svgUrl,
  ]);
  return (
    <div
      ref={mountRef}
      className={`${styles.root} ${className}`}
      data-testid={ThreeDLogo.displayName}
      {...rest}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
ThreeDLogo.displayName = "ThreeDLogo";

function centerAndScale(geom: BufferGeometry, targetSize = 20) {
  geom.computeBoundingBox();
  const bb = geom.boundingBox!;
  const size = new Vector3();
  bb.getSize(size);
  const center = new Vector3();
  bb.getCenter(center);
  const scale = targetSize / Math.max(size.x, size.y, size.z || 1);
  const m = new Matrix4()
    .makeTranslation(-center.x, -center.y, -center.z)
    .multiply(new Matrix4().makeScale(scale, -scale, scale)); // flip Y
  geom.applyMatrix4(m);
  geom.computeVertexNormals();
}

// ---------- Materials & utils ----------
function materialForStyle(
  style: "matte" | "metal" | "gloss" | "glass",
  color: number
): Material {
  switch (style) {
    case "matte":
      return new MeshStandardMaterial({
        color,
        metalness: 0.0,
        roughness: 0.95,
      });
    case "metal":
      return new MeshStandardMaterial({
        color,
        metalness: 0.9,
        roughness: 0.2,
      });
    case "gloss":
      // Clearcoat finish
      return new MeshPhysicalMaterial({
        color,
        metalness: 0.2,
        roughness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });
    case "glass":
      return new MeshPhysicalMaterial({
        color,
        transmission: 0.95,
        thickness: 1.5,
        metalness: 0.0,
        roughness: 0.02,
        ior: 1.5,
      });
    default:
      return new MeshStandardMaterial({ color });
  }
}

function mergeFallback(geoms: BufferGeometry[]) {
  const merged = new BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  let offset = 0;
  for (const g of geoms) {
    const p = g.getAttribute("position");
    const n = g.getAttribute("normal");
    const uv = g.getAttribute("uv");
    const idx = g.getIndex();
    for (let i = 0; i < p.count * 3; i++) positions.push(p.array[i]);
    for (let i = 0; i < n.count * 3; i++) normals.push(n.array[i]);
    if (uv) for (let i = 0; i < uv.count * 2; i++) uvs.push(uv.array[i]);
    if (idx)
      for (let i = 0; i < idx.count; i++) indices.push(idx.array[i] + offset);
    else {
      const triCount = p.count / 3;
      for (let i = 0; i < triCount; i++)
        indices.push(
          offset + i * 3 + 0,
          offset + i * 3 + 1,
          offset + i * 3 + 2
        );
    }
    offset += p.count;
    g.dispose();
  }
  merged.setAttribute("position", new Float32BufferAttribute(positions, 3));
  merged.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  if (uvs.length) merged.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  merged.setIndex(indices);
  return merged;
}
