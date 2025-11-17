import { Code, Database, GitBranch, PenTool, Server, Settings, DraftingCompass, Wind, Bot, MonitorSmartphone, Layers } from 'lucide-react';

export const navLinks = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = {
  frontend: [
    { name: 'HTML5', icon: Code },
    { name: 'CSS3', icon: PenTool },
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Layers },
    { name: 'Bootstrap', icon: MonitorSmartphone },
    { name: 'Figma', icon: DraftingCompass },
  ],
  backend: [
    { name: 'PHP', icon: Server },
    { name: 'Symfony', icon: Server },
    { name: 'CodeIgniter', icon: Server },
    { name: 'Node.js', icon: Server },
    { name: 'API REST', icon: Wind },
    { name: 'MySQL', icon: Database },
  ],
  tools: [
    { name: 'Git', icon: GitBranch },
    { name: 'WordPress', icon: Settings },
    { name: 'Docker', icon: Bot },
    { name: 'NPM', icon: Settings },
    { name: 'Composer', icon: Settings },
    { name: 'Postman', icon: Wind },
  ],
};

export const projects = [
  {
    title: 'Ateneu Unió Restaurant',
    description: 'A corporate website for the restaurant. Clear content, accessible design, and a local focus.',
    tags: ['Symfony', 'React', 'UX/UI', 'Accessibility'],
    liveUrl: 'https://ateneuuniorestaurant.com',
    githubUrl: 'https://github.com/mallenK',
    imageId: 'ateneu',
    featured: true,
  },
  {
    title: 'Aura Hair Salon — Demo',
    description: 'A lightweight demo for a local business. Scalable and fast structure on GitHub Pages.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://mallenk.github.io/PeluqueriaAura/',
    githubUrl: 'https://github.com/mallenK/PeluqueriaAura',
    imageId: 'peluqueria',
    featured: false,
  },
];
