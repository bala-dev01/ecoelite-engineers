'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════
   PRELOADER — creative version
   ═══════════════════════════════════════════════ */
export function usePreloader() {
  useEffect(() => {
    const el = document.getElementById('preloader');
    if (!el) return;

    const counter  = el.querySelector('.preloader-counter') as HTMLElement | null;
    const bar      = el.querySelector('.preloader-bar-inner') as HTMLElement | null;
    const ring     = el.querySelector('.pl-ring-fill') as SVGCircleElement | null;
    const logoImg  = el.querySelector('.pl-logo-img') as HTMLElement | null;
    const brandSpans = el.querySelectorAll<HTMLElement>('.pl-brand-line span');
    const countWrap  = el.querySelector('.pl-count-wrap') as HTMLElement | null;

    if (!counter || !bar) return;

    const obj = { v: 0 };
    const CIRC = 552.9;

    const tl = gsap.timeline({
      onComplete: () => {
        // Exit: curtain slides up
        gsap.to(el, {
          yPercent: -100,
          duration: 1.1,
          ease: 'expo.inOut',
          onComplete: () => {
            el.style.display = 'none';
            document.body.classList.add('loaded');
            ScrollTrigger.refresh();
          },
        });
      },
    });

    // 1 — logo scales in
    tl.from(logoImg, { opacity: 0, scale: 0.65, duration: 0.9, ease: 'expo.out' });

    // 2 — ring draws clockwise (overlaps logo entrance)
    if (ring) {
      tl.to(ring, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }, '-=0.5');
    }

    // 3 — brand text slides up from clip
    tl.from(brandSpans, {
      yPercent: 110,
      opacity: 0,
      duration: 0.75,
      stagger: 0.14,
      ease: 'expo.out',
    }, '-=1.6');

    // 4 — counter + bar count up
    tl.to(obj, {
      v: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.round(obj.v);
        counter.textContent = String(v);
        gsap.set(bar, { scaleX: v / 100 });
      },
    }, '-=1.4');

    // 5 — brief hold
    tl.to({}, { duration: 0.3 });

    // 6 — fade out content before curtain
    tl.to([logoImg, brandSpans, countWrap, ring?.parentElement], {
      opacity: 0,
      scale: 1.04,
      duration: 0.5,
      ease: 'power2.in',
      stagger: 0.04,
    });

    return () => { tl.kill(); };
  }, []);
}

/* ═══════════════════════════════════════════════
   HERO ENTRANCE
   ═══════════════════════════════════════════════ */
export function useHeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.2 });
      tl.to('.hero-line-inner', { y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1 })
        .to('.tagline-word', { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '-=0.6')
        .to('.hero-cta',    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .to('.scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.3')
        .from('.hero-vcards', { opacity: 0, x: 40, duration: 1, ease: 'expo.out', stagger: 0.1 }, '-=0.6');
    });
    return () => ctx.revert();
  }, []);
}

/* ═══════════════════════════════════════════════
   SCROLL ANIMATIONS + PARALLAX (all pages)
   ═══════════════════════════════════════════════ */
export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Section labels & descriptions ── */
      gsap.utils.toArray<HTMLElement>('.section-label, .about-description, .svc-desc, .inner-hero-desc').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 32, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });

      /* ── Heading line reveals ── */
      gsap.utils.toArray<HTMLElement>('.line-inner').forEach((el) => {
        gsap.from(el, {
          y: '105%', duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: el.parentElement, start: 'top 86%', toggleActions: 'play none none none' },
        });
      });

      /* ── Inner hero title ── */
      gsap.utils.toArray<HTMLElement>('.inner-hero-title').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 40, duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
        });
      });

      /* ── Parallax: inner hero background images ── */
      gsap.utils.toArray<HTMLElement>('.inner-hero').forEach((section) => {
        const img = section.querySelector('.inner-hero-img');
        if (!img) return;
        gsap.fromTo(img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      });

      /* ── Service cards stagger ── */
      if (document.querySelector('.services-grid')) {
        gsap.from('.service-card', {
          opacity: 0, y: 60, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
        });
      }

      /* ── Service sections (alternating grid) ── */
      gsap.utils.toArray<HTMLElement>('.svc-grid').forEach((grid) => {
        const children = grid.children;
        gsap.from(children, {
          opacity: 0, y: 50, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: grid, start: 'top 80%', toggleActions: 'play none none none' },
        });
      });

      /* ── Product sections ── */
      gsap.utils.toArray<HTMLElement>('.prod-layout').forEach((layout) => {
        const children = layout.children;
        gsap.from(children, {
          opacity: 0, y: 60, duration: 1.1, stagger: 0.18, ease: 'expo.out',
          scrollTrigger: { trigger: layout, start: 'top 82%', toggleActions: 'play none none none' },
        });
      });

      /* ── Parallax: natural product images ── */
      gsap.utils.toArray<HTMLElement>('.prod-natural-img').forEach((wrap) => {
        const img = wrap.querySelector('img');
        if (!img) return;
        gsap.fromTo(img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          }
        );
      });

      /* ── Panel cards stagger ── */
      if (document.querySelector('.panels-grid')) {
        gsap.from('.panel-section-card', {
          opacity: 0, y: 60, scale: 0.97, duration: 0.9, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: '.panels-grid', start: 'top 80%' },
        });
      }

      /* ── Featured product cards (home) ── */
      if (document.querySelector('.fp-grid')) {
        gsap.from('.fp-card', {
          opacity: 0, y: 70, duration: 0.9, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: '.fp-grid', start: 'top 82%' },
        });
      }

      /* ── About image clip reveal ── */
      gsap.utils.toArray<HTMLElement>('[data-animate="reveal-image"]').forEach((el) => {
        gsap.to(el, {
          clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        });
      });

      /* ── Stat counters ── */
      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
        const target = Number(el.dataset.target) || 0;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
        });
      });

      /* ── Advantage cards ── */
      gsap.utils.toArray<HTMLElement>('.advantage-card').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' },
        });
      });

      /* ── CTA ── */
      if (document.querySelector('.cta-section')) {
        gsap.from('.cta-content', {
          opacity: 0, y: 60, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section', start: 'top 78%' },
        });
      }

      /* ── Contact grid ── */
      if (document.querySelector('.contact-grid')) {
        gsap.from('.contact-grid > *', {
          opacity: 0, y: 50, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
        });
      }

      /* ── Contact info cards ── */
      if (document.querySelector('.contact-info-cards')) {
        gsap.from('.contact-info-card', {
          opacity: 0, x: -30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-info-cards', start: 'top 85%' },
        });
      }

      /* ── Spec table rows ── */
      if (document.querySelector('.prod-spec-table')) {
        gsap.from('.prod-spec-row', {
          opacity: 0, x: -20, duration: 0.5, stagger: 0.06, ease: 'power2.out',
          scrollTrigger: { trigger: '.prod-spec-table', start: 'top 82%' },
        });
      }

      /* ── Partner cards ── */
      if (document.querySelector('.partners-row')) {
        gsap.from('.partner-card', {
          opacity: 0, y: 40, scale: 0.95, duration: 0.8, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: '.partners-row', start: 'top 85%' },
        });
      }

      /* ── Marquee section ── */
      if (document.querySelector('.marquee-section')) {
        gsap.from('.marquee-section', {
          opacity: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.marquee-section', start: 'top 90%' },
        });
      }

      /* ── Featured products section header ── */
      if (document.querySelector('.featured-products .section-header')) {
        gsap.from('.featured-products .section-header', {
          opacity: 0, y: 40, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.featured-products', start: 'top 82%' },
        });
      }

    });
    return () => ctx.revert();
  }, []);
}

/* ═══════════════════════════════════════════════
   INFINITE MARQUEE
   ═══════════════════════════════════════════════ */
export function useMarquee() {
  useEffect(() => {
    const inner = document.querySelector('[data-marquee]') as HTMLElement | null;
    if (!inner) return;
    inner.innerHTML += inner.innerHTML;
    const totalW = inner.scrollWidth / 2;
    const tween = gsap.to(inner, { x: -totalW, duration: 40, ease: 'none', repeat: -1 });
    return () => { tween.kill(); };
  }, []);
}

/* ═══════════════════════════════════════════════
   3D TILT CARDS
   ═══════════════════════════════════════════════ */
export function useTiltCards() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        gsap.to(card, { rotateY: x * 10, rotateX: -y * 10, duration: 0.4, ease: 'power2.out' });
      };
      const leave = () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'elastic.out(1,0.5)' });
      };
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      handlers.push({ el: card, move, leave });
    });
    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
}

/* ═══════════════════════════════════════════════
   MAGNETIC BUTTONS
   ═══════════════════════════════════════════════ */
export function useMagneticButtons() {
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>('.magnetic-btn');
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    btns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top  + rect.height / 2);
        gsap.to(btn, { x: dx * 0.28, y: dy * 0.28, duration: 0.4, ease: 'power2.out' });
      };
      const leave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' });
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ el: btn, move, leave });
    });
    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
}
