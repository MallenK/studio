'use client';

import { useLayoutEffect, useRef } from 'react';
import { Section } from '../section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { githubRepos } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { Badge } from '../ui/badge';

const GithubSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined' || !containerRef.current) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      gsap.from('.github-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLDivElement>('.github-card').forEach(card => {
        const image = card.querySelector('img');
        gsap.to(image, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out',
          paused: true,
          reversed: true,
        });

        card.addEventListener('mouseenter', () => (gsap.getTweensOf(image)[0] as any).play());
        card.addEventListener('mouseleave', () => (gsap.getTweensOf(image)[0] as any).reverse());
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="github" className="bg-muted/30" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">
          Code & Experiments
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          A peek into my GitHub. Here are some of my repositories and coding experiments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {githubRepos.map((repo, index) => {
          const image = PlaceHolderImages.find(img => img.id === repo.imageId);
          return (
            <Link href={repo.url} target="_blank" key={index} className="github-card block group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={repo.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">{repo.title}</CardTitle>
                    <CardDescription className="mt-2">{repo.description}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
          <Link href="https://github.com" target="_blank">
            <Github className="mr-2 h-5 w-5" />
            View all on GitHub
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default GithubSection;
