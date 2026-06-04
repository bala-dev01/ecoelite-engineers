(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useAnimations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHeroAnimation",
    ()=>useHeroAnimation,
    "useMagneticButtons",
    ()=>useMagneticButtons,
    "useMarquee",
    ()=>useMarquee,
    "usePreloader",
    ()=>usePreloader,
    "useScrollAnimations",
    ()=>useScrollAnimations,
    "useTiltCards",
    ()=>useTiltCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function usePreloader() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePreloader.useEffect": ()=>{
            const el = document.getElementById('preloader');
            if (!el) return;
            const counter = el.querySelector('.preloader-counter');
            const bar = el.querySelector('.preloader-bar-inner');
            const ring = el.querySelector('.pl-ring-fill');
            const logoImg = el.querySelector('.pl-logo-img');
            const brandSpans = el.querySelectorAll('.pl-brand-line span');
            const countWrap = el.querySelector('.pl-count-wrap');
            if (!counter || !bar) return;
            const obj = {
                v: 0
            };
            const CIRC = 552.9;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: {
                    "usePreloader.useEffect.tl": ()=>{
                        // Exit: curtain slides up
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                            yPercent: -100,
                            duration: 1.1,
                            ease: 'expo.inOut',
                            onComplete: {
                                "usePreloader.useEffect.tl": ()=>{
                                    el.style.display = 'none';
                                    document.body.classList.add('loaded');
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                                }
                            }["usePreloader.useEffect.tl"]
                        });
                    }
                }["usePreloader.useEffect.tl"]
            });
            // 1 — logo scales in
            tl.from(logoImg, {
                opacity: 0,
                scale: 0.65,
                duration: 0.9,
                ease: 'expo.out'
            });
            // 2 — ring draws clockwise (overlaps logo entrance)
            if (ring) {
                tl.to(ring, {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power2.inOut'
                }, '-=0.5');
            }
            // 3 — brand text slides up from clip
            tl.from(brandSpans, {
                yPercent: 110,
                opacity: 0,
                duration: 0.75,
                stagger: 0.14,
                ease: 'expo.out'
            }, '-=1.6');
            // 4 — counter + bar count up
            tl.to(obj, {
                v: 100,
                duration: 1.8,
                ease: 'power2.inOut',
                onUpdate: {
                    "usePreloader.useEffect": ()=>{
                        const v = Math.round(obj.v);
                        counter.textContent = String(v);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(bar, {
                            scaleX: v / 100
                        });
                    }
                }["usePreloader.useEffect"]
            }, '-=1.4');
            // 5 — brief hold
            tl.to({}, {
                duration: 0.3
            });
            // 6 — fade out content before curtain
            tl.to([
                logoImg,
                brandSpans,
                countWrap,
                ring?.parentElement
            ], {
                opacity: 0,
                scale: 1.04,
                duration: 0.5,
                ease: 'power2.in',
                stagger: 0.04
            });
            return ({
                "usePreloader.useEffect": ()=>{
                    tl.kill();
                }
            })["usePreloader.useEffect"];
        }
    }["usePreloader.useEffect"], []);
}
_s(usePreloader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useHeroAnimation() {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeroAnimation.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "useHeroAnimation.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        delay: 3.2
                    });
                    tl.to('.hero-line-inner', {
                        y: 0,
                        duration: 1.2,
                        ease: 'expo.out',
                        stagger: 0.1
                    }).to('.tagline-word', {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.06,
                        ease: 'power3.out'
                    }, '-=0.6').to('.hero-cta', {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out'
                    }, '-=0.3').to('.scroll-indicator', {
                        opacity: 1,
                        duration: 0.8
                    }, '-=0.3').from('.hero-vcards', {
                        opacity: 0,
                        x: 40,
                        duration: 1,
                        ease: 'expo.out',
                        stagger: 0.1
                    }, '-=0.6');
                }
            }["useHeroAnimation.useEffect.ctx"]);
            return ({
                "useHeroAnimation.useEffect": ()=>ctx.revert()
            })["useHeroAnimation.useEffect"];
        }
    }["useHeroAnimation.useEffect"], []);
}
_s1(useHeroAnimation, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useScrollAnimations() {
    _s2();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimations.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "useScrollAnimations.useEffect.ctx": ()=>{
                    /* ── Section labels & descriptions ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.section-label, .about-description, .svc-desc, .inner-hero-desc').forEach({
                        "useScrollAnimations.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                opacity: 0,
                                y: 32,
                                duration: 1,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 88%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Heading line reveals ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.line-inner').forEach({
                        "useScrollAnimations.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                y: '105%',
                                duration: 1.2,
                                ease: 'expo.out',
                                scrollTrigger: {
                                    trigger: el.parentElement,
                                    start: 'top 86%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Inner hero title ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.inner-hero-title').forEach({
                        "useScrollAnimations.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                opacity: 0,
                                y: 40,
                                duration: 1.1,
                                ease: 'expo.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 90%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Parallax: inner hero background images ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.inner-hero').forEach({
                        "useScrollAnimations.useEffect.ctx": (section)=>{
                            const img = section.querySelector('.inner-hero-img');
                            if (!img) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(img, {
                                yPercent: -10
                            }, {
                                yPercent: 10,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: section,
                                    start: 'top top',
                                    end: 'bottom top',
                                    scrub: 1.5
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Service cards stagger ── */ if (document.querySelector('.services-grid')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.service-card', {
                            opacity: 0,
                            y: 60,
                            duration: 0.8,
                            stagger: 0.12,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '.services-grid',
                                start: 'top 80%'
                            }
                        });
                    }
                    /* ── Service sections (alternating grid) ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.svc-grid').forEach({
                        "useScrollAnimations.useEffect.ctx": (grid)=>{
                            const children = grid.children;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(children, {
                                opacity: 0,
                                y: 50,
                                duration: 1,
                                stagger: 0.15,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: grid,
                                    start: 'top 80%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Product sections ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.prod-layout').forEach({
                        "useScrollAnimations.useEffect.ctx": (layout)=>{
                            const children = layout.children;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(children, {
                                opacity: 0,
                                y: 60,
                                duration: 1.1,
                                stagger: 0.18,
                                ease: 'expo.out',
                                scrollTrigger: {
                                    trigger: layout,
                                    start: 'top 82%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Parallax: natural product images ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.prod-natural-img').forEach({
                        "useScrollAnimations.useEffect.ctx": (wrap)=>{
                            const img = wrap.querySelector('img');
                            if (!img) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(img, {
                                yPercent: -5
                            }, {
                                yPercent: 5,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: wrap,
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: 1.2
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Panel cards stagger ── */ if (document.querySelector('.panels-grid')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.panel-section-card', {
                            opacity: 0,
                            y: 60,
                            scale: 0.97,
                            duration: 0.9,
                            stagger: 0.12,
                            ease: 'expo.out',
                            scrollTrigger: {
                                trigger: '.panels-grid',
                                start: 'top 80%'
                            }
                        });
                    }
                    /* ── Featured product cards (home) ── */ if (document.querySelector('.fp-grid')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.fp-card', {
                            opacity: 0,
                            y: 70,
                            duration: 0.9,
                            stagger: 0.1,
                            ease: 'expo.out',
                            scrollTrigger: {
                                trigger: '.fp-grid',
                                start: 'top 82%'
                            }
                        });
                    }
                    /* ── About image clip reveal ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('[data-animate="reveal-image"]').forEach({
                        "useScrollAnimations.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                                clipPath: 'inset(0% 0 0 0)',
                                duration: 1.4,
                                ease: 'expo.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 75%'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Stat counters ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('[data-counter]').forEach({
                        "useScrollAnimations.useEffect.ctx": (el)=>{
                            const target = Number(el.dataset.target) || 0;
                            const obj = {
                                v: 0
                            };
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(obj, {
                                v: target,
                                duration: 2,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 88%'
                                },
                                onUpdate: {
                                    "useScrollAnimations.useEffect.ctx": ()=>{
                                        el.textContent = String(Math.round(obj.v));
                                    }
                                }["useScrollAnimations.useEffect.ctx"]
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── Advantage cards ── */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.advantage-card').forEach({
                        "useScrollAnimations.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                                opacity: 0,
                                y: 50,
                                duration: 0.9,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 86%'
                                }
                            });
                        }
                    }["useScrollAnimations.useEffect.ctx"]);
                    /* ── CTA ── */ if (document.querySelector('.cta-section')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.cta-content', {
                            opacity: 0,
                            y: 60,
                            duration: 1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '.cta-section',
                                start: 'top 78%'
                            }
                        });
                    }
                    /* ── Contact grid ── */ if (document.querySelector('.contact-grid')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.contact-grid > *', {
                            opacity: 0,
                            y: 50,
                            stagger: 0.2,
                            duration: 1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '.contact-grid',
                                start: 'top 80%'
                            }
                        });
                    }
                    /* ── Contact info cards ── */ if (document.querySelector('.contact-info-cards')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.contact-info-card', {
                            opacity: 0,
                            x: -30,
                            duration: 0.7,
                            stagger: 0.12,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '.contact-info-cards',
                                start: 'top 85%'
                            }
                        });
                    }
                    /* ── Spec table rows ── */ if (document.querySelector('.prod-spec-table')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.prod-spec-row', {
                            opacity: 0,
                            x: -20,
                            duration: 0.5,
                            stagger: 0.06,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: '.prod-spec-table',
                                start: 'top 82%'
                            }
                        });
                    }
                    /* ── Partner cards ── */ if (document.querySelector('.partners-row')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.partner-card', {
                            opacity: 0,
                            y: 40,
                            scale: 0.95,
                            duration: 0.8,
                            stagger: 0.12,
                            ease: 'expo.out',
                            scrollTrigger: {
                                trigger: '.partners-row',
                                start: 'top 85%'
                            }
                        });
                    }
                    /* ── Marquee section ── */ if (document.querySelector('.marquee-section')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.marquee-section', {
                            opacity: 0,
                            duration: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: '.marquee-section',
                                start: 'top 90%'
                            }
                        });
                    }
                    /* ── Featured products section header ── */ if (document.querySelector('.featured-products .section-header')) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.featured-products .section-header', {
                            opacity: 0,
                            y: 40,
                            duration: 1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '.featured-products',
                                start: 'top 82%'
                            }
                        });
                    }
                }
            }["useScrollAnimations.useEffect.ctx"]);
            return ({
                "useScrollAnimations.useEffect": ()=>ctx.revert()
            })["useScrollAnimations.useEffect"];
        }
    }["useScrollAnimations.useEffect"], []);
}
_s2(useScrollAnimations, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useMarquee() {
    _s3();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarquee.useEffect": ()=>{
            const inner = document.querySelector('[data-marquee]');
            if (!inner) return;
            inner.innerHTML += inner.innerHTML;
            const totalW = inner.scrollWidth / 2;
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(inner, {
                x: -totalW,
                duration: 40,
                ease: 'none',
                repeat: -1
            });
            return ({
                "useMarquee.useEffect": ()=>{
                    tween.kill();
                }
            })["useMarquee.useEffect"];
        }
    }["useMarquee.useEffect"], []);
}
_s3(useMarquee, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useTiltCards() {
    _s4();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTiltCards.useEffect": ()=>{
            const cards = document.querySelectorAll('[data-tilt]');
            const handlers = [];
            cards.forEach({
                "useTiltCards.useEffect": (card)=>{
                    const move = {
                        "useTiltCards.useEffect.move": (e)=>{
                            const rect = card.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width - 0.5;
                            const y = (e.clientY - rect.top) / rect.height - 0.5;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                                rotateY: x * 10,
                                rotateX: -y * 10,
                                duration: 0.4,
                                ease: 'power2.out'
                            });
                        }
                    }["useTiltCards.useEffect.move"];
                    const leave = {
                        "useTiltCards.useEffect.leave": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                                rotateY: 0,
                                rotateX: 0,
                                duration: 0.7,
                                ease: 'elastic.out(1,0.5)'
                            });
                        }
                    }["useTiltCards.useEffect.leave"];
                    card.addEventListener('mousemove', move);
                    card.addEventListener('mouseleave', leave);
                    handlers.push({
                        el: card,
                        move,
                        leave
                    });
                }
            }["useTiltCards.useEffect"]);
            return ({
                "useTiltCards.useEffect": ()=>{
                    handlers.forEach({
                        "useTiltCards.useEffect": ({ el, move, leave })=>{
                            el.removeEventListener('mousemove', move);
                            el.removeEventListener('mouseleave', leave);
                        }
                    }["useTiltCards.useEffect"]);
                }
            })["useTiltCards.useEffect"];
        }
    }["useTiltCards.useEffect"], []);
}
_s4(useTiltCards, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useMagneticButtons() {
    _s5();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMagneticButtons.useEffect": ()=>{
            const btns = document.querySelectorAll('.magnetic-btn');
            const handlers = [];
            btns.forEach({
                "useMagneticButtons.useEffect": (btn)=>{
                    const move = {
                        "useMagneticButtons.useEffect.move": (e)=>{
                            const rect = btn.getBoundingClientRect();
                            const dx = e.clientX - (rect.left + rect.width / 2);
                            const dy = e.clientY - (rect.top + rect.height / 2);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                                x: dx * 0.28,
                                y: dy * 0.28,
                                duration: 0.4,
                                ease: 'power2.out'
                            });
                        }
                    }["useMagneticButtons.useEffect.move"];
                    const leave = {
                        "useMagneticButtons.useEffect.leave": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                                x: 0,
                                y: 0,
                                duration: 0.7,
                                ease: 'elastic.out(1,0.4)'
                            });
                        }
                    }["useMagneticButtons.useEffect.leave"];
                    btn.addEventListener('mousemove', move);
                    btn.addEventListener('mouseleave', leave);
                    handlers.push({
                        el: btn,
                        move,
                        leave
                    });
                }
            }["useMagneticButtons.useEffect"]);
            return ({
                "useMagneticButtons.useEffect": ()=>{
                    handlers.forEach({
                        "useMagneticButtons.useEffect": ({ el, move, leave })=>{
                            el.removeEventListener('mousemove', move);
                            el.removeEventListener('mouseleave', leave);
                        }
                    }["useMagneticButtons.useEffect"]);
                }
            })["useMagneticButtons.useEffect"];
        }
    }["useMagneticButtons.useEffect"], []);
}
_s5(useMagneticButtons, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAnimations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SERVICES = [
    {
        num: '01',
        label: 'Ventilation',
        title: 'Ventilation Solutions',
        desc: 'We supply and install Mixed Flow and Circular Inline fans — engineered for high performance, low noise and energy-efficient ducted ventilation across residential, commercial and industrial applications.',
        images: [
            {
                src: '/assets/products/Mixed_Flow_Fan.jpeg',
                caption: 'Mixed Flow Fan'
            },
            {
                src: '/assets/products/Circular_Inline_Fan.jpeg',
                caption: 'Circular Inline Fan'
            }
        ],
        products: [
            'Mixed Flow Inline Fans (100–315 mm)',
            'Circular Inline Duct Fans',
            'EC Motor Variants',
            'Speed Controllers & Filter Boxes'
        ],
        applications: [
            'Commercial Offices',
            'Basement Car Parks',
            'Industrial Facilities',
            'Residential Buildings',
            'Hotels & Apartments'
        ],
        partnerLabel: null,
        partnerHref: null
    },
    {
        num: '02',
        label: 'Air Purification',
        title: 'Air Purification Solutions',
        desc: 'Our ESPair range of electrostatic air cleaners and UVGI systems removes grease, smoke, cooking odours and airborne pathogens from commercial kitchens and HVAC systems — with up to 99% filtration efficiency and no disposable filters.',
        images: [
            {
                src: '/assets/products/Electrostatic_Air_Cleaner.jpeg',
                caption: 'Electrostatic Air Cleaner (Dry Scrubber)'
            }
        ],
        products: [
            'KET Series Electrostatic Air Cleaners',
            'Kitchen Exhaust Scrubbers',
            'UVGI Systems for AC Ducts',
            'Odour Remover Modules',
            'AutoKleen Wash Systems'
        ],
        applications: [
            'Commercial Kitchens & Restaurants',
            'Food Processing Plants',
            'Hospitals & Clinics',
            'Office HVAC Systems',
            'Welding & CNC Shops'
        ],
        partnerLabel: 'ESPair',
        partnerHref: 'https://espair.co.in'
    },
    {
        num: '03',
        label: 'Electrical',
        title: 'Electrical Solutions',
        desc: 'In partnership with Acton Power Solutions, Bengaluru, we design, supply and install a complete range of electrical control panels — from AHU starter panels for air handling units to CPM panels for centralised power management.',
        images: [
            {
                src: '/assets/products/Panels.jpeg',
                caption: 'Electrical Control Panels'
            },
            {
                src: '/assets/products/LT_Panels.jpeg',
                caption: 'LT & Distribution Panels'
            }
        ],
        products: [
            'AHU Starter Panels',
            'LT Distribution Panels',
            'Basement Ventilation Control Panels',
            'CPM Panels',
            'APFC & Capacitor Panels'
        ],
        applications: [
            'Commercial Buildings',
            'Industrial Facilities',
            'Data Centres',
            'Hospitals',
            'Shopping Complexes'
        ],
        partnerLabel: 'Acton Power Solutions',
        partnerHref: 'https://www.actonpower.in'
    }
];
function ServicesPage() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimations"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltCards"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagneticButtons"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inner-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inner-hero-bg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/products/Circular_Inline_Fan.jpeg",
                                alt: "Engineering Services",
                                fill: true,
                                priority: true,
                                className: "inner-hero-img",
                                style: {
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inner-hero-overlay"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container inner-hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label-line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 42
                                    }, this),
                                    "What We Do"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "inner-hero-title",
                                children: [
                                    "Engineering",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 55
                                    }, this),
                                    "Services"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inner-hero-desc",
                                children: "Ventilation · Air Purification · Electrical Solutions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            SERVICES.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `svc-section${i % 2 === 1 ? ' svc-section-alt' : ''}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "svc-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `svc-img-wrap${i % 2 === 1 ? ' order-2' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prod-natural-img",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "svc-img-badge",
                                                    style: {
                                                        position: 'absolute',
                                                        top: '0.75rem',
                                                        left: '0.75rem',
                                                        zIndex: 2
                                                    },
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: s.images[0].src,
                                                    alt: s.images[0].caption,
                                                    width: 600,
                                                    height: 600,
                                                    style: {
                                                        width: '100%',
                                                        height: 'auto',
                                                        borderRadius: '16px',
                                                        display: 'block'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "prod-img-label",
                                                    children: s.images[0].caption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        s.images[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prod-natural-img",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: s.images[1].src,
                                                    alt: s.images[1].caption,
                                                    width: 600,
                                                    height: 600,
                                                    style: {
                                                        width: '100%',
                                                        height: 'auto',
                                                        borderRadius: '12px',
                                                        display: 'block'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "prod-img-label",
                                                    children: s.images[1].caption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "svc-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-label",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 48
                                                }, this),
                                                s.num
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "section-title",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "line-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-inner",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 50
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "svc-desc",
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "svc-two-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "svc-col-title",
                                                            children: "Products Included"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "svc-list",
                                                            children: s.products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "svc-dot"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/page.tsx",
                                                                            lineNumber: 123,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        p
                                                                    ]
                                                                }, p, true, {
                                                                    fileName: "[project]/src/app/services/page.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "svc-col-title",
                                                            children: "Applications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "svc-list",
                                                            children: s.applications.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "svc-dot"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/services/page.tsx",
                                                                            lineNumber: 131,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        a
                                                                    ]
                                                                }, a, true, {
                                                                    fileName: "[project]/src/app/services/page.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '0.75rem',
                                                flexWrap: 'wrap',
                                                marginTop: '2rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/products",
                                                    className: "product-ext-link magnetic-btn",
                                                    children: [
                                                        "View Products",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "7",
                                                                    y1: "17",
                                                                    x2: "17",
                                                                    y2: "7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/services/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "7 7 17 7 17 17"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/services/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/services/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this),
                                                s.partnerHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: s.partnerHref,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "product-ext-link",
                                                    style: {
                                                        opacity: 0.65
                                                    },
                                                    children: [
                                                        s.partnerLabel,
                                                        " ↗"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "cta-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "cta-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-inner",
                                            children: "Need a Custom"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 46
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-inner",
                                            children: "Solution?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 46
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "cta-text",
                                children: "Every facility is different. Get in touch and we'll design the right combination of solutions for your project."
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "cta-btn magnetic-btn",
                                children: [
                                    "Talk to Us",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "7",
                                                y1: "17",
                                                x2: "17",
                                                y2: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 7 17 7 17 17"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ServicesPage, "0j8FBEoGpgxUje855KRDz0x7NQA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltCards"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagneticButtons"]
    ];
});
_c = ServicesPage;
var _c;
__turbopack_context__.k.register(_c, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0fhs5z9._.js.map