'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Section } from '../section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined' || !containerRef.current) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.about-title', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.about-text', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      }, "-=0.5")
      .from('.about-image', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'elastic.out(1, 0.75)',
      }, "-=0.6")
      .from('.about-button', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about" ref={containerRef}>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <h2 className="about-title font-headline text-4xl md:text-5xl font-bold text-primary">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p className="about-text">
              I'm a passionate Full-Stack Web Developer with a knack for creating dynamic, user-friendly, and visually appealing web experiences. My journey in tech is driven by a love for problem-solving and a desire to build things that make a difference.
            </p>
            <p className="about-text">
              With experience in both frontend and backend technologies, I enjoy bringing ideas to life, from the initial concept in Figma to a fully deployed application. I thrive in collaborative environments and I'm always eager to learn and adapt to new technologies.
            </p>
          </div>
          <Button variant="outline" className="about-button">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
        <div className="md:col-span-2 flex justify-center md:justify-end">
          {profileImage && (
            <div className="about-image relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={profileImage.imageHint}
                data-speed="1.1"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
