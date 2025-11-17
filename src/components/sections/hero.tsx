'use client';

import { useLayoutEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';
import { AnimatedText } from '../animated-text';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined' || !containerRef.current) return;
    const gsap = window.gsap;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      if (titleRef.current) {
        tl.from(titleRef.current.querySelectorAll('.char'), {
          y: 100,
          opacity: 0,
          stagger: 0.02,
          duration: 1,
          ease: 'power3.out',
        });
      }

      if (subtitleRef.current) {
        tl.from(subtitleRef.current.querySelectorAll('.char'), {
          y: 20,
          opacity: 0,
          stagger: 0.01,
          duration: 0.5,
          ease: 'power2.out',
        }, "-=0.8");
      }
      
      tl.from('.hero-button', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      }, "-=0.5");
      
      tl.from('.scroll-down-indicator', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      }, "-=0.2");
      
      gsap.to('.hero-bg-shape', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (target: string) => {
    if (typeof window.gsap === 'undefined') return;
    window.gsap.to(window, { duration: 1, scrollTo: target });
  };


  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div 
          className="hero-bg-shape absolute top-1/4 left-1/4 w-48 h-48 bg-primary rounded-full opacity-20 blur-2xl"
          data-speed="1.2"
        />
        <div 
          className="hero-bg-shape absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full opacity-20 blur-2xl"
          data-speed="0.8"
        />

      <div className="z-10 container px-4 md:px-6">
        <AnimatedText
          ref={titleRef}
          text="Full-Stack Developer"
          el="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
        />
        <AnimatedText
          ref={subtitleRef}
          text="Crafting Digital Experiences with Code and Creativity."
          el="p"
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        />
        
        <div className="mt-8 hero-button">
          <Button size="lg" onClick={() => scrollTo('#projects')}>
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="scroll-down-indicator absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground"/>
      </div>
    </section>
  );
};

export default HeroSection;
