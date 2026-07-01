'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimations, useTiltCards, useMagneticButtons } from '@/hooks/useAnimations';

/* ─── Mixed Flow Inline Fan models ─── */
const EMF_MODELS = [
  { name: 'EMF-100', power: '30W',  airflow: '205 m³/h',  pressure: '132 Pa', noise: '31 dB(A)' },
  { name: 'EMF-150', power: '58W',  airflow: '530 m³/h',  pressure: '300 Pa', noise: '33 dB(A)' },
  { name: 'EMF-200', power: '140W', airflow: '840 m³/h',  pressure: '350 Pa', noise: '63 dB(A)' },
  { name: 'EMF-250', power: '200W', airflow: '1400 m³/h', pressure: '489 Pa', noise: '66 dB(A)' },
  { name: 'EMF-315', power: '400W', airflow: '2200 m³/h', pressure: '690 Pa', noise: '69 dB(A)' },
];

/* ─── Circular Inline Fan models ─── */
const ECF_MODELS = [
  { name: 'ECF-150', power: '45W',  airflow: '450 m³/h',  pressure: '250 Pa', noise: '32 dB(A)' },
  { name: 'ECF-200', power: '95W',  airflow: '750 m³/h',  pressure: '300 Pa', noise: '38 dB(A)' },
  { name: 'ECF-250', power: '150W', airflow: '1200 m³/h', pressure: '420 Pa', noise: '42 dB(A)' },
  { name: 'ECF-315', power: '350W', airflow: '1900 m³/h', pressure: '580 Pa', noise: '48 dB(A)' },
];

/* ─── Heat Pumps ─── */
const HEAT_PUMPS = [
  {
    name: 'Residential Heat Pump',
    img: '/assets/products/Residential_Heat_Pump.jpeg',
    desc: 'Energy-efficient air-source heat pumps for domestic hot water and space heating — COP up to 4.8, suitable for apartments and villas.',
    features: ['COP up to 4.8', 'R32 Refrigerant', '5–200 L/hr', 'Anti-legionella function', 'Smart controller', 'Low noise compressor'],
  },
  {
    name: 'Commercial Heat Pump',
    img: '/assets/products/Commercial_Heat_Pump.jpeg',
    desc: 'High-capacity heat pumps for hotels, hospitals and commercial buildings — modular design allows capacity expansion without additional plant room space.',
    features: ['Modular & scalable', 'Inverter compressor', 'BMS integration', 'Heat recovery option', 'R410A / R32', 'Remote monitoring'],
  },
  {
    name: 'Swimming Pool Heat Pump',
    img: '/assets/products/Swimming_Pool_Heat_Pump.jpeg',
    desc: 'Dedicated heat pumps for indoor and outdoor swimming pools — titanium heat exchangers resist chlorine corrosion for long-term reliability.',
    features: ['Titanium heat exchanger', 'Corrosion-resistant casing', 'Digital thermostat', 'Auto defrost', 'Pool 20–500 m³', 'Energy savings up to 80%'],
  },
];

/* ─── AC Systems ─── */
const AC_SYSTEMS = [
  {
    name: 'Tower AC (Floor Standing)',
    img: '/assets/products/Tower_AC.jpeg',
    desc: 'Freestanding floor-to-ceiling tower air conditioners for large open spaces, retail showrooms and server rooms — powerful airflow without ceiling installation.',
    features: ['Floor-standing design', 'High airflow capacity', '4-way airflow', 'Inverter technology', 'Auto-clean function', 'WiFi control optional'],
  },
  {
    name: 'Cassette AC',
    img: '/assets/products/Cassette_AC.jpeg',
    desc: 'Ceiling-flush cassette units for even air distribution across commercial spaces — discrete installation blends with any interior without compromising performance.',
    features: ['360° airflow pattern', 'Ceiling-recessed design', 'Auto swing louvers', 'Inverter compressor', 'Quiet operation', 'BMS-ready'],
  },
];

/* ─── HVLS Fans ─── */
const HVLS_FANS = [
  {
    name: 'HVLS Fan — White',
    img: '/assets/products/HVLS_Fans_White.jpeg',
    desc: 'Large-diameter High Volume Low Speed ceiling fans in white finish — ideal for warehouses, manufacturing floors, sports halls and atriums where subtle aesthetics matter.',
  },
  {
    name: 'HVLS Fan — Black',
    img: '/assets/products/HVLS_Fans_Black.jpeg',
    desc: 'Heavy-duty HVLS ceiling fans in black finish — designed for industrial environments and large open facilities requiring powerful yet energy-efficient air circulation.',
  },
];

/* ─── Accessories ─── */
const ACCESSORIES = [
  {
    name: 'UVGI Purification System',
    img: '/assets/products/UVGI_Purification_Syetem.jpeg',
    desc: 'In-duct UV germicidal irradiation systems that neutralise airborne bacteria, viruses and mould spores within the HVAC air stream — improving indoor air quality without chemical treatment.',
  },
  {
    name: 'Industry Processed Chiller',
    img: '/assets/products/Industry_Processed_Chiller.jpeg',
    desc: 'Process chillers for industrial cooling applications — precise temperature control for manufacturing processes, laser equipment, plastic injection moulding and food processing.',
  },
  {
    name: 'FCU Valve',
    img: '/assets/products/FCU_Vavle.jpeg',
    desc: 'Two-way and three-way motorised control valves for fan coil units — enabling precise flow control in chilled water and hot water circuits across commercial HVAC systems.',
  },
  {
    name: 'Damper Actuator',
    img: '/assets/products/Damper_Actuator.jpeg',
    desc: 'Electric and pneumatic damper actuators for precise airflow regulation in ventilation and smoke-control ductwork — compatible with all standard damper sizes and BMS systems.',
  },
  {
    name: 'BTU Flow Meter',
    img: '/assets/products/BTU_Flow_Meter.jpeg',
    desc: 'Ultrasonic BTU energy meters for measuring heating and cooling energy consumption in chilled water circuits — enabling accurate sub-metering and energy billing in multi-tenant buildings.',
  },
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
function SpecTable({ models }: { models: typeof EMF_MODELS }) {
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
          <p className="inner-hero-desc">Ventilation · Air Purification · Heat Pumps · AC Systems · HVLS Fans · Electrical Panels</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          01 · MIXED FLOW INLINE FAN
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
                <Image src="/assets/products/Mixed_Flow_Fan.jpeg" alt="Mixed Flow Inline Fan" width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                <p className="prod-img-label">Mixed Flow Inline Fan — EMF Series</p>
              </div>
              <div className="prod-feature-pills">
                {['Mixed Flow Impeller', 'IP44 Rated', 'Low Noise', '50,000 h Life', '-20°C to 60°C', 'Supply & Exhaust'].map(f => (
                  <span key={f} className="feature-tag">{f}</span>
                ))}
              </div>
            </div>
            <div className="prod-text-col">
              <p className="svc-desc">
                High-performance mixed flow inline fans for residential, commercial and industrial ducted ventilation. Available in five duct sizes from 100 mm to 315 mm, the EMF Series combines the best characteristics of axial and centrifugal fans — delivering high static pressure with low noise at every duty point.
              </p>
              <h4 className="svc-col-title" style={{ marginBottom: '0.75rem' }}>Model Specifications</h4>
              <SpecTable models={EMF_MODELS} />
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
                Compact ECF series inline duct fans designed for kitchen, bathroom, ensuite and office extract and supply air applications. The ECF Series mounts in any position, connects directly to standard circular ducting and can be removed for maintenance without disturbing the duct run.
              </p>
              <h4 className="svc-col-title" style={{ marginBottom: '0.75rem' }}>Model Specifications</h4>
              <SpecTable models={ECF_MODELS} />
              <div className="prod-feature-pills" style={{ marginTop: '1.5rem' }}>
                {['Circular Inline Design', 'IP44 Rated', 'Compact & Quiet', 'Direct Duct Connection', 'Supply & Exhaust', 'Easy Maintenance'].map(f => (
                  <span key={f} className="feature-tag">{f}</span>
                ))}
              </div>
            </div>
            <div className="prod-img-col">
              <div className="prod-natural-img">
                <Image src="/assets/products/Circular_Inline_Fan.jpeg" alt="Circular Inline Fan" width={600} height={600} style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                <p className="prod-img-label">Circular Inline Duct Fan — ECF Series</p>
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
                <p className="prod-img-label">Espair ELX Series — Electrostatic Air Cleaner</p>
              </div>
            </div>
            <div className="prod-text-col">
              <p className="svc-desc">
                As an Authorised Partner of ESPair, we supply and install the Espair ELX Series electrostatic air cleaner. Using charged aluminium plates, it captures grease, smoke and particles as fine as 0.1 micron — with up to 99% filtration efficiency. No disposable filters, no costly replacements; just periodic cleaning. Optional UVGI ozone lamps and odour remover modules extend the system for the most demanding environments.
              </p>
              <div className="svc-two-col" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <h4 className="svc-col-title">Specifications</h4>
                  <ul className="svc-list">
                    {[
                      'Series: Espair ELX (Smoke Eater)',
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

      {/* ══════════════════════════════════════
          05 · HEAT PUMPS
      ══════════════════════════════════════ */}
      <section className="prod-section">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />05 — Heat Pumps</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Heat Pump</span></span>
              <span className="line-wrapper"><span className="line-inner">Systems</span></span>
            </h2>
            <p className="svc-desc" style={{ maxWidth: 680 }}>
              Air-source heat pumps for residential, commercial and specialist applications — delivering efficient heating and hot water with a fraction of the energy of conventional systems.
            </p>
          </div>
          <div className="panels-grid">
            {HEAT_PUMPS.map((p) => (
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
        </div>
      </section>

      {/* ══════════════════════════════════════
          06 · AC SYSTEMS
      ══════════════════════════════════════ */}
      <section className="prod-section prod-section-alt">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />06 — Air Conditioning</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">AC</span></span>
              <span className="line-wrapper"><span className="line-inner">Systems</span></span>
            </h2>
            <p className="svc-desc" style={{ maxWidth: 680 }}>
              Commercial and industrial air conditioning units — tower and cassette formats for precise, efficient climate control in spaces of any size.
            </p>
          </div>
          <div className="panels-grid panels-grid-2">
            {AC_SYSTEMS.map((p) => (
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
        </div>
      </section>

      {/* ══════════════════════════════════════
          07 · HVLS FANS
      ══════════════════════════════════════ */}
      <section className="prod-section">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />07 — Large Ceiling Fans</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">HVLS</span></span>
              <span className="line-wrapper"><span className="line-inner">Fans</span></span>
            </h2>
            <p className="svc-desc" style={{ maxWidth: 680 }}>
              High Volume Low Speed ceiling fans for large open spaces — warehouses, factories, sports facilities and atriums. One HVLS fan can replace dozens of standard pedestal fans at a fraction of the energy cost.
            </p>
          </div>
          <div className="panels-grid panels-grid-2">
            {HVLS_FANS.map((p) => (
              <div key={p.name} className="panel-section-card" data-tilt>
                <div className="panel-section-img">
                  <Image src={p.img} alt={p.name} width={600} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div className="panel-section-body">
                  <h3 className="panel-section-title">{p.name}</h3>
                  <p className="panel-section-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          08 · ACCESSORIES & ANCILLARIES
      ══════════════════════════════════════ */}
      <section className="prod-section prod-section-alt">
        <div className="container">
          <div className="prod-header">
            <div className="section-label"><span className="label-line" />08 — Accessories &amp; Ancillaries</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">System</span></span>
              <span className="line-wrapper"><span className="line-inner">Components</span></span>
            </h2>
            <p className="svc-desc" style={{ maxWidth: 680 }}>
              Supporting components and control accessories to complete your HVAC, ventilation and purification systems — sourced and supplied alongside our core products.
            </p>
          </div>
          <div className="panels-grid panels-grid-accessories">
            {ACCESSORIES.map((p) => (
              <div key={p.name} className="panel-section-card panel-section-card-sm" data-tilt>
                <div className="panel-section-img">
                  <Image src={p.img} alt={p.name} width={600} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div className="panel-section-body">
                  <h3 className="panel-section-title">{p.name}</h3>
                  <p className="panel-section-desc">{p.desc}</p>
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
