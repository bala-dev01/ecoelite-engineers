'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <Image src="/EEE.png" alt="Ecoelite Engineers" width={36} height={36} className="nav-logo-img" priority />
            <span>ECOELITE</span>
          </a>

          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <a href="#contact" className="nav-cta magnetic-btn">Get a Quote</a>

          <button className={`nav-toggle${menuOpen ? ' active' : ''}`} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="mobile-link" onClick={closeMenu}>{l.label}</a>
          ))}
          <a href="#contact" className="mobile-link" onClick={closeMenu}>Get a Quote</a>
        </div>
      </div>
    </>
  );
}
