'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Home page: Preloader adds 'loaded' after its animation completes.
    // All other pages: add it immediately so overflow:hidden is never applied.
    if (pathname !== '/') {
      document.body.classList.add('loaded');
    }
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
