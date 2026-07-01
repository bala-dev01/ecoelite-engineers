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
      { src: '/assets/products/Mixed_Flow_Fan.jpeg',      caption: 'Mixed Flow Inline Fan' },
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
    desc: 'Our Espair ELX range of electrostatic air cleaners and UVGI systems removes grease, smoke, cooking odours and airborne pathogens from commercial kitchens and HVAC systems — with up to 99% filtration efficiency and no disposable filters.',
    images: [
      { src: '/assets/products/Electrostatic_Air_Cleaner.jpeg', caption: 'Electrostatic Air Cleaner (Dry Scrubber)' },
    ],
    products: [
      'Espair ELX Series Electrostatic Air Cleaners',
      'Kitchen Exhaust Scrubbers',
      'UVGI Systems for AC Ducts',
      'Odour Remover Modules',
      'AutoKleen Wash Systems',
    ],
    applications: ['Commercial Kitchens & Restaurants', 'Food Processing Plants', 'Hospitals & Clinics', 'Office HVAC Systems', 'Welding & CNC Shops'],
    partnerLabel: 'ESPair (Authorised Partner)',
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
  {
    num: '04',
    label: 'Heat Pumps',
    title: 'Heat Pump Solutions',
    desc: 'We supply and install high-efficiency air-source heat pumps for domestic hot water, swimming pool heating, and commercial applications. Sourced from leading manufacturers, our systems feature titanium heat exchangers, smart controllers, and inverter compressors to deliver hot water at up to 80% lower energy costs compared to traditional electric heaters.',
    images: [
      { src: '/assets/products/Residential_Heat_Pump.jpeg', caption: 'Residential Heat Pump' },
      { src: '/assets/products/Commercial_Heat_Pump.jpeg', caption: 'Commercial Modular Heat Pump' },
    ],
    products: [
      'Residential Heat Pumps (5–200 L/hr)',
      'Commercial Modular Heat Pumps',
      'Swimming Pool Heat Pumps',
      'Titanium Heat Exchangers & Controllers',
    ],
    applications: ['Hotels & Resorts', 'Hospitals & Clinics', 'Apartment Buildings & Villas', 'Swimming Pools & Clubs', 'Residential Water Heating'],
    partnerLabel: null,
    partnerHref: null,
  },
  {
    num: '05',
    label: 'AC & Cooling',
    title: 'HVAC & Cooling Systems',
    desc: 'Our commercial air conditioning range includes floor-standing Tower AC units and ceiling-recessed Cassette AC systems. Engineered with inverter compressors and smart controllers, they provide powerful and uniform cooling for large spaces without compromising architectural aesthetics.',
    images: [
      { src: '/assets/products/Tower_AC.jpeg', caption: 'Floor-standing Tower AC' },
      { src: '/assets/products/Cassette_AC.jpeg', caption: 'Ceiling Cassette AC' },
    ],
    products: [
      'Floor-standing Tower AC Units',
      'Ceiling-flush Cassette AC Systems',
      'Inverter Cooling Compressors',
      'Smart Thermostats & BMS Controls',
    ],
    applications: ['Retail Showrooms', 'Server & UPS Rooms', 'Commercial Offices', 'Conference & Banquet Halls', 'Large Open Spaces'],
    partnerLabel: null,
    partnerHref: null,
  },
  {
    num: '06',
    label: 'HVLS Fans',
    title: 'HVLS Fan Solutions',
    desc: 'For large facilities requiring massive air movement, we offer High Volume Low Speed (HVLS) industrial ceiling fans. Available in premium white and black finishes, these large-diameter fans circulate massive volumes of air at low speeds, creating a cooling breeze and reducing heating/cooling costs through air destratification.',
    images: [
      { src: '/assets/products/HVLS_Fans_White.jpeg', caption: 'HVLS Fan — White' },
      { src: '/assets/products/HVLS_Fans_Black.jpeg', caption: 'HVLS Fan — Black' },
    ],
    products: [
      'High Volume Low Speed Ceiling Fans',
      'White & Black Finish Variants',
      'Variable Speed Drive (VFD) Panels',
      'Reversible Flow Fans',
    ],
    applications: ['Industrial Warehouses', 'Manufacturing & Assembly Floors', 'Sports Gymnasiums & Halls', 'Atriums & Large Lobbies', 'Public Transport Terminals'],
    partnerLabel: null,
    partnerHref: null,
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
