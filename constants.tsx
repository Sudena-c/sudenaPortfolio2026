
import { Project, Skill, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Typography', 'Branding', 'UX/UI', 'Motion Graphics'];

export const SKILLS: Skill[] = [
  { name: 'Adobe Illustrator', proficiency: 95, category: 'Software' },
  { name: 'Figma', proficiency: 90, category: 'Software' },
  { name: 'After Effects', proficiency: 80, category: 'Software' },
  { name: 'Visual Identity', proficiency: 90, category: 'Design' },
  { name: 'Layout Design', proficiency: 85, category: 'Design' },
  { name: 'Wireframing', proficiency: 88, category: 'Design' },
  { name: 'Project Management', proficiency: 75, category: 'Soft Skills' },
  { name: 'Strategic Communication', proficiency: 85, category: 'Soft Skills' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Type & Tensions',
    category: 'Typography',
    description: 'An exploration of brutalist typography in digital layouts.',
    longDescription: 'This project investigates the relationship between negative space and oversized letterforms. By breaking traditional grid systems, I explored how tension can be created through scale and overlap, leading to a unique visual language for contemporary editorial design.',
    coverImage: 'https://picsum.photos/seed/type1/1200/800',
    year: '2024',
    tools: ['Adobe Illustrator', 'InDesign'],
    process: [
      {
        id: 'p1',
        title: 'Initial Research',
        image: 'https://picsum.photos/seed/proc1/800/600',
        description: 'Analyzing classic Swiss design and modern brutalist movements.'
      },
      {
        id: 'p2',
        title: 'Sketching Phase',
        image: 'https://picsum.photos/seed/proc2/800/600',
        description: 'Iterating on glyph distortions and spatial arrangements.'
      },
      {
        id: 'p3',
        title: 'Final Composition',
        image: 'https://picsum.photos/seed/proc3/800/600',
        description: 'Refining weights and ensuring legibility despite radical styling.'
      }
    ]
  },
  {
    id: '2',
    title: 'EcoLoop App',
    category: 'UX/UI',
    description: 'A circular economy marketplace for university students.',
    longDescription: 'EcoLoop addresses the waste generated on university campuses. It facilitates easy item exchange and recycling through a gamified interface that rewards sustainable behavior.',
    coverImage: 'https://picsum.photos/seed/ux1/1200/800',
    year: '2023',
    tools: ['Figma', 'Protopie'],
    process: [
      {
        id: 'p4',
        title: 'User Flows',
        image: 'https://picsum.photos/seed/proc4/800/600',
        description: 'Mapping the journey from listing an item to completion of trade.'
      },
      {
        id: 'p5',
        title: 'High-Fidelity Wireframes',
        image: 'https://picsum.photos/seed/proc5/800/600',
        description: 'Applying a clean, accessible aesthetic to complex marketplace screens.'
      }
    ]
  },
  {
    id: '3',
    title: 'Kinetic Rhythm',
    category: 'Motion Graphics',
    description: 'Translating auditory beats into visual geometry.',
    longDescription: 'A 60-second animation project where sound design and motion are intrinsically linked. Each shape follows a specific instrument, creating a synesthetic experience.',
    coverImage: 'https://picsum.photos/seed/motion1/1200/800',
    year: '2024',
    tools: ['After Effects', 'Ableton Live'],
    process: [
      {
        id: 'p6',
        title: 'Storyboard',
        image: 'https://picsum.photos/seed/proc6/800/600',
        description: 'Keyframe planning for synchronization with audio peaks.'
      }
    ]
  },
  {
    id: '4',
    title: 'Noir Coffee Brand',
    category: 'Branding',
    description: 'Visual identity for a boutique dark-roast coffee shop.',
    longDescription: 'Noir Coffee aims for an upscale, mysterious vibe. The branding uses deep textures and minimalist gold foil accents to communicate premium quality.',
    coverImage: 'https://picsum.photos/seed/brand1/1200/800',
    year: '2023',
    tools: ['Adobe Illustrator', 'Photoshop'],
    process: [
      {
        id: 'p7',
        title: 'Logo Marks',
        image: 'https://picsum.photos/seed/proc7/800/600',
        description: 'Developing a signature icon that represents the roasted bean.'
      },
      {
        id: 'p8',
        title: 'Mockups',
        image: 'https://picsum.photos/seed/proc8/800/600',
        description: 'Testing the identity on packaging, signage, and merchandise.'
      }
    ]
  },
  {
    id: '5',
    title: 'Flow Magazine',
    category: 'Typography',
    description: 'Editorial layout for an avant-garde design publication.',
    longDescription: 'Flow Magazine focuses on the "movement" of design. The layout reflects this through fluid grids and expressive typography that leads the reader through articles.',
    coverImage: 'https://picsum.photos/seed/type2/1200/800',
    year: '2024',
    tools: ['InDesign', 'Lightroom'],
    process: [
      {
        id: 'p9',
        title: 'Grid Logic',
        image: 'https://picsum.photos/seed/proc9/800/600',
        description: 'Establishing a flexible 12-column grid for dynamic content.'
      }
    ]
  },
  {
    id: '6',
    title: 'ZenTask UI',
    category: 'UX/UI',
    description: 'Minimalist task manager focused on cognitive load reduction.',
    longDescription: 'ZenTask is designed for neurodivergent users who struggle with visual clutter. It uses a focus-mode interface to minimize distractions.',
    coverImage: 'https://picsum.photos/seed/ux2/1200/800',
    year: '2024',
    tools: ['Figma'],
    process: [
      {
        id: 'p10',
        title: 'Research',
        image: 'https://picsum.photos/seed/proc10/800/600',
        description: 'Conducting interviews with users to identify pain points in typical task apps.'
      }
    ]
  }
];
