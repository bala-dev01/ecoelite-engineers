'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ---------- Simplex 3D noise GLSL ---------- */
const NOISE_GLSL = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(
    i.z+vec4(0.,i1.z,i2.z,1.))
    +i.y+vec4(0.,i1.y,i2.y,1.))
    +i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

/* ---------- Background shader ---------- */
const bgVert = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`;
const bgFrag = `
${NOISE_GLSL}
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
void main(){
  vec2 uv = vUv;
  float n1 = snoise(vec3(uv * 2.2 + uMouse * 0.08, uTime * 0.12)) * 0.5 + 0.5;
  float n2 = snoise(vec3(uv * 4.4 - uMouse * 0.05, uTime * 0.08 + 10.0)) * 0.5 + 0.5;
  float n = mix(n1, n2, 0.4);
  vec3 c1 = vec3(0.016, 0.051, 0.027); // --darker
  vec3 c2 = vec3(0.027, 0.102, 0.055); // --dark
  vec3 c3 = vec3(0.043, 0.122, 0.071); // --surface
  vec3 col = mix(c1, c2, n);
  col = mix(col, c3, n2 * 0.35);
  gl_FragColor = vec4(col, 1.0);
}`;

/* ---------- Leaf shape ---------- */
function createLeafGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.5);
  shape.bezierCurveTo(0.25, -0.25, 0.25, 0.25, 0, 0.5);
  shape.bezierCurveTo(-0.25, 0.25, -0.25, -0.25, 0, -0.5);
  const geo = new THREE.ShapeGeometry(shape, 6);
  geo.scale(0.18, 0.18, 0.18);
  return geo;
}

export default function WebGLScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;
    const leafCount = isMobile ? 80 : 180;
    const mouse = new THREE.Vector2(0, 0);

    /* Scene, camera, renderer */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false });
    } catch {
      // WebGL not available — graceful fallback (CSS background shows instead)
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x040d07);

    /* Background noise plane */
    const bgMat = new THREE.ShaderMaterial({
      vertexShader: bgVert,
      fragmentShader: bgFrag,
      uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2(0, 0) } },
      depthWrite: false,
    });
    const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMat);
    bgMesh.frustumCulled = false;
    bgMesh.renderOrder = -1;
    scene.add(bgMesh);

    /* Instanced leaves */
    const leafGeo = createLeafGeometry();
    const leafMat = new THREE.MeshBasicMaterial({
      color: 0x4caf50,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const instancedLeaves = new THREE.InstancedMesh(leafGeo, leafMat, leafCount);
    scene.add(instancedLeaves);

    /* Leaf random data */
    interface LeafData { x: number; y: number; z: number; rx: number; ry: number; rz: number; speed: number; drift: number; initialY: number }
    const leafData: LeafData[] = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < leafCount; i++) {
      const d: LeafData = {
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 10 + 5,
        z: (Math.random() - 0.5) * 8 - 2,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.5,
        drift: Math.random() * Math.PI * 2,
        initialY: 0,
      };
      d.initialY = d.y;
      leafData.push(d);
    }

    /* Event handlers */
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    /* Animate */
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      bgMat.uniforms.uTime.value = t;
      bgMat.uniforms.uMouse.value.lerp(mouse, 0.02);

      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.02;

      for (let i = 0; i < leafCount; i++) {
        const d = leafData[i];
        d.y -= d.speed * 0.008;
        if (d.y < -6) d.y = d.initialY + 2;
        d.rx += 0.005 * d.speed;
        d.ry += 0.008 * d.speed;
        d.rz += 0.003 * d.speed;
        const sx = Math.sin(t * 0.5 + d.drift) * 0.3;
        dummy.position.set(d.x + sx, d.y, d.z);
        dummy.rotation.set(d.rx, d.ry, d.rz);
        dummy.updateMatrix();
        instancedLeaves.setMatrixAt(i, dummy.matrix);
      }
      instancedLeaves.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer?.dispose();
      leafGeo.dispose();
      leafMat.dispose();
      bgMat.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="webgl-canvas" />;
}
