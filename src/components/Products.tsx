'use client';

import { useState } from 'react';

const MODELS = [
  { name: 'EE-150', power: '35W', specs: { diameter: '150 mm', airflow: '310 m³/h', noise: '32 dB(A)', speed: '2550 RPM', weight: '1.8 kg' } },
  { name: 'EE-200', power: '55W', specs: { diameter: '200 mm', airflow: '810 m³/h', noise: '36 dB(A)', speed: '2450 RPM', weight: '2.5 kg' } },
  { name: 'EE-250', power: '85W', specs: { diameter: '250 mm', airflow: '1350 m³/h', noise: '38 dB(A)', speed: '2400 RPM', weight: '3.2 kg' } },
  { name: 'EE-315', power: '125W', specs: { diameter: '315 mm', airflow: '2050 m³/h', noise: '42 dB(A)', speed: '2300 RPM', weight: '4.8 kg' } },
  { name: 'EE-355', power: '170W', specs: { diameter: '355 mm', airflow: '2950 m³/h', noise: '45 dB(A)', speed: '2250 RPM', weight: '5.6 kg' } },
  { name: 'EE-400', power: '225W', specs: { diameter: '400 mm', airflow: '3750 m³/h', noise: '48 dB(A)', speed: '2200 RPM', weight: '7.2 kg' } },
];

const FEATURES = ['Mixed Flow', 'EC Motor', 'IP44 Rated', 'Low Noise', 'Easy Install', 'Speed Control'];

export default function Products() {
  const [active, setActive] = useState(1);
  const model = MODELS[active];

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-label"><span className="label-line" />Our Products</div>
          <h2 className="section-title">
            <span className="line-wrapper"><span className="line-inner">Mixed Flow</span></span>
            <span className="line-wrapper"><span className="line-inner">Inline Fans</span></span>
          </h2>
        </div>

        <div className="product-showcase">
          {/* Fan visual */}
          <div className="product-image-wrapper">
            <div className="product-3d-placeholder">
              <div className="fan-visual">
                <div className="fan-body" />
                <div className="fan-ring fan-ring-1" />
                <div className="fan-ring fan-ring-2" />
                <div className="fan-ring fan-ring-3" />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="product-details">
            <h3>Select Model</h3>
            <div className="model-grid">
              {MODELS.map((m, i) => (
                <div key={m.name} className={`model-card${i === active ? ' active' : ''}`} onClick={() => setActive(i)}>
                  <span className="model-name">{m.name}</span>
                  <span className="model-power">{m.power}</span>
                </div>
              ))}
            </div>

            <div className="specs-list">
              {Object.entries(model.specs).map(([k, v]) => (
                <div key={k} className="spec-row">
                  <span className="spec-label">{k.charAt(0).toUpperCase() + k.slice(1)}</span>
                  <span className="spec-value">{v}</span>
                </div>
              ))}
            </div>

            <div className="product-features">
              {FEATURES.map((f) => (<span key={f} className="feature-tag">{f}</span>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
