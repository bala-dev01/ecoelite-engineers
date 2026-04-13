'use client';

const ADVANTAGES = [
  { title: 'Energy Efficient Design', desc: 'Our systems are engineered to consume up to 40% less energy than conventional alternatives, delivering substantial cost savings and reduced environmental impact.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Precision Engineering', desc: 'Every component is designed, tested, and validated to the highest standards using advanced computational modelling and real-world performance data.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: 'Sustainable Materials', desc: 'We source eco-friendly, recyclable materials and implement circular economy principles throughout our manufacturing and installation processes.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { title: 'Smart Integration', desc: 'Seamless IoT connectivity and building management system integration for remote monitoring, predictive maintenance, and real-time performance optimisation.', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
];

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="advantages-header section-header">
          <div className="section-label"><span className="label-line" />Why Choose Us</div>
          <h2 className="section-title">
            <span className="line-wrapper"><span className="line-inner">The Ecoelite</span></span>
            <span className="line-wrapper"><span className="line-inner">Advantage</span></span>
          </h2>
        </div>

        <div className="advantage-stack">
          {ADVANTAGES.map((a, i) => (
            <div key={i} className="advantage-card" style={{ '--card-index': i } as React.CSSProperties}>
              <div className="advantage-card-inner">
                <span className="advantage-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="advantage-content">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
                <svg className="advantage-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={a.icon} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
