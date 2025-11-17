'use client';

import { useLayoutEffect, useRef } from 'react';
import { Section } from '../section';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const SkillsSection = ({ dictionary }: { dictionary: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined' || !containerRef.current) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      gsap.from('.skill-category-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLDivElement>('.skill-category-card').forEach(card => {
        gsap.from(card.querySelectorAll('.skill-item'), {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 0,
          x: -30,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="skills" className="bg-background" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">
          {dictionary.title}
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          {dictionary.subtitle}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="skill-category-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">{dictionary.frontend}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {skills.frontend.map((skill) => (
              <div key={skill.name} className="skill-item flex items-center gap-3">
                <skill.icon className="h-6 w-6 text-accent" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="skill-category-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">{dictionary.backend}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {skills.backend.map((skill) => (
              <div key={skill.name} className="skill-item flex items-center gap-3">
                <skill.icon className="h-6 w-6 text-accent" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="skill-category-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">{dictionary.tools}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {skills.tools.map((skill) => (
              <div key={skill.name} className="skill-item flex items-center gap-3">
                <skill.icon className="h-6 w-6 text-accent" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default SkillsSection;
