'use client';

import { useLayoutEffect, type ReactNode } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

export function GsapProvider({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger && window.ScrollSmoother) {
      window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother);

      const smoother = window.ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });

      return () => {
        // Kill the smoother instance on component unmount
        if (smoother) {
          smoother.kill();
        }
      };
    }
  }, []);

  return <>{children}</>;
}
