'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Code, Globe } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from 'next/navigation';

const Header = ({ dictionary }: { dictionary: any }) => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const getCurrentLang = () => {
    return pathname.split('/')[1] || 'en';
  }

  useLayoutEffect(() => {
    if (typeof window.gsap === 'undefined') return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const showAnim = gsap.from(headerRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

  }, []);

  const scrollTo = (target: string) => {
    if (typeof window.gsap === 'undefined') return;
    window.gsap.to(window, { duration: 1, scrollTo: target });
  };

  return (
    <header ref={headerRef} className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "border-b border-white/10 bg-background/80 backdrop-blur-lg"
      )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href={`/${getCurrentLang()}`} className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollTo(0)}}>
            <Code className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold">Sergi Mallén</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {dictionary.navLinks.map((link:any) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => scrollTo('#contact')}>
              {dictionary.contact}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/en">English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/es">Español</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ca">Català</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
