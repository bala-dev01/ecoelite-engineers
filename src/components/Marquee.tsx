'use client';

const WORDS = [
  'Sustainable Engineering', 'HVAC Systems', 'Electrical Installations',
  'Energy Efficiency', 'Climate Control', 'Green Technology',
  'Smart Buildings', 'Ventilation Solutions',
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
