import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface EarthGlobe3DProps {
  className?: string;
  isPaused?: boolean;
}

export const EarthGlobe3D: React.FC<EarthGlobe3DProps> = ({
  className = '',
  isPaused = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    // Position camera slightly offset to keep Earth on the right half
    const isMobile = width < 768;
    camera.position.set(isMobile ? 0 : 0.85, isMobile ? -0.2 : 0, 4.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. High-Fidelity Procedural Earth Texture Generator
    const createEarthTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Deep ocean gradient
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      oceanGrad.addColorStop(0, '#041724');
      oceanGrad.addColorStop(0.5, '#082f49');
      oceanGrad.addColorStop(1, '#041724');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Oceanic shelf glow and currents
      ctx.fillStyle = '#0e4a6a';
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvas.width;
        const y = 150 + Math.random() * (canvas.height - 300);
        const r = 20 + Math.random() * 80;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(73, 206, 195, 0.04)';
        ctx.fill();
      }

      // Draw recognizable realistic continents with geographic approximations
      // Polar ice caps
      ctx.fillStyle = '#ebf4f6';
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, 35, canvas.width / 2, 45, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, canvas.height - 35, canvas.width / 2, 55, 0, 0, Math.PI * 2);
      ctx.fill();

      // Helper to paint landmass with terrain shades
      const paintLand = (
        points: [number, number][],
        baseColor = '#1d6e49',
        highColor = '#d5ad65',
        fringeColor = '#28A77B'
      ) => {
        // Shelf halo
        ctx.strokeStyle = fringeColor;
        ctx.lineWidth = 14;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        points.forEach(([x, y], idx) => {
          const px = (x / 360) * canvas.width;
          const py = ((90 - y) / 180) * canvas.height;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();
        ctx.stroke();

        // Main Land Fill
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = baseColor;
        ctx.beginPath();
        points.forEach(([x, y], idx) => {
          const px = (x / 360) * canvas.width;
          const py = ((90 - y) / 180) * canvas.height;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();
        ctx.fill();

        // Highlands / Sahara / Desert accents
        ctx.fillStyle = highColor;
        ctx.globalAlpha = 0.45;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      };

      // Africa
      paintLand(
        [
          [350, 35], [20, 36], [32, 31], [42, 28], [51, 12], [44, -5],
          [38, -15], [32, -26], [26, -34], [18, -34], [12, -18], [9, 4],
          [0, 6], [-16, 12], [-17, 21], [-6, 36], [350, 35]
        ],
        '#226848', '#b89445', '#49CEC3'
      );

      // Eurasia (Europe + Asia + India)
      paintLand(
        [
          [-10, 36], [2, 50], [10, 58], [28, 71], [60, 68], [110, 74],
          [170, 68], [140, 50], [130, 42], [120, 32], [105, 21], [100, 5],
          [92, 16], [82, 10], [77, 8], [72, 20], [68, 25], [58, 24],
          [48, 30], [36, 36], [28, 41], [14, 45], [-5, 43], [-10, 36]
        ],
        '#1f734c', '#9c772f', '#28A77B'
      );

      // Indian Subcontinent (prominent, lush green & golden Indo-Gangetic & Deccan plateau)
      paintLand(
        [
          [68, 24], [72, 31], [78, 34], [88, 28], [92, 24],
          [88, 21], [84, 18], [80, 13], [78, 8], [77, 10],
          [74, 15], [72, 19], [68, 24]
        ],
        '#1c784e', '#d5ad65', '#49CEC3'
      );

      // Southeast Asia & Indonesia
      paintLand([[98, 5], [104, 1], [108, -7], [100, -5], [98, 5]], '#28A77B', '#1c784e', '#49CEC3');
      paintLand([[110, 3], [118, -4], [115, -8], [108, -2], [110, 3]], '#28A77B', '#1c784e', '#49CEC3');

      // Australia
      paintLand(
        [
          [115, -22], [125, -15], [136, -12], [142, -10], [150, -22],
          [153, -28], [148, -38], [136, -35], [125, -34], [115, -34], [113, -26]
        ],
        '#9e6e30', '#c89547', '#28A77B'
      );

      // North America
      paintLand(
        [
          [-168, 66], [-150, 70], [-130, 70], [-90, 75], [-60, 60],
          [-65, 44], [-75, 35], [-80, 26], [-90, 22], [-97, 18],
          [-105, 23], [-115, 30], [-124, 38], [-128, 50], [-150, 60], [-168, 66]
        ],
        '#236b47', '#a68239', '#28A77B'
      );

      // South America
      paintLand(
        [
          [-76, 12], [-60, 8], [-50, -2], [-35, -6], [-38, -15],
          [-48, -28], [-58, -38], [-68, -54], [-75, -48], [-72, -35],
          [-70, -18], [-80, -4], [-78, 4], [-76, 12]
        ],
        '#1b6f48', '#88672d', '#49CEC3'
      );

      // Add atmospheric texture noise & vegetation variations
      for (let i = 0; i < 600; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(73, 206, 195, 0.08)' : 'rgba(213, 173, 101, 0.06)';
        ctx.fillRect(x, y, 2 + Math.random() * 4, 2 + Math.random() * 4);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      return texture;
    };

    // 3. Clouds Texture Generator
    const createCloudTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Swirling realistic cloud bands
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (let i = 0; i < 700; i++) {
        const x = Math.random() * canvas.width;
        // Concentrate in tropical and temperate latitudes
        const latZone = (Math.random() - 0.5) * 1.6;
        const y = canvas.height * (0.5 + latZone * 0.45);
        const radiusX = 20 + Math.random() * 120;
        const radiusY = 10 + Math.random() * 35;
        const rot = (Math.random() - 0.5) * 0.4;

        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, rot, 0, Math.PI * 2);
        const alpha = 0.08 + Math.random() * 0.32;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      return texture;
    };

    // 4. Create Earth Globe
    const globeGroup = new THREE.Group();
    // Axial tilt of Earth: 23.4 degrees
    globeGroup.rotation.z = (23.4 * Math.PI) / 180;
    scene.add(globeGroup);

    // Planet Sphere
    const earthRadius = 1.65;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthTexture = createEarthTexture();

    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // Clouds Sphere
    const cloudGeometry = new THREE.SphereGeometry(earthRadius * 1.018, 64, 64);
    const cloudTexture = createCloudTexture();
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.72,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    globeGroup.add(cloudsMesh);

    // Atmospheric Fresnel Glow Rim
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius * 1.09, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          vec3 atmosphereColor = mix(vec3(0.03, 0.5, 0.47), vec3(0.28, 0.81, 0.76), intensity);
          gl_FragColor = vec4(atmosphereColor, intensity * 0.95);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);
    atmosphereMesh.position.copy(globeGroup.position);

    // 5. Lighting Setup (Simulating Sun in space)
    const sunLight = new THREE.DirectionalLight(0xfff6dd, 2.2);
    sunLight.position.set(4, 2.5, 3.5);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x073b43, 0.6);
    scene.add(ambientLight);

    // Soft aqua rim light from opposite side
    const fillLight = new THREE.DirectionalLight(0x49cec3, 0.5);
    fillLight.position.set(-3, -1.5, -2);
    scene.add(fillLight);

    // Starfield particles in deep space background
    const starCount = 350;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 30;
      starPositions[i + 1] = (Math.random() - 0.5) * 20;
      starPositions[i + 2] = -5 - Math.random() * 15;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xebf4f6,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 6. Natural botanical floating leaf particles in foreground for botanical life feel
    const leafCount = 18;
    const leafGeometry = new THREE.BufferGeometry();
    const leafPositions = new Float32Array(leafCount * 3);
    const leafVelocities: { x: number; y: number; rot: number }[] = [];
    for (let i = 0; i < leafCount; i++) {
      leafPositions[i * 3] = (Math.random() - 0.5) * 6;
      leafPositions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      leafPositions[i * 3 + 2] = 1.5 + Math.random() * 1.5;
      leafVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: -0.002 - Math.random() * 0.003,
        rot: (Math.random() - 0.5) * 0.01,
      });
    }
    leafGeometry.setAttribute('position', new THREE.BufferAttribute(leafPositions, 3));
    const leafMaterial = new THREE.PointsMaterial({
      color: 0x28a77b,
      size: 0.09,
      transparent: true,
      opacity: 0.45,
    });
    const leaves = new THREE.Points(leafGeometry, leafMaterial);
    scene.add(leaves);

    // Initial orientation focusing on the vibrant Eastern hemisphere / India
    earthMesh.rotation.y = 1.4;
    cloudsMesh.rotation.y = 1.4;

    // Mouse drift parallax interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = nx * 0.15;
      targetY = ny * 0.1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // 7. Animation Loop (60 FPS smooth rotation)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (!isPausedRef.current) {
        // Continuous, authentic slow rotation
        earthMesh.rotation.y += delta * 0.065;
        // Clouds move slightly faster
        cloudsMesh.rotation.y += delta * 0.082;
      }

      // Parallax smooth interpolation
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;

      globeGroup.position.x = (isMobile ? 0 : 0.85) + mouseX;
      globeGroup.position.y = (isMobile ? -0.2 : 0) + mouseY;
      atmosphereMesh.position.copy(globeGroup.position);

      // Subtle slow breathing drift
      const elapsed = clock.getElapsedTime();
      camera.position.y = (isMobile ? -0.2 : 0) + Math.sin(elapsed * 0.4) * 0.04;

      // Animate subtle foliage particles
      const posAttr = leafGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < leafCount; i++) {
        let py = posAttr.getY(i) + leafVelocities[i].y;
        let px = posAttr.getX(i) + Math.sin(elapsed + i) * 0.002;
        if (py < -3) py = 3;
        posAttr.setY(i, py);
        posAttr.setX(i, px);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      const mobile = newWidth < 768;

      camera.aspect = newWidth / newHeight;
      camera.position.x = mobile ? 0 : 0.85;
      camera.position.y = mobile ? -0.2 : 0;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      earthGeometry.dispose();
      cloudGeometry.dispose();
      atmosphereGeometry.dispose();
      earthMaterial.dispose();
      cloudMaterial.dispose();
      atmosphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
