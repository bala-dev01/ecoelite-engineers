'use client';

import { useScrollAnimations, useMagneticButtons } from '@/hooks/useAnimations';

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'sales@ecoelite.in',
    href: 'mailto:sales@ecoelite.in',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    label: 'Phone',
    value: '+91 99168 08524',
    href: 'tel:+919916808524',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    label: 'Address',
    value: 'No. 12 AS, 1st Floor, 1st Cross, 2nd Phase, 4 Block,\nHosakerehalli Cross, Sri Vidyanagar,\nBanashankari III Stage, Bangalore – 560085, Karnataka.',
    href: 'https://maps.google.com/?q=Hosakerehalli+Cross+Sri+Vidyanagar+Banashankari+III+Stage+Bangalore+560085',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

export default function ContactPage() {
  useScrollAnimations();
  useMagneticButtons();

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="inner-hero inner-hero-short">
        <div className="inner-hero-bg inner-hero-bg-solid" />
        <div className="container inner-hero-content">
          <div className="section-label"><span className="label-line" />Reach Us</div>
          <h1 className="inner-hero-title">Get in Touch</h1>
          <p className="inner-hero-desc">
            We&apos;re based in Bangalore and serve clients across South India.
          </p>
        </div>
      </section>

      {/* ── Contact body ── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">

            {/* Left — info */}
            <div>
              <div className="section-label"><span className="label-line" />Contact Details</div>
              <h2 className="section-title">
                <span className="line-wrapper"><span className="line-inner">Let&apos;s Discuss</span></span>
                <span className="line-wrapper"><span className="line-inner">Your Project</span></span>
              </h2>

              <div className="contact-info-cards">
                {CONTACT_ITEMS.map((c) => (
                  <a key={c.label} href={c.href} target={c.label === 'Address' ? '_blank' : undefined} rel="noopener noreferrer" className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={c.icon} />
                      </svg>
                    </div>
                    <div>
                      <span className="detail-label">{c.label}</span>
                      <span className="contact-info-val">{c.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-socials">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>

            {/* Right — form */}
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Your Name</label>
                <span className="form-line" />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
                <span className="form-line" />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
                <span className="form-line" />
              </div>
              <div className="form-group">
                <input type="text" id="subject" placeholder=" " />
                <label htmlFor="subject">Subject</label>
                <span className="form-line" />
              </div>
              <div className="form-group">
                <textarea id="message" rows={4} placeholder=" " required />
                <label htmlFor="message">Your Message</label>
                <span className="form-line" />
              </div>
              <button type="submit" className="submit-btn magnetic-btn">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
