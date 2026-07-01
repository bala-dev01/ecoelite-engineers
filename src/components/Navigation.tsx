'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled || !isHome ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image
              src="/Horizontal_logo.png"
              alt="Ecoelite Engineers"
              width={180}
              height={40}
              className="nav-logo-img-horizontal"
              priority
              style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
            />
          </Link>

          {/* Divider */}
          <div className="nav-sep" />

          {/* Links */}
          <div className="nav-links">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`nav-link${active ? ' active' : ''}`}>
                  {l.label}
                  {active && <span className="nav-link-dot" />}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link href="/contact" className="nav-cta magnetic-btn">
            Get a Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="mobile-link" onClick={closeMenu}>{l.label}</Link>
          ))}
          <Link href="/contact" className="mobile-link mobile-link-cta" onClick={closeMenu}>Get a Quote</Link>
        </div>
      </div>
    </>
  );
}
