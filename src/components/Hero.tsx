'use client';

export default function Hero() {
  return (
    <section className="hero" id="hero">
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
          {['Sustainable', 'Engineering', '·', 'HVAC', '&', 'Electrical', 'Solutions'].map((w, i) => (
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

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
