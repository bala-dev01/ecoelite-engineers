'use client';

import Image from 'next/image';
import Link from 'next/link';

const PRODUCTS = [
  {
    id: 'mixedflow',
    label: 'Ventilation',
    name: 'Mixed Flow Inline Fan',
    desc: 'High-performance mixed flow inline fans (100–315 mm) for residential, commercial and industrial ventilation.',
    img: '/assets/products/Mixed_Flow_Fan.jpeg',
    href: '/products',
  },
  {
    id: 'circular',
    label: 'Ventilation',
    name: 'Circular Inline Fan',
    desc: 'Compact circular inline duct fans suited for kitchen, bathroom and office extract and supply air applications.',
    img: '/assets/products/Circular_Inline_Fan.jpeg',
    href: '/products',
  },
  {
    id: 'aircleaner',
    label: 'Air Purification',
    name: 'Electrostatic Air Cleaner',
    desc: 'Espair ELX Series electrostatic precipitator — 95–99% efficiency on grease, smoke and fine particles down to 0.1 micron.',
    img: '/assets/products/Electrostatic_Air_Cleaner.jpeg',
    href: '/products',
  },
  {
    id: 'panels',
    label: 'Electrical',
    name: 'Electrical Panels',
    desc: 'AHU starter panels, LT panels, basement ventilation panels and CPM panels — precision-built for safe power control.',
    img: '/assets/products/Panels.jpeg',
    href: '/products',
  },
  {
    id: 'heatpumps',
    label: 'Heating',
    name: 'Heat Pumps',
    desc: 'Energy-efficient hot water & heating heat pumps for hotels, villas, and swimming pools — saving up to 80% on energy.',
    img: '/assets/products/Residential_Heat_Pump.jpeg',
    href: '/products',
  },
  {
    id: 'acsystems',
    label: 'Cooling',
    name: 'Commercial AC Systems',
    desc: 'Floor-standing Tower AC units and ceiling Cassette systems designed for powerful cooling in large open spaces.',
    img: '/assets/products/Cassette_AC.jpeg',
    href: '/products',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products" id="featured-products">
      <div className="container">
        <div className="section-header">
          <div className="section-label"><span className="label-line" />Products</div>
          <h2 className="section-title">
            <span className="line-wrapper"><span className="line-inner">What We</span></span>
            <span className="line-wrapper"><span className="line-inner">Supply &amp; Install</span></span>
          </h2>
        </div>
        <div className="fp-grid">
          {PRODUCTS.map((p) => (
            <Link key={p.id} href={p.href} className="fp-card" data-tilt>
              {/* Image — natural 1:1, no container clipping */}
              <div className="fp-card-media">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={600}
                  height={600}
                  className="fp-card-img"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="fp-card-body">
                <span className="fp-card-label">{p.label}</span>
                <h3 className="fp-card-name">{p.name}</h3>
                <p className="fp-card-desc">{p.desc}</p>
                <span className="fp-card-link">
                  View Details
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-actions" style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
          <Link href="/products" className="cta-btn magnetic-btn">
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
