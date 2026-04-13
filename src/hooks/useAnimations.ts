'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   Preloader
   ========================================== */
export function usePreloader() {
  useEffect(() => {
    const el = document.getElementById('preloader');
    if (!el) return;

    const counter = el.querySelector('.preloader-counter') as HTMLElement | null;
    const bar = el.querySelector('.preloader-bar-inner') as HTMLElement | null;
    if (!counter || !bar) return;

    const obj = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(el, {
          yPercent: -100,
          duration: 1,
          ease: 'expo.inOut',
          onComplete: () => {
            el.style.display = 'none';
            document.body.classList.add('loaded');
            ScrollTrigger.refresh();
          },
        });
      },
    });

    tl.to(obj, {
      v: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        counter.textContent = String(Math.round(obj.v));
        gsap.set(bar, { scaleX: obj.v / 100 });
      },
    });
  }, []);
}

/* ==========================================
   Hero entrance animation
   ========================================== */
export function useHeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.6 });

      tl.to('.hero-line-inner', {
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.1,
      })
        .to(
          '.tagline-word',
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' },
          '-=0.6'
        )
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .to('.scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.3');
    });
    return () => ctx.revert();
  }, []);
}

/* ==========================================
   Scroll-triggered section reveals
   ========================================== */
export function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Section labels & titles reveal */
      gsap.utils.toArray<HTMLElement>('.section-label, .about-description').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });

      /* Line text reveals */
      gsap.utils.toArray<HTMLElement>('.line-inner').forEach((el) => {
        gsap.from(el, {
          y: '105%',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: el.parentElement, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });

      /* Service cards stagger */
      gsap.from('.service-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
      });

      /* About image clip reveal */
      gsap.utils.toArray<HTMLElement>('[data-animate="reveal-image"]').forEach((el) => {
        gsap.to(el, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        });
      });

      /* Stat counters */
      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
        const target = Number(el.dataset.target) || 0;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });

      /* Product showcase */
      gsap.from('.product-showcase', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.product-showcase', start: 'top 80%' },
      });

      /* Advantage cards */
      gsap.utils.toArray<HTMLElement>('.advantage-card').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      /* CTA */
      gsap.from('.cta-content', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-section', start: 'top 75%' },
      });

      /* Contact */
      gsap.from('.contact-grid > *', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
      });
    });
    return () => ctx.revert();
  }, []);
}

/* ==========================================
   Infinite marquee
   ========================================== */
export function useMarquee() {
  useEffect(() => {
    const inner = document.querySelector('[data-marquee]') as HTMLElement | null;
    if (!inner) return;

    // Clone contents for seamless loop
    inner.innerHTML += inner.innerHTML;
    const totalW = inner.scrollWidth / 2;

    const tween = gsap.to(inner, {
      x: -totalW,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, []);
}

/* ==========================================
   3D tilt cards
   ========================================== */
export function useTiltCards() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotateY: x * 12, rotateX: -y * 12, duration: 0.4, ease: 'power2.out' });
      };
      const leave = () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1,0.5)' });
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

/* ==========================================
   Magnetic buttons
   ========================================== */
export function useMagneticButtons() {
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>('.magnetic-btn');
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    btns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, { x: dx * 0.25, y: dy * 0.25, duration: 0.4, ease: 'power2.out' });
      };
      const leave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
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
