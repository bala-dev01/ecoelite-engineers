'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── Exhaust Fans data ─────────────────────────────── */
const EMF_MODELS = [
  { name: 'EMF-100', power: '30W', specs: { 'Duct Size': '100 mm', 'Airflow': '205 m³/h', 'Pressure': '132 Pa', 'Noise': '31 dB(A)' } },
  { name: 'EMF-150', power: '58W', specs: { 'Duct Size': '150 mm', 'Airflow': '530 m³/h', 'Pressure': '300 Pa', 'Noise': '33 dB(A)' } },
  { name: 'EMF-200', power: '140W', specs: { 'Duct Size': '200 mm', 'Airflow': '840 m³/h', 'Pressure': '350 Pa', 'Noise': '63 dB(A)' } },
  { name: 'EMF-250', power: '200W', specs: { 'Duct Size': '250 mm', 'Airflow': '1400 m³/h', 'Pressure': '489 Pa', 'Noise': '66 dB(A)' } },
  { name: 'EMF-315', power: '400W', specs: { 'Duct Size': '315 mm', 'Airflow': '2200 m³/h', 'Pressure': '690 Pa', 'Noise': '69 dB(A)' } },
];

const EMF_FEATURES = ['Mixed Flow Impeller', 'IP44 Rated', 'Low Noise', '50,000 h Bearing', '-20°C to 60°C', 'Easy Maintenance'];

const ECF_MODELS = [
  { name: 'ECF-150', power: '45W', specs: { 'Duct Size': '150 mm', 'Airflow': '450 m³/h', 'Pressure': '250 Pa', 'Noise': '32 dB(A)' } },
  { name: 'ECF-200', power: '95W', specs: { 'Duct Size': '200 mm', 'Airflow': '750 m³/h', 'Pressure': '300 Pa', 'Noise': '38 dB(A)' } },
  { name: 'ECF-250', power: '150W', specs: { 'Duct Size': '250 mm', 'Airflow': '1200 m³/h', 'Pressure': '420 Pa', 'Noise': '42 dB(A)' } },
  { name: 'ECF-315', power: '350W', specs: { 'Duct Size': '315 mm', 'Airflow': '1900 m³/h', 'Pressure': '580 Pa', 'Noise': '48 dB(A)' } },
];

const ECF_FEATURES = ['Circular Inline Design', 'IP44 Rated', 'Compact & Quiet', '50,000 h Bearing', 'Supply & Exhaust', 'Direct Duct Connection'];

/* ─── Air Cleaner data ──────────────────────────────── */
const AC_SPECS = {
  'Series': 'Espair ELX (Smoke Eater)',
  'Technology': 'Electrostatic Precipitation',
  'Efficiency': '95–99%',
  'Air Volume': '7,500–10,000 CFM',
  'Material': 'Stainless Steel',
  'Power': '190 W',
  'Gas Temp.': 'Up to 80°C',
  'Warranty': '1 Year',
};

const AC_FEATURES = ['Dry ESP Technology', 'No Filter Replacements', 'Optional AutoKleen', 'UVGI Ozone Option', 'Odour Remover Module', '0.1 Micron Filtration'];

/* ─── Panels data ───────────────────────────────────── */
const PANELS = [
  { name: 'AHU Starter Panels', desc: 'Dedicated starter panels for Air Handling Units with motor protection, auto-manual modes and interlocking.' },
  { name: 'LT Panels', desc: 'Low-tension distribution panels for commercial and industrial power distribution with metering and protection.' },
  { name: 'Basement Ventilation Panels', desc: 'Dedicated control panels for basement car park ventilation systems with CO sensor integration.' },
  { name: 'CPM Panels', desc: 'Centralised Power Management panels for monitoring and control of multiple electrical circuits.' },
];

/* ─── Fan image ─────────────────────────────────────── */
function FanImage({ type }: { type: 'mixed' | 'circular' }) {
  return (
    <div className="product-img-frame">
      <Image
        src={type === 'mixed' ? '/assets/products/Mixed_Flow_Fan.jpeg' : '/assets/products/Circular_Inline_Fan.jpeg'}
        alt={type === 'mixed' ? 'Mixed Flow Inline Fan' : 'ECF Series Inline Fan'}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="product-real-img"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

/* ─── Tabs ──────────────────────────────────────────── */
const TABS = ['Exhaust Fans', 'Electrostatic Air Cleaner', 'Electrical Panels'] as const;
type Tab = typeof TABS[number];

export default function Products() {
  const [tab, setTab] = useState<Tab>('Exhaust Fans');
  const [fanType, setFanType] = useState<'mixed' | 'circular'>('mixed');
  const [emfActive, setEmfActive] = useState(0);
  const [ecfActive, setEcfActive] = useState(0);

  const models = fanType === 'mixed' ? EMF_MODELS : ECF_MODELS;
  const features = fanType === 'mixed' ? EMF_FEATURES : ECF_FEATURES;
  const activeModel = fanType === 'mixed' ? models[emfActive] : models[ecfActive];
  const setActive = fanType === 'mixed' ? setEmfActive : setEcfActive;
  const activeIdx = fanType === 'mixed' ? emfActive : ecfActive;

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-label"><span className="label-line" />Our Products</div>
          <h2 className="section-title">
            <span className="line-wrapper"><span className="line-inner">Product</span></span>
            <span className="line-wrapper"><span className="line-inner">Range</span></span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="product-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`product-tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── EXHAUST FANS ── */}
        {tab === 'Exhaust Fans' && (
          <div className="product-showcase">
            <div className="product-image-wrapper">
              <FanImage type={fanType} />
              <div className="fan-type-toggle">
                <button className={fanType === 'mixed' ? 'active' : ''} onClick={() => setFanType('mixed')}>Mixed Flow</button>
                <button className={fanType === 'circular' ? 'active' : ''} onClick={() => setFanType('circular')}>ECF Inline</button>
              </div>
            </div>

            <div className="product-details">
              <h3>{fanType === 'mixed' ? 'Mixed Flow Inline Fan' : 'ECF Series Inline Fan'}</h3>
              <p className="product-subtitle">
                {fanType === 'mixed'
                  ? 'High performance, low-profile mixed-flow fans for residential, commercial and industrial ducted ventilation.'
                  : 'Compact ECF series inline fans for kitchen, bathroom and office extract and supply air systems.'}
              </p>
              <div className="model-grid">
                {models.map((m, i) => (
                  <div
                    key={m.name}
                    className={`model-card${i === activeIdx ? ' active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="model-name">{m.name}</span>
                    <span className="model-power">{m.power}</span>
                  </div>
                ))}
              </div>
              <div className="specs-list">
                {Object.entries(activeModel.specs).map(([k, v]) => (
                  <div key={k} className="spec-row">
                    <span className="spec-label">{k}</span>
                    <span className="spec-value">{v}</span>
                  </div>
                ))}
              </div>
              <div className="product-features">
                {features.map((f) => <span key={f} className="feature-tag">{f}</span>)}
              </div>
            </div>
          </div>
        )}

        {/* ── ELECTROSTATIC AIR CLEANER ── */}
        {tab === 'Electrostatic Air Cleaner' && (
          <div className="product-showcase">
            <div className="product-image-wrapper">
              <div className="product-img-frame">
                <Image
                  src="/assets/products/Electrostatic_Air_Cleaner.jpeg"
                  alt="ESPair Electrostatic Air Cleaner"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="product-real-img"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="product-source-label">
                Sourced from <a href="https://espair.co.in" target="_blank" rel="noopener noreferrer">ESPair</a> (Authorised Partner)
              </p>
            </div>

            <div className="product-details">
              <h3>Electrostatic Air Cleaner (Dry Scrubber)</h3>
              <p className="product-subtitle">
                Espair ELX Series — electrostatic precipitator for commercial kitchens, welding shops and industrial air cleaning. No filter replacements, just routine cleaning.
              </p>
              <div className="specs-list">
                {Object.entries(AC_SPECS).map(([k, v]) => (
                  <div key={k} className="spec-row">
                    <span className="spec-label">{k}</span>
                    <span className="spec-value">{v}</span>
                  </div>
                ))}
              </div>
              <div className="product-features">
                {AC_FEATURES.map((f) => <span key={f} className="feature-tag">{f}</span>)}
              </div>
              <a href="https://espair.co.in" target="_blank" rel="noopener noreferrer" className="product-ext-link">
                Learn More at ESPair
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* ── ELECTRICAL PANELS ── */}
        {tab === 'Electrical Panels' && (
          <div className="product-showcase">
            <div className="product-image-wrapper">
              <div className="product-img-frame">
                <Image
                  src="/assets/products/Panels.jpeg"
                  alt="Electrical Control Panel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="product-real-img"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="product-source-label">
                In association with <a href="https://www.actonpower.in" target="_blank" rel="noopener noreferrer">Acton Power Solutions</a>
              </p>
            </div>

            <div className="product-details">
              <h3>Electrical Panels</h3>
              <p className="product-subtitle">
                We design, supply and install a range of electrical control panels in partnership with Acton Power Solutions, Bengaluru.
              </p>
              <div className="panels-list">
                {PANELS.map((panel, i) => (
                  <div key={i} className="panel-item">
                    <div className="panel-item-header">
                      <span className="panel-num">{String(i + 1).padStart(2, '0')}</span>
                      <h4>{panel.name}</h4>
                    </div>
                    <p>{panel.desc}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.actonpower.in" target="_blank" rel="noopener noreferrer" className="product-ext-link">
                More Details at Acton Power Solutions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
