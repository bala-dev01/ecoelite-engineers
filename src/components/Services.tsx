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
    tags: ['Mixed Flow Inline Fans', 'Circular Inline Fans'],
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
  {
    icon: '',
    iconPaths: [],
    customIcon: false,
    title: 'Heat Pump Solutions',
    desc: 'Energy-efficient air-source heat pump heating solutions for residential hot water, swimming pool heating, and commercial applications — saving up to 80% on energy costs.',
    tags: ['Residential Heat Pumps', 'Commercial Heat Pumps', 'Pool Heat Pumps'],
  },
  {
    icon: '',
    iconPaths: [],
    customIcon: false,
    title: 'HVAC & Cooling Systems',
    desc: 'Advanced floor-standing Tower ACs and ceiling Cassette ACs, featuring inverter technology and WiFi control, for even air and temperature distribution in large open spaces.',
    tags: ['Tower AC (Floor Standing)', 'Cassette AC Systems'],
  },
  {
    icon: '',
    iconPaths: [],
    customIcon: false,
    title: 'HVLS Fan Solutions',
    desc: 'High Volume Low Speed (HVLS) ceiling fan systems in white and black finishes, providing massive, quiet, and energy-efficient air circulation for warehouses and large industrial spaces.',
    tags: ['Industrial HVLS Fans', 'Large Open Space Ventilation'],
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
  // Heat Pumps — thermometer
  <svg key="heat" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    <path d="M12 9h.01M12 12h.01" />
  </svg>,
  // AC Systems — snowflake
  <svg key="ac" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="m20 16-4-4 4-4" />
    <path d="m4 8 4 4-4 4" />
    <path d="m16 4-4 4-4-4" />
    <path d="m8 20 4-4 4 4" />
  </svg>,
  // HVLS Fans — propeller/rotation
  <svg key="hvls" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 12L3 8" />
    <path d="M12 12l9-4" />
    <path d="M12 12v10" />
    <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
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
