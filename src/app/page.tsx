'use client';

import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Advantages from '@/components/Advantages';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import {
  usePreloader,
  useHeroAnimation,
  useScrollAnimations,
  useMarquee,
  useTiltCards,
  useMagneticButtons,
} from '@/hooks/useAnimations';

const WebGLScene = dynamic(() => import('@/components/WebGLScene'), { ssr: false });

export default function Home() {
  usePreloader();
  useHeroAnimation();
  useScrollAnimations();
  useMarquee();
  useTiltCards();
  useMagneticButtons();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <WebGLScene />
      <div className="noise-overlay" />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Products />
      <Advantages />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
