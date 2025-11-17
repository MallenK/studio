import { Code, Database, GitBranch, PenTool, Server, Settings, DraftingCompass, Wind, Bot, MonitorSmartphone, Layers } from 'lucide-react';

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
