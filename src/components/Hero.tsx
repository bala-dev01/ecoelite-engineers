'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const VIDEOS = [
  { src: '/assets/videos/Mixed_Flow_Fan_Landing.mp4',            label: 'Mixed Flow Inline Fan' },
  { src: '/assets/videos/Circular_Inline_Fan_Landing.mp4',       label: 'Circular Inline Fan' },
  { src: '/assets/videos/Electrostatic_Air_Cleaner_Landing.mp4', label: 'Electrostatic Cleaner' },
  { src: '/assets/videos/Panels.mp4',                            label: 'Electrical Panel' },
  { src: '/assets/videos/Air_Conditioner.mp4',                   label: 'Air Conditioning' },
  { src: '/assets/videos/Heat_Pumps.mp4',                        label: 'Heat Pump' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const bgRefs   = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const barRefs  = useRef<(HTMLDivElement   | null)[]>([]);
  const rafRef   = useRef<number | null>(null);
  const locked   = useRef(false);

  const goTo = useCallback((next: number) => {
    if (next === active || locked.current) return;
    locked.current = true;
    setActive(next);
    setTimeout(() => { locked.current = false; }, 1000);
  }, [active]);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    bgRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = true;
      v.volume = 0;
      if (i === active) { v.currentTime = 0; v.play().catch(() => {}); }
      else              { v.pause(); }
    });

    cardRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = true;
      v.volume = 0;
      if (i === active) { v.currentTime = 0; v.play().catch(() => {}); }
      else              { v.pause(); v.currentTime = 1.5; }
    });

    // rAF-driven progress bar
    const bar = barRefs.current[active];
    const vid = bgRefs.current[active];
    if (bar && vid) {
      bar.style.width = '0%';
      const tick = () => {
        if (vid.duration) bar.style.width = `${(vid.currentTime / vid.duration) * 100}%`;
        if (!vid.ended && !vid.paused) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active]);

  const handleEnded = useCallback(() => {
    goTo((active + 1) % VIDEOS.length);
  }, [active, goTo]);

  return (
    <section className="hero" id="hero">

      {/* ─── Video background ─── */}
      <div className="hero-video-bg">
        {VIDEOS.map((v, i) => (
          <video
            key={v.src}
            ref={el => { bgRefs.current[i] = el; }}
            className={`hero-bg-video${i === active ? ' active' : ''}`}
            src={v.src}
            muted
            playsInline
            preload="auto"
            onEnded={i === active ? handleEnded : undefined}
          />
        ))}
        <div className="hero-video-overlay" />
        {/* subtle vignette */}
        <div className="hero-video-vignette" />
      </div>

      {/* ─── Content ─── */}
      <div className="hero-content">
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span className="hero-line"><span className="hero-line-inner">ECOELITE</span></span>
          </h1>
          <p className="hero-subtitle">
            <span className="hero-line"><span className="hero-line-inner">ENGINEERS</span></span>
          </p>
        </div>

        <p className="hero-tagline">
          {['Ventilation', '·', 'Air Purification', '·', 'Electrical Solutions'].map((w, i) => (
            <span key={i} className="tagline-word">{w}</span>
          ))}
        </p>

        <div className="hero-cta">
          <a href="#services" className="hero-btn magnetic-btn">
            Explore Our Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>

      {/* ─── Video thumbnail cards (bottom-right) ─── */}
      <div className="hero-vcards">
        {VIDEOS.map((v, i) => (
          <button
            key={v.src}
            className={`hero-vcard${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Switch to ${v.label}`}
          >
            {/* preview video */}
            <video
              ref={el => { cardRefs.current[i] = el; }}
              src={v.src}
              muted
              playsInline
              preload="metadata"
              loop
              className="hero-vcard-preview"
              onLoadedMetadata={e => {
                if (i !== active) (e.target as HTMLVideoElement).currentTime = 1.5;
              }}
            />

            {/* glass overlay with label */}
            <div className="hero-vcard-glass">
              <span className="hero-vcard-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="hero-vcard-label">{v.label}</span>
            </div>

            {/* play icon shown on inactive cards */}
            {i !== active && (
              <div className="hero-vcard-play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
            )}

            {/* progress bar for active */}
            <div className="hero-vcard-track">
              <div
                ref={el => { barRefs.current[i] = el; }}
                className="hero-vcard-bar"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
