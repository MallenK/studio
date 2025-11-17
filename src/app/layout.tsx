import type { Metadata } from 'next';
import './globals.css';
import { GsapProvider } from '@/lib/gsap-provider';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Sergi Mallén López | Web Developer / Full-Stack',
  description: 'An interactive and creative portfolio for a professional web developer.',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'ca' }]
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />

        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollSmoother.min.js" async></script>
      </head>
      <body className="font-body antialiased">
        <GsapProvider>
          {children}
          <Toaster />
        </GsapProvider>
      </body>
    </html>
  );
}
