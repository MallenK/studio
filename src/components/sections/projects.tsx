'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../section';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = ({ dictionary }: { dictionary: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = dictionary.projects;

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined' || !containerRef.current) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      gsap.from('.project-title', {
        scrollTrigger: {
          trigger: '.project-title',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      gsap.utils.toArray<HTMLDivElement>('.project-card').forEach((card, i) => {
        const image = card.querySelector('.project-image');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        tl.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power3.out',
        })
        .from(image, {
            scale: 1.2,
            duration: 1.2,
            ease: 'power3.out',
        }, '-=1');
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="projects" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="project-title font-headline text-4xl md:text-5xl font-bold text-primary">
          {dictionary.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} dictionary={dictionary.card}/>
        ))}
      </div>
    </Section>
  );
};


const ProjectCard = ({ project, dictionary }: { project: any, dictionary: any }) => {
    const image = PlaceHolderImages.find(img => img.id === project.imageId);
    return (
        <Card className="project-card overflow-hidden group">
             <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                    {image && (
                        <Image
                            src={image.imageUrl}
                            alt={project.title}
                            fill
                            className="project-image object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={image.imageHint}
                            data-speed="1.1"
                        />
                    )}
                </div>
                <div className="p-6 space-y-3">
                    <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag:string) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex gap-4 pt-2">
                        <Button variant="link" asChild className="p-0 h-auto">
                            <Link href={project.liveUrl} target="_blank">{dictionary.visit} <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
             </CardContent>
        </Card>
    );
}

export default ProjectsSection;
