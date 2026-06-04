'use client';

const SERVICES = [
  {
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 2.93 1.74 5.45 4.25 6.62V17h5.5v-1.38C17.26 14.45 19 11.93 19 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-1.5 12v1h3v-1h-3zm0 2v1h3v-1h-3zm-6.5-9a1 1 0 100-2 1 1 0 000 2zm17 0a1 1 0 100-2 1 1 0 000 2z',
    iconPaths: [
      'M9.5 14.5h5M12 3a9 9 0 100 18A9 9 0 0012 3z',
      'M12 8v4l3 3',
      'M8 3.5A10 10 0 012 12h4',
      'M16 3.5A10 10 0 0122 12h-4',
    ],
    customIcon: true,
    title: 'Ventilation Solutions',
    desc: 'Complete indoor air quality solutions with Mixed Flow and Circular Inline Fans — designed for residential, commercial and industrial facilities. High performance, low noise and energy-efficient ventilation for any duct size.',
    tags: ['Mixed Flow Fans', 'Circular Inline Fans'],
  },
  {
    icon: '',
    iconPaths: [],
    customIcon: false,
    title: 'Air Purification Solutions',
    desc: 'Kitchen exhaust scrubbers using electrostatic precipitation technology and UVGI systems for air conditioning — eliminating grease, smoke, cooking odours and airborne pathogens from commercial kitchens and HVAC systems.',
    tags: ['Kitchen Exhaust Scrubbers', 'UVGI for AC Systems'],
  },
  {
    icon: '',
    iconPaths: [],
    customIcon: false,
    title: 'Electrical Solutions',
    desc: 'Custom-designed and installed AHU starter panels, LT panels, basement ventilation control panels and CPM panels for safe, reliable power distribution and control in commercial and industrial facilities.',
    tags: ['AHU Starter Panels', 'LT Panels', 'Basement Ventilation Panels', 'CPM Panels'],
  },
];

const ICONS = [
  // Ventilation — fan/airflow
  <svg key="vent" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2a10 10 0 010 20A10 10 0 0112 2z" />
    <path d="M12 9c0-3 1.5-5 3.5-5 1 0 1.5 2 .5 4L12 9z" />
    <path d="M9 12c-3 0-5-1.5-5-3.5 0-1 2-1.5 4-.5L9 12z" />
    <path d="M12 15c0 3-1.5 5-3.5 5-1 0-1.5-2-.5-4L12 15z" />
    <path d="M15 12c3 0 5 1.5 5 3.5 0 1-2 1.5-4 .5L15 12z" />
  </svg>,
  // Air purification — filter/shield
  <svg key="air" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7 3v6c0 4.5-3 8.5-7 10C8 19.5 5 15.5 5 11V5l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  // Electrical — panel/bolt
  <svg key="elec" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
    <path d="M13 13h5M13 16h3" />
  </svg>,
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label"><span className="label-line" />What We Do</div>
          <h2 className="section-title">
            <span className="line-wrapper"><span className="line-inner">Engineering</span></span>
            <span className="line-wrapper"><span className="line-inner">Services</span></span>
          </h2>
        </div>
        <div className="services-grid services-grid-3">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card" data-tilt>
              {ICONS[i]}
              <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
