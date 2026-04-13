'use client';

import Image from 'next/image';

export default function Preloader() {
  return (
    <div id="preloader">
      <div className="preloader-content">
        <Image src="/EEE.png" alt="Ecoelite" width={80} height={80} className="preloader-logo-img" priority />
        <div className="preloader-counter">0</div>
        <div className="preloader-bar">
          <div className="preloader-bar-inner" />
        </div>
      </div>
    </div>
  );
}
