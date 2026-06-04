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
"[project]/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
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
const STATS = [
    {
        value: '12+',
        label: 'Years of Experience'
    },
    {
        value: '500+',
        label: 'Projects Completed'
    },
    {
        value: '98%',
        label: 'Client Satisfaction'
    },
    {
        value: '35%',
        label: 'Avg Energy Saved'
    }
];
const ADVANTAGES = [
    {
        num: '01',
        title: 'Energy Efficient by Design',
        desc: 'Our systems are engineered to consume up to 40% less energy than conventional alternatives — delivering substantial cost savings and a reduced carbon footprint.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
        num: '02',
        title: 'Precision Engineering',
        desc: 'Every product is sourced, validated and installed to the highest standards, backed by advanced technical specifications and real-world performance data from our trusted manufacturing partners.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
        num: '03',
        title: 'Trusted Supply Chain',
        desc: 'We partner exclusively with established manufacturers for ventilation, air purification and electrical panels — ensuring product quality, spares availability and full warranty coverage on every installation.',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        num: '04',
        title: 'End-to-End Service',
        desc: 'From site survey and product selection through to installation, commissioning and after-sales support — we handle the entire project lifecycle so you have a single point of accountability.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    }
];
function AboutPage() {
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
                                src: "/assets/products/Mixed_Flow_Fan.jpeg",
                                alt: "Ecoelite Engineers",
                                fill: true,
                                priority: true,
                                className: "inner-hero-img",
                                style: {
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inner-hero-overlay"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 50,
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
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 42
                                    }, this),
                                    "About Us"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "inner-hero-title",
                                children: [
                                    "Engineering a",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 26
                                    }, this),
                                    "Greener Bangalore"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inner-hero-desc",
                                children: "Ventilation · Air Purification · Electrical Solutions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about",
                id: "story",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-label",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 46
                                                }, this),
                                                "Our Story"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "section-title",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "line-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-inner",
                                                    children: "Who We Are"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 48
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-description",
                                            children: "Ecoelite Engineers is a Bengaluru-based engineering firm specialising in ventilation, air purification and electrical panel solutions for commercial and industrial facilities. With over a decade of on-the-ground experience, we supply and install ventilation fans, electrostatic air cleaners and electrical panels for a wide range of commercial and industrial clients."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-description",
                                            style: {
                                                marginTop: '1rem'
                                            },
                                            children: "Our team brings deep technical knowledge to every project — from selecting the right fan size for a basement car park to designing AHU control panels for large commercial buildings. We pride ourselves on honest advice, reliable installation and attentive after-sales support."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '1rem',
                                                marginTop: '2rem',
                                                flexWrap: 'wrap'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services",
                                                    className: "cta-btn magnetic-btn",
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        padding: '0.9rem 2rem'
                                                    },
                                                    children: [
                                                        "Our Services",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            style: {
                                                                width: 16,
                                                                height: 16
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "7",
                                                                    y1: "17",
                                                                    x2: "17",
                                                                    y2: "7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/page.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "7 7 17 7 17 17"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/about/page.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 59
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/about/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    className: "hero-btn magnetic-btn",
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        padding: '0.9rem 2rem',
                                                        background: 'transparent',
                                                        color: 'var(--lime)'
                                                    },
                                                    children: "Get in Touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-image-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-image-placeholder",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/EEE.png",
                                                alt: "Ecoelite Engineers",
                                                width: 400,
                                                height: 400,
                                                className: "about-logo-float"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-image-border"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                textAlign: 'center',
                                                marginTop: '0.75rem',
                                                fontSize: '0.65rem',
                                                color: 'var(--text-dim)',
                                                letterSpacing: '0.08em'
                                            },
                                            children: "OFFICE PHOTO — COMING SOON"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stats",
                            children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-number",
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "stat-label",
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "advantages",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "advantages-header section-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-label",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "label-line"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 44
                                        }, this),
                                        "Why Choose Us"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "line-inner",
                                                children: "The Ecoelite"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 46
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "line-inner",
                                                children: "Advantage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 46
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "advantage-stack",
                            children: ADVANTAGES.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "advantage-card",
                                    style: {
                                        '--card-index': i
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "advantage-card-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "advantage-number",
                                                children: a.num
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "advantage-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: a.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: a.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "advantage-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: a.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
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
                                            children: "Ready to Start"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 46
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-inner",
                                            children: "Your Project?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 46
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "cta-text",
                                children: "Talk to our team today. We'll assess your requirements and recommend the right solution."
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "cta-btn magnetic-btn",
                                children: [
                                    "Contact Us",
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
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 7 17 7 17 17"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AboutPage, "0j8FBEoGpgxUje855KRDz0x7NQA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltCards"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAnimations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagneticButtons"]
    ];
});
_c = AboutPage;
var _c;
__turbopack_context__.k.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0m40b.o._.js.map