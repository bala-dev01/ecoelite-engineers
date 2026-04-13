'use client';

import Image from 'next/image';

const STATS = [
  { value: 12, suffix: '+', label: 'Years\nExperience' },
  { value: 500, suffix: '+', label: 'Projects\nCompleted' },
  { value: 98, suffix: '%', label: 'Client\nSatisfaction' },
  { value: 35, suffix: '%', label: 'Energy\nSaved Avg' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label">
              <span className="label-line" />About Us
            </div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Engineering a</span></span>
              <span className="line-wrapper"><span className="line-inner">Greener Future</span></span>
            </h2>
            <p className="about-description">
              Ecoelite Engineers specialises in cutting-edge HVAC and electrical
              solutions designed for energy efficiency and environmental
              responsibility. From commercial ventilation systems to smart
              building integrations, we deliver precision-engineered solutions
              that reduce carbon footprints while maximising performance.
            </p>
          </div>
          <div className="about-image-wrapper" data-animate="reveal-image">
            <div className="about-image-placeholder">
              <Image src="/EEE.png" alt="Ecoelite Engineers" width={400} height={400} className="about-logo-float" />
            </div>
            <div className="about-image-border" />
          </div>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-number">
                <span data-counter data-target={s.value}>0</span>
                <span className="stat-suffix">{s.suffix}</span>
              </div>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
