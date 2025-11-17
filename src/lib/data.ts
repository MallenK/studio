import { Code, Database, GitBranch, PenTool, Server, Settings, DraftingCompass, Wind, Bot, MonitorSmartphone, Layers } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
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
    description: 'A website focused on accessible design, clear content, and a local focus for a restaurant. This project highlights skills in user-centric UX and corporate web development.',
    tags: ['Symfony', 'React', 'UX/UI', 'Accessibility'],
    liveUrl: 'https://ateneuuniorestaurant.com',
    githubUrl: 'https://github.com/mallenK',
    imageId: 'ateneu',
    featured: true,
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with features like product catalog, shopping cart, user authentication, and an admin dashboard for managing products and orders.',
    tags: ['Node.js', 'React', 'MySQL', 'API REST'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mallenK',
    imageId: 'project-1',
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for managing tasks and projects. Users can create, update, and track their tasks in a collaborative environment.',
    tags: ['React', 'Figma', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mallenK',
    imageId: 'project-2',
  },
];

export const githubRepos = [
  {
    title: 'dotfiles',
    description: 'My personal configuration files for various tools and shells. A look into my development environment setup.',
    url: 'https://github.com/mallenK/dotfiles',
    imageId: 'github-1',
  },
  {
    title: 'portfolio-v1',
    description: 'The first version of my personal portfolio, built with plain HTML, CSS, and JavaScript. A nostalgic look back!',
    url: 'https://mallenk.github.io/Portfolio/',
    imageId: 'github-2',
  },
  {
    title: 'api-boilerplate',
    description: 'A boilerplate for quickly setting up a RESTful API using Node.js, Express, and MySQL with best practices.',
    url: 'https://github.com/mallenK/api-boilerplate',
    imageId: 'github-3',
  },
];
