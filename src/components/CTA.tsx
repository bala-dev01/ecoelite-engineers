'use client';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            <span className="line-wrapper"><span className="line-inner">Ready to Build a</span></span>
            <span className="line-wrapper"><span className="line-inner">Sustainable Future?</span></span>
          </h2>
          <p className="cta-text">
            Partner with Ecoelite Engineers and transform your infrastructure with
            energy-efficient, precision-engineered HVAC and electrical solutions
            built for tomorrow.
          </p>
          <a href="#contact" className="cta-btn magnetic-btn">
            Start Your Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
