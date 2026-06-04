'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimations, useTiltCards, useMagneticButtons } from '@/hooks/useAnimations';

/* ─── Mixed Flow Fan models ─── */
const MF_MODELS = [
  { name: 'MF-100', power: '30W',  airflow: '205 m³/h',  pressure: '132 Pa', noise: '31 dB(A)' },
  { name: 'MF-150', power: '58W',  airflow: '530 m³/h',  pressure: '300 Pa', noise: '33 dB(A)' },
  { name: 'MF-200', power: '140W', airflow: '840 m³/h',  pressure: '350 Pa', noise: '63 dB(A)' },
  { name: 'MF-250', power: '200W', airflow: '1400 m³/h', pressure: '489 Pa', noise: '66 dB(A)' },
  { name: 'MF-315', power: '400W', airflow: '2200 m³/h', pressure: '690 Pa', noise: '69 dB(A)' },
];

/* ─── Circular Inline Fan models ─── */
const CI_MODELS = [
  { name: 'CI-100', power: '25W',  airflow: '180 m³/h',  pressure: '120 Pa', noise: '30 dB(A)' },
  { name: 'CI-150', power: '45W',  airflow: '450 m³/h',  pressure: '250 Pa', noise: '32 dB(A)' },
  { name: 'CI-200', power: '95W',  airflow: '750 m³/h',  pressure: '300 Pa', noise: '38 dB(A)' },
  { name: 'CI-250', power: '150W', airflow: '1200 m³/h', pressure: '420 Pa', noise: '42 dB(A)' },
  { name: 'CI-315', power: '350W', airflow: '1900 m³/h', pressure: '580 Pa', noise: '48 dB(A)' },
];

/* ─── Panels ─── */
const PANELS = [
  {
    name: 'AHU Starter Panels',
    img: '/assets/products/AH_Panels.jpeg',
    desc: 'Purpose-built for Air Handling Unit motor control — with soft-start, auto/manual modes, motor overload protection and inter-lock capability for multi-unit installations.',
    features: ['Soft-start / DOL starters', 'Auto & Manual modes', 'Motor overload protection', 'Multi-unit interlocking', 'Ammeter & voltmeter', 'Emergency stop circuit'],
  },
  {
    name: 'LT Distribution Panels',
    img: '/assets/products/LT_Panels.jpeg',
    desc: 'Low-tension distribution panels for commercial and industrial power distribution — complete with MCBs, MCCBs, bus bars and metering for accurate load monitoring.',
    features: ['MCCB incomer protection', 'Sub-circuit MCBs', 'Copper bus bars', 'Energy metering', 'Earth fault protection', 'IP54 enclosure'],
  },
  {
    name: 'Basement Ventilation Panels',
    img: '/assets/products/Basement_Ventilation_Panel.jpeg',
    desc: 'Dedicated control panels for basement car park ventilation — integrated with CO sensors and jet fan controllers to automatically regulate fresh-air extract fans.',
    features: ['CO sensor integration', 'Jet fan controllers', 'Auto/manual fan control', 'Alarm annunciator', 'Fire signal interface', 'BMS connectivity'],
  },
  {
    name: 'CPM Panels',
    img: '/assets/products/CPM_Panels.jpeg',
    desc: 'Centralised Power Management panels for monitoring and controlling multiple electrical circuits from a single interface — with load scheduling and energy logging.',
    features: ['Multi-circuit monitoring', 'Load scheduling', 'Energy data logging', 'Remote on/off control', 'Demand management', 'SCADA-ready outputs'],
  },
];

/* Reusable spec table */
function SpecTable({ models }: { models: typeof MF_MODELS }) {
  return (
    <div className="prod-spec-table">
      <div className="prod-spec-head">
        <span>Model</span><span>Power</span><span>Airflow</span><span>Pressure</span><span>Noise</span>
      </div>
      {models.map((m) => (
        <div key={m.name} className="prod-spec-row">
          <span className="prod-spec-model">{m.name}</span>
          <span>{m.power}</span>
          <span>{m.airflow}</span>
          <span>{m.pressure}</span>
          <span>{m.noise}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  useScrollAnimations();
  useTiltCards();
  useMagneticButtons();

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <Image src="/assets/products/Mixed_Flow_Fan.jpeg" alt="Products" fill priority className="inner-hero-img" style={{ objectFit: 'cover' }} />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <div className="section-label"><span className="label-line" />What We Supply</div>
          <h1 className="inner-hero-title">Our Products</h1>
          <p className="inner-hero-desc">Ventilation Fans · Air Cleaners · Electrical Panels</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          01 · MIXED FLOW FAN
      ══════════════════════════════════════ */}
      <section className="prod-section">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />01 — Ventilation</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Mixed Flow</span></span>
              <span className="line-wrapper"><span className="line-inner">Inline Fan</span></span>
            </h2>
          </div>
          <div className="prod-layout">
            <div className="prod-img-col">
              <div className="prod-natural-img">
                <Image src="/assets/products/Mixed_Flow_Fan.jpeg" alt="Mixed Flow Fan" width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                <p className="prod-img-label">Mixed Flow Inline Fan — MF Series</p>
              </div>
              <div className="prod-feature-pills">
                {['Mixed Flow Impeller', 'IP44 Rated', 'Low Noise', '50,000 h Life', '-20°C to 60°C', 'Supply & Exhaust'].map(f => (
                  <span key={f} className="feature-tag">{f}</span>
                ))}
              </div>
            </div>
            <div className="prod-text-col">
              <p className="svc-desc">
                High-performance mixed flow inline fans for residential, commercial and industrial ducted ventilation. Available in five duct sizes from 100 mm to 315 mm, the MF Series combines the best characteristics of axial and centrifugal fans — delivering high static pressure with low noise at every duty point.
              </p>
              <h4 className="svc-col-title" style={{ marginBottom: '0.75rem' }}>Model Specifications</h4>
              <SpecTable models={MF_MODELS} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          02 · CIRCULAR INLINE FAN
      ══════════════════════════════════════ */}
      <section className="prod-section prod-section-alt">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />02 — Ventilation</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Circular</span></span>
              <span className="line-wrapper"><span className="line-inner">Inline Fan</span></span>
            </h2>
          </div>
          <div className="prod-layout prod-layout-reverse">
            <div className="prod-text-col">
              <p className="svc-desc">
                Compact circular inline duct fans designed for kitchen, bathroom, ensuite and office extract and supply air applications. The CI Series mounts in any position, connects directly to standard circular ducting and can be removed for maintenance without disturbing the duct run.
              </p>
              <h4 className="svc-col-title" style={{ marginBottom: '0.75rem' }}>Model Specifications</h4>
              <SpecTable models={CI_MODELS} />
              <div className="prod-feature-pills" style={{ marginTop: '1.5rem' }}>
                {['Circular Inline Design', 'IP44 Rated', 'Compact & Quiet', 'Direct Duct Connection', 'Supply & Exhaust', 'Easy Maintenance'].map(f => (
                  <span key={f} className="feature-tag">{f}</span>
                ))}
              </div>
            </div>
            <div className="prod-img-col">
              <div className="prod-natural-img">
                <Image src="/assets/products/Circular_Inline_Fan.jpeg" alt="Circular Inline Fan" width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                <p className="prod-img-label">Circular Inline Duct Fan — CI Series</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          03 · ELECTROSTATIC AIR CLEANER
      ══════════════════════════════════════ */}
      <section className="prod-section">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />03 — Air Purification</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Electrostatic Air</span></span>
              <span className="line-wrapper"><span className="line-inner">Cleaner (Dry Scrubber)</span></span>
            </h2>
          </div>
          <div className="prod-layout">
            <div className="prod-img-col">
              <div className="prod-natural-img">
                <Image src="/assets/products/Electrostatic_Air_Cleaner.jpeg" alt="Electrostatic Air Cleaner" width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                <p className="prod-img-label">KET Series — Electrostatic Air Cleaner</p>
              </div>
            </div>
            <div className="prod-text-col">
              <p className="svc-desc">
                The KET Series electrostatic air cleaner uses charged aluminium plates to capture grease, smoke and particles as fine as 0.1 micron — with up to 99% filtration efficiency. No disposable filters, no costly replacements; just periodic cleaning. Optional UVGI ozone lamps and odour remover modules extend the system for the most demanding environments.
              </p>
              <div className="svc-two-col" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <h4 className="svc-col-title">Specifications</h4>
                  <ul className="svc-list">
                    {[
                      'Series: KET (Smoke Eater)',
                      'Technology: ESP',
                      'Air Volume: 7,500–10,000 CFM',
                      'Efficiency: 95–99%',
                      'Power: 190 W',
                      'Material: Stainless Steel',
                      'Operating Temp: up to 80°C',
                      'Warranty: 1 Year',
                    ].map(s => <li key={s}><span className="svc-dot" />{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="svc-col-title">Optional Add-ons</h4>
                  <ul className="svc-list">
                    {[
                      'UVGI Ozone System',
                      'AutoKleen Wash',
                      'Odour Remover Module',
                      'Carbon V-Bank Filter',
                      'BMS Integration',
                      'Remote Monitoring',
                    ].map(s => <li key={s}><span className="svc-dot" />{s}</li>)}
                  </ul>
                </div>
              </div>
              <a href="https://espair.co.in" target="_blank" rel="noopener noreferrer" className="product-ext-link magnetic-btn">
                More Details at ESPair ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          04 · ELECTRICAL PANELS
      ══════════════════════════════════════ */}
      <section className="prod-section prod-section-alt">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />04 — Electrical Solutions</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Electrical</span></span>
              <span className="line-wrapper"><span className="line-inner">Panels</span></span>
            </h2>
            <p className="svc-desc" style={{ maxWidth: 680 }}>
              Designed and built in partnership with Acton Power Solutions, Bengaluru. Each panel is custom-engineered to your facility&apos;s load profile, compliance requirements and site conditions.
            </p>
          </div>

          <div className="panels-grid">
            {PANELS.map((p) => (
              <div key={p.name} className="panel-section-card" data-tilt>
                <div className="panel-section-img">
                  <Image src={p.img} alt={p.name} width={600} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div className="panel-section-body">
                  <h3 className="panel-section-title">{p.name}</h3>
                  <p className="panel-section-desc">{p.desc}</p>
                  <ul className="panel-section-features">
                    {p.features.map(f => (
                      <li key={f}><span className="svc-dot" />{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="https://www.actonpower.in" target="_blank" rel="noopener noreferrer" className="cta-btn magnetic-btn">
              Full Details at Acton Power Solutions ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="line-wrapper"><span className="line-inner">Need Help Choosing</span></span>
              <span className="line-wrapper"><span className="line-inner">the Right Product?</span></span>
            </h2>
            <p className="cta-text">Our team will assess your site requirements and recommend the right solution.</p>
            <Link href="/contact" className="cta-btn magnetic-btn">
              Get a Recommendation
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
