'use client';

import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeaturedProducts from '@/components/FeaturedProducts';
import CTA from '@/components/CTA';
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
      <WebGLScene />
      <Hero />
      <FeaturedProducts />
      <Marquee />
      <CTA />
    </>
  );
}
