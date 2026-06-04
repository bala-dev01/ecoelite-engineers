'use client';

// SVG ring circumference: 2π × 88 ≈ 552.9
// strokeDashoffset animated 552.9 → 0 by GSAP

export default function Preloader() {
  return (
    <div id="preloader">
      <div className="pl-inner">

        {/* Logo + spinning ring */}
        <div className="pl-logo-wrap">
          <svg className="pl-ring" viewBox="0 0 200 200" fill="none">
            {/* Track */}
            <circle cx="100" cy="100" r="88" stroke="rgba(123,199,77,0.1)" strokeWidth="1.5" />
            {/* Fill — animated via GSAP */}
            <circle
              className="pl-ring-fill"
              cx="100" cy="100" r="88"
              stroke="#7bc74d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="552.9"
              strokeDashoffset="552.9"
              transform="rotate(-90 100 100)"
            />
            {/* Outer decorative dots */}
            <circle cx="100" cy="10"  r="2.5" fill="rgba(123,199,77,0.35)" />
            <circle cx="190" cy="100" r="2.5" fill="rgba(123,199,77,0.35)" />
            <circle cx="100" cy="190" r="2.5" fill="rgba(123,199,77,0.35)" />
            <circle cx="10"  cy="100" r="2.5" fill="rgba(123,199,77,0.35)" />
          </svg>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/EEE.png" alt="Ecoelite" className="pl-logo-img" />
        </div>

        {/* Brand text — each line clipped, span slides up */}
        <div className="pl-brand">
          <div className="pl-brand-line">
            <span className="pl-brand-main">ECOELITE</span>
          </div>
          <div className="pl-brand-line">
            <span className="pl-brand-sub">ENGINEERS</span>
          </div>
        </div>

        {/* Counter */}
        <div className="pl-count-wrap">
          <span className="preloader-counter">0</span>
          <span className="pl-count-pct">%</span>
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="pl-bar">
        <div className="preloader-bar-inner" />
      </div>
    </div>
  );
}
