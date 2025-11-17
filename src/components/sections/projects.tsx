'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../section';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <Section id="projects" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="project-title font-headline text-4xl md:text-5xl font-bold text-primary">
          Featured Projects
        </h2>
      </div>

      <div className="space-y-24">
        {featuredProject && <FeaturedProjectCard project={featuredProject} />}
        
        <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </Section>
  );
};

const FeaturedProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
    const image = PlaceHolderImages.find(img => img.id === project.imageId);
    return (
        <div className="project-card grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={cn("relative rounded-lg overflow-hidden aspect-[4/3] shadow-2xl")}>
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="project-image object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={image.imageHint}
                        data-speed="0.9"
                    />
                )}
            </div>
            <div className="space-y-4">
                <h3 className="font-headline text-3xl font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <p className="text-muted-foreground text-lg">{project.description}</p>
                <div className="flex gap-4 pt-4">
                    <Button asChild>
                        <Link href={project.liveUrl} target="_blank">Live Site <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank">View Code</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
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
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex gap-4 pt-2">
                        <Button variant="link" asChild className="p-0 h-auto">
                            <Link href={project.liveUrl} target="_blank">Live Site <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
                        </Button>
                        <Button variant="link" asChild className="p-0 h-auto">
                            <Link href={project.githubUrl} target="_blank">View Code</Link>
                        </Button>
                    </div>
                </div>
             </CardContent>
        </Card>
    );
}

export default ProjectsSection;
