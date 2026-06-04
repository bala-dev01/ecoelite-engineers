'use client';

import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <Image src="/EEE.png" alt="Ecoelite Engineers" width={36} height={36} className="footer-logo-img" />
              <span>ECOELITE ENGINEERS</span>
            </a>
            <p>
              Ventilation, air purification and electrical engineering solutions for
              commercial and industrial facilities across Bengaluru and beyond.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="#products">Mixed Flow Fans</a>
              <a href="#products">Circular Inline Fans</a>
              <a href="#products">Electrostatic Air Cleaner</a>
              <a href="#products">Electrical Panels</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Ecoelite Engineers. All rights reserved.</p>
          <button
            className="back-to-top magnetic-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
