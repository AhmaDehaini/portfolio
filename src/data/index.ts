import type { SkillCategory, ExperienceItem, Game } from '../types';

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    color: 'from-violet-500 to-purple-600',
    items: ['JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    icon: 'link',
    color: 'from-cyan-500 to-blue-600',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Game Dev',
    icon: 'gamepad',
    color: 'from-orange-500 to-red-600',
    items: ['Unity Engine', 'C#', 'Augmented Reality', 'Virtual Reality', 'WebGL', 'Game Design', 'Level Design'],
  },
  {
    title: 'AI & Data',
    icon: 'brain',
    color: 'from-emerald-500 to-teal-600',
    items: ['OpenAI GPT-4', 'RAG Systems', 'Machine Learning', 'Computer Vision', 'Pulumi IaC', 'YOLOv10'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'AuraBrush-AI',
    company: 'Personal AI Project',
    period: '4/2026 – Present',
    location: 'Remote. Beirut, Lebanon',
    highlights: [
      'Developed a full-stack AI-powered web application using React, TypeScript, Node.js, and Express.',
      'Integrated OpenAI APIs to generate AI coloring images with a credit-based generation system.',
      'Built frontend interfaces for image generation, painting, and interactive user workflows.',
      'Implemented backend authentication and user management features including signup/login functionality.',
      'Designed application logic for credit tracking and controlled AI image generation requests.',
      'Managed end-to-end application development from frontend UI to backend API integration and deployment.',
    ],
    accent: 'from-pink-500 to-fuchsia-600',
  },
  {
    role: 'AI Developer (Intern)',
    company: 'StartMeUp.AI',
    period: '6/2025 – 8/2025',
    location: 'Remote, Lebanon',
    highlights: [
      'Developed 10 specialized AI agents using Next.js 15, TypeScript, and OpenAI GPT-4.',
      'Built infrastructure automation with Pulumi IaC and intelligent cost optimization.',
      'Implemented RAG systems with similarity matching and relevance scoring.',
      'Achieved 80%+ test coverage with Jest, React Testing Library, and Playwright.',
      'Built project management tools with GitHub integration and automated issue triage.',
    ],
    accent: 'from-violet-500 to-purple-600',
  },
  {
    role: 'ReactJS Developer',
    company: 'ScaryByte',
    period: '10/2024 – Present',
    location: 'Beirut, Lebanon',
    highlights: [
      'Developed and maintained user interfaces using React and JSX.',
      'Created reusable components to enhance code efficiency and maintainability.',
      'Collaborated with cross-functional teams to implement new features.',
      'Adhered to best practices ensuring code quality and performance.',
    ],
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    role: 'Data Science',
    company: 'Zaka.ai',
    period: '05/2024 – 09/2024',
    location: 'Remote, Lebanon',
    highlights: [
      'Certified program covering data science and machine learning end-to-end.',
      'Computer vision project: predicting anomalies from dental X-ray images.',
      'Applied preprocessing and augmentation over the dataset.',
      'Trained YOLOv10, Faster RCNN, and DETR models for best accuracy.',
    ],
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    role: 'Unity Game Developer',
    company: 'Freelance',
    period: '10/2023 – 05/2024',
    location: 'Remote, Lebanon',
    highlights: [
      'Developed AR game for children in dentist clinics on Android using Voidar SDK.',
      'Built a VR simulation for safe electric scooter training using Unity and C#.',
      'Delivered AR, VR, and WebGL experiences.',
    ],
    accent: 'from-orange-500 to-red-600',
  },
  {
    role: 'Unity Mobile Game Developer',
    company: 'Playholding',
    period: '09/2020 – 08/2023',
    location: 'Beirut, Lebanon',
    highlights: [
      'Successfully launched 20+ high-quality mobile games on App Store and Google Play.',
      'Independently developed game logic, mechanics, and features from scratch.',
      'Optimized performance using CPU and GPU techniques for smooth mobile gameplay.',
      'Integrated ad SDKs and performed A/B testing to improve retention.',
      'Created GDDs, handled level design, and balanced gameplay experiences.',
    ],
    accent: 'from-yellow-500 to-orange-600',
  },
  {
    role: 'Front-end Developer Intern',
    company: 'Cloud Gate',
    period: '06/2020 – 08/2020',
    location: 'Beirut, Lebanon',
    highlights: [
      'Developed cross-platform apps using React Native and JavaScript.',
      'Random Movie app: displays highly-rated movies with random discovery.',
      'Instagram main page clone with dark mode layout.',
    ],
    accent: 'from-pink-500 to-rose-600',
  },
];

export const GAMES: Game[] = [
  {
    title: 'Eco Revive',
    video: '/videos/Eco%20Revive.mp4',
    description: 'An engaging mobile game developed with Unity and C#, launched on iOS and Android.',
    tags: ['Unity', 'C#', 'Mobile', 'iOS / Android'],
  },
  {
    title: 'Tire Restoration',
    video: '/videos/Tire%20restoration.mp4',
    description: 'A satisfying mobile restoration game experience built with Unity and C#.',
    tags: ['Unity', 'C#', 'Mobile', 'Game Design'],
  },
  {
    title: 'Conquer',
    video: '/videos/conquer.mp4',
    description: 'A strategy mobile game built with Unity and C#.',
    tags: ['Unity', 'C#', 'Mobile', 'Strategy'],
  },
  {
    title: 'Pool Vacuum',
    video: '/videos/Pool_Vacuum.mp4',
    description: 'A satisfying pool cleaning simulation game developed with Unity and C#.',
    tags: ['Unity', 'C#', 'Mobile', 'Simulation'],
  },
];
