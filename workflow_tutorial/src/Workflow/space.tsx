import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const SpaceScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Set clear color with zero alpha
        mountRef.current?.appendChild(renderer.domElement);

        camera.position.z = 10;

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

        const starVertices = [];
        const frustumSize = 1000;
        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(frustumSize);
            const y = THREE.MathUtils.randFloatSpread(frustumSize);
            const z = THREE.MathUtils.randFloatSpread(frustumSize);
            if (Math.abs(x) < frustumSize / 2 && Math.abs(y) < frustumSize / 2 && Math.abs(z) < frustumSize / 2) {
                starVertices.push(x, y, z);
            }
        }

        interface GLTF {
            scene: THREE.Group;
        }

        const loader = new GLTFLoader();
        let model: THREE.Group;

        loader.load(
            // './forest_house.glb',
            './compcube_orig.glb',
            function (gltf: GLTF) {
                model = gltf.scene;
                model.scale.set(1, 1, 1);
                model.rotation.set(0, -5, 0);
                model.position.set(0, 0, 0);
                scene.add(model);
            }
        );

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const mouse = new THREE.Vector2();
        const targetRotation = new THREE.Vector2();
        const targetPosition = new THREE.Vector3();

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            targetRotation.x = mouse.y * Math.PI;
            targetRotation.y = mouse.x * Math.PI;
            targetPosition.x = mouse.x * 5;
            targetPosition.y = mouse.y * 5;
        };

        window.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.x += 0.0003;
            stars.rotation.y += 0.0003;
            renderer.render(scene, camera);

            if (model) {
                model.rotation.x += (targetRotation.x - model.rotation.x) * 0.05;
                model.rotation.y += (targetRotation.y - model.rotation.y) * 0.05;
                model.position.x += (targetPosition.x - model.position.x) * 0.05;
                model.position.y += (targetPosition.y - model.position.y) * 0.05;
                model.rotation.x += 0.01;
                model.rotation.y += 0.01;
                model.rotation.z += 0.01;
            }
        };

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();

        return () => {
            mountRef.current?.removeChild(renderer.domElement);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div ref={mountRef} style={{ position: 'relative' }}></div>
    );
};

export default SpaceScene;
