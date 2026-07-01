'use client';

const WORDS = [
  'Ventilation Solutions', 'Mixed Flow Inline Fans', 'Circular Inline Fans',
  'Air Purification', 'Electrostatic Precipitator', 'Kitchen Exhaust Scrubbers',
  'UVGI Systems', 'Electrical Panels', 'AHU Starter Panels', 'LT Panels',
  'Basement Ventilation', 'CPM Panels',
];

export default function Marquee() {
  const doubled = [...WORDS, ...WORDS];
  return (
    <section className="marquee-section">
      <div className="marquee">
        <div className="marquee-inner" data-marquee>
          {doubled.map((w, i) => (
            <span key={i}>
              {i > 0 && <span className="marquee-dot">●</span>}
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
