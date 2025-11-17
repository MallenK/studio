'use client';

import { useLayoutEffect, useRef } from 'react';
import { Section } from '../section';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import { AnimatedText } from '../animated-text';

const ContactSection = ({ dictionary }: { dictionary: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined' || !containerRef.current) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      if (titleRef.current) {
        tl.from(titleRef.current.querySelectorAll('.char'), {
          y: 60,
          opacity: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
      
      tl.from('.contact-form-item', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="contact" ref={containerRef}>
      <div className="text-center max-w-2xl mx-auto">
        <AnimatedText
          ref={titleRef}
          text={dictionary.title}
          el="h2"
          className="text-4xl md:text-6xl font-bold text-primary mb-4"
        />
        <p className="contact-form-item text-lg text-muted-foreground mb-12">
          {dictionary.subtitle}
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input className="contact-form-item" type="text" placeholder={dictionary.form.name} />
            <Input className="contact-form-item" type="email" placeholder={dictionary.form.email} />
          </div>
          <Textarea className="contact-form-item" placeholder={dictionary.form.message} rows={5} />
          <Button type="submit" size="lg" className="contact-form-item">
            {dictionary.form.submit} <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
