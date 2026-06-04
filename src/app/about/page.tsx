'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimations, useTiltCards, useMagneticButtons } from '@/hooks/useAnimations';

const STATS = [
  { value: '12+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '35%', label: 'Avg Energy Saved' },
];

const ADVANTAGES = [
  {
    num: '01',
    title: 'Energy Efficient by Design',
    desc: 'Our systems are engineered to consume up to 40% less energy than conventional alternatives — delivering substantial cost savings and a reduced carbon footprint.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    num: '02',
    title: 'Precision Engineering',
    desc: 'Every product is sourced, validated and installed to the highest standards, backed by advanced technical specifications and real-world performance data from our trusted manufacturing partners.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    num: '03',
    title: 'Trusted Supply Chain',
    desc: 'We partner exclusively with established manufacturers for ventilation, air purification and electrical panels — ensuring product quality, spares availability and full warranty coverage on every installation.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    num: '04',
    title: 'End-to-End Service',
    desc: 'From site survey and product selection through to installation, commissioning and after-sales support — we handle the entire project lifecycle so you have a single point of accountability.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
];

export default function AboutPage() {
  useScrollAnimations();
  useTiltCards();
  useMagneticButtons();

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <Image
            src="/assets/products/Mixed_Flow_Fan.jpeg"
            alt="Ecoelite Engineers"
            fill
            priority
            className="inner-hero-img"
            style={{ objectFit: 'cover' }}
          />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <div className="section-label"><span className="label-line" />About Us</div>
          <h1 className="inner-hero-title">
            Engineering a<br />Greener Bangalore
          </h1>
          <p className="inner-hero-desc">
            Ventilation · Air Purification · Electrical Solutions
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about" id="story">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-label"><span className="label-line" />Our Story</div>
              <h2 className="section-title">
                <span className="line-wrapper"><span className="line-inner">Who We Are</span></span>
              </h2>
              <p className="about-description">
                Ecoelite Engineers is a Bengaluru-based engineering firm specialising in
                ventilation, air purification and electrical panel solutions for commercial
                and industrial facilities. With over a decade of on-the-ground experience,
                we supply and install ventilation fans, electrostatic air cleaners
                and electrical panels for a wide range of commercial and industrial clients.
              </p>
              <p className="about-description" style={{ marginTop: '1rem' }}>
                Our team brings deep technical knowledge to every project — from
                selecting the right fan size for a basement car park to designing
                AHU control panels for large commercial buildings. We pride ourselves
                on honest advice, reliable installation and attentive after-sales support.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="cta-btn magnetic-btn" style={{ fontSize: '0.75rem', padding: '0.9rem 2rem' }}>
                  Our Services
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
                <Link href="/contact" className="hero-btn magnetic-btn" style={{ fontSize: '0.75rem', padding: '0.9rem 2rem', background: 'transparent', color: 'var(--lime)' }}>
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <Image src="/EEE.png" alt="Ecoelite Engineers" width={400} height={400} className="about-logo-float" />
              </div>
              <div className="about-image-border" />
              <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
                OFFICE PHOTO — COMING SOON
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            {STATS.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat-number">{s.value}</div>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="advantages">
        <div className="container">
          <div className="advantages-header section-header">
            <div className="section-label"><span className="label-line" />Why Choose Us</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">The Ecoelite</span></span>
              <span className="line-wrapper"><span className="line-inner">Advantage</span></span>
            </h2>
          </div>
          <div className="advantage-stack">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="advantage-card" style={{ '--card-index': i } as React.CSSProperties}>
                <div className="advantage-card-inner">
                  <span className="advantage-number">{a.num}</span>
                  <div className="advantage-content">
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                  <svg className="advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={a.icon} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="line-wrapper"><span className="line-inner">Ready to Start</span></span>
              <span className="line-wrapper"><span className="line-inner">Your Project?</span></span>
            </h2>
            <p className="cta-text">
              Talk to our team today. We&apos;ll assess your requirements and recommend the right solution.
            </p>
            <Link href="/contact" className="cta-btn magnetic-btn">
              Contact Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
