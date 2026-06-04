'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimations, useTiltCards, useMagneticButtons } from '@/hooks/useAnimations';

const SERVICES = [
  {
    num: '01',
    label: 'Ventilation',
    title: 'Ventilation Solutions',
    desc: 'We supply and install Mixed Flow and Circular Inline fans — engineered for high performance, low noise and energy-efficient ducted ventilation across residential, commercial and industrial applications.',
    images: [
      { src: '/assets/products/Mixed_Flow_Fan.jpeg',      caption: 'Mixed Flow Fan' },
      { src: '/assets/products/Circular_Inline_Fan.jpeg', caption: 'Circular Inline Fan' },
    ],
    products: [
      'Mixed Flow Inline Fans (100–315 mm)',
      'Circular Inline Duct Fans',
      'EC Motor Variants',
      'Speed Controllers & Filter Boxes',
    ],
    applications: ['Commercial Offices', 'Basement Car Parks', 'Industrial Facilities', 'Residential Buildings', 'Hotels & Apartments'],
    partnerLabel: null,
    partnerHref: null,
  },
  {
    num: '02',
    label: 'Air Purification',
    title: 'Air Purification Solutions',
    desc: 'Our ESPair range of electrostatic air cleaners and UVGI systems removes grease, smoke, cooking odours and airborne pathogens from commercial kitchens and HVAC systems — with up to 99% filtration efficiency and no disposable filters.',
    images: [
      { src: '/assets/products/Electrostatic_Air_Cleaner.jpeg', caption: 'Electrostatic Air Cleaner (Dry Scrubber)' },
    ],
    products: [
      'KET Series Electrostatic Air Cleaners',
      'Kitchen Exhaust Scrubbers',
      'UVGI Systems for AC Ducts',
      'Odour Remover Modules',
      'AutoKleen Wash Systems',
    ],
    applications: ['Commercial Kitchens & Restaurants', 'Food Processing Plants', 'Hospitals & Clinics', 'Office HVAC Systems', 'Welding & CNC Shops'],
    partnerLabel: 'ESPair',
    partnerHref: 'https://espair.co.in',
  },
  {
    num: '03',
    label: 'Electrical',
    title: 'Electrical Solutions',
    desc: 'In partnership with Acton Power Solutions, Bengaluru, we design, supply and install a complete range of electrical control panels — from AHU starter panels for air handling units to CPM panels for centralised power management.',
    images: [
      { src: '/assets/products/Panels.jpeg',              caption: 'Electrical Control Panels' },
      { src: '/assets/products/LT_Panels.jpeg',            caption: 'LT & Distribution Panels' },
    ],
    products: [
      'AHU Starter Panels',
      'LT Distribution Panels',
      'Basement Ventilation Control Panels',
      'CPM Panels',
      'APFC & Capacitor Panels',
    ],
    applications: ['Commercial Buildings', 'Industrial Facilities', 'Data Centres', 'Hospitals', 'Shopping Complexes'],
    partnerLabel: 'Acton Power Solutions',
    partnerHref: 'https://www.actonpower.in',
  },
];

export default function ServicesPage() {
  useScrollAnimations();
  useTiltCards();
  useMagneticButtons();

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <Image src="/assets/products/Circular_Inline_Fan.jpeg" alt="Engineering Services" fill priority className="inner-hero-img" style={{ objectFit: 'cover' }} />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <div className="section-label"><span className="label-line" />What We Do</div>
          <h1 className="inner-hero-title">Engineering<br />Services</h1>
          <p className="inner-hero-desc">Ventilation · Air Purification · Electrical Solutions</p>
        </div>
      </section>

      {/* ── Service sections ── */}
      {SERVICES.map((s, i) => (
        <section key={i} className={`svc-section${i % 2 === 1 ? ' svc-section-alt' : ''}`}>
          <div className="container">
            <div className="svc-grid">

              {/* ── Images side ── */}
              <div className={`svc-img-wrap${i % 2 === 1 ? ' order-2' : ''}`}>
                {/* Primary large image */}
                <div className="prod-natural-img">
                  <span className="svc-img-badge" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 2 }}>{s.label}</span>
                  <Image src={s.images[0].src} alt={s.images[0].caption} width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
                  <p className="prod-img-label">{s.images[0].caption}</p>
                </div>
                {s.images[1] && (
                  <div className="prod-natural-img">
                    <Image src={s.images[1].src} alt={s.images[1].caption} width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
                    <p className="prod-img-label">{s.images[1].caption}</p>
                  </div>
                )}
              </div>

              {/* ── Text side ── */}
              <div className="svc-text">
                <div className="section-label"><span className="label-line" />{s.num}</div>
                <h2 className="section-title">
                  <span className="line-wrapper"><span className="line-inner">{s.title}</span></span>
                </h2>
                <p className="svc-desc">{s.desc}</p>

                <div className="svc-two-col">
                  <div>
                    <h4 className="svc-col-title">Products Included</h4>
                    <ul className="svc-list">
                      {s.products.map((p) => (
                        <li key={p}><span className="svc-dot" />{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="svc-col-title">Applications</h4>
                    <ul className="svc-list">
                      {s.applications.map((a) => (
                        <li key={a}><span className="svc-dot" />{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <Link href="/products" className="product-ext-link magnetic-btn">
                    View Products
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                  {s.partnerHref && (
                    <a href={s.partnerHref} target="_blank" rel="noopener noreferrer" className="product-ext-link" style={{ opacity: 0.65 }}>
                      {s.partnerLabel} ↗
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="line-wrapper"><span className="line-inner">Need a Custom</span></span>
              <span className="line-wrapper"><span className="line-inner">Solution?</span></span>
            </h2>
            <p className="cta-text">Every facility is different. Get in touch and we&apos;ll design the right combination of solutions for your project.</p>
            <Link href="/contact" className="cta-btn magnetic-btn">
              Talk to Us
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
