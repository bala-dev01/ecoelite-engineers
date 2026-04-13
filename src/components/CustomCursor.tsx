'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.1, ease: 'power2.out' });
      gsap.to(ring, { x: pos.x, y: pos.y, duration: 0.25, ease: 'power2.out' });
    };

    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');
    const onTextEnter = () => document.body.classList.add('cursor-text');
    const onTextLeave = () => document.body.classList.remove('cursor-text');

    window.addEventListener('mousemove', onMove);

    const interactiveEls = document.querySelectorAll('a, button, [data-tilt], .model-card');
    const textEls = document.querySelectorAll('input, textarea');

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    textEls.forEach((el) => {
      el.addEventListener('mouseenter', onTextEnter);
      el.addEventListener('mouseleave', onTextLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      textEls.forEach((el) => {
        el.removeEventListener('mouseenter', onTextEnter);
        el.removeEventListener('mouseleave', onTextLeave);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
