import {Root} from "./styles";
import {HTMLAttributes, useEffect, useRef} from "react";
import * as THREE from 'three';

type ParticliserProps = {
} & HTMLAttributes<HTMLCanvasElement>;
export function Particliser({...rest}: ParticliserProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const context = canvas.getContext("2d");
        const scene = new THREE.Scene();
        const particlesGeometry = new THREE.SphereGeometry(1, 32, 32);

        const particlesMaterial = new THREE.PointsMaterial();
        particlesMaterial.size = 0.02;
        particlesMaterial.sizeAttenuation = true;

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
    }, [])

    return <Root height={480} width={680} ref={canvasRef} {...rest} />
}