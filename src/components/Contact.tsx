'use client';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left column */}
          <div>
            <div className="section-label"><span className="label-line" />Get in Touch</div>
            <h2 className="section-title">
              <span className="line-wrapper"><span className="line-inner">Let&apos;s Discuss</span></span>
              <span className="line-wrapper"><span className="line-inner">Your Project</span></span>
            </h2>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Email</span>
                <a href="mailto:info@ecoelite.co.uk">info@ecoelite.co.uk</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Phone</span>
                <a href="tel:+442012345678">+44 (0) 20 1234 5678</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Location</span>
                <span>London, United Kingdom</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>

          {/* Form */}
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
  );
}
