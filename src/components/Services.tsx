'use client';

const SERVICES = [
  { icon: 'M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', title: 'Electrical Installations', desc: 'Complete electrical design and installation for commercial and industrial facilities, ensuring safety, compliance and energy efficiency.' },
  { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V3L8 2z', title: 'HVAC Systems', desc: 'State-of-the-art heating, ventilation and air conditioning solutions designed for optimal climate control and minimal energy consumption.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Energy Management', desc: 'Smart energy monitoring and optimisation systems that reduce operational costs and carbon emissions across your entire facility.' },
  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', title: 'Sustainability Consulting', desc: 'Expert guidance on green building certifications, carbon reduction strategies and sustainable infrastructure planning.' },
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Building Automation', desc: 'Integrated BMS solutions that give you complete control over lighting, climate, security and energy usage from a single interface.' },
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'Maintenance & Support', desc: '24/7 preventive and reactive maintenance programmes ensuring peak performance and longevity of all installed systems.' },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label"><span className="label-line" />What We Do</div>
          <h2 className="section-title">
            <span className="line-wrapper"><span className="line-inner">Comprehensive</span></span>
            <span className="line-wrapper"><span className="line-inner">Engineering Services</span></span>
          </h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card" data-tilt>
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.icon} />
              </svg>
              <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
