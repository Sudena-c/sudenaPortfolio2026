
import { Project, Category } from './types.ts';

export const CATEGORIES: Category[] = ['All', 'UI/UX', 'Editorial/Print Design', 'Branding', 'Web Development', 'Digital Marketing', 'Illustration'];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MealMate App',
    category: 'UI/UX',
    description: 'A circular economy marketplace for university students.',
    longDescription: 'EcoLoop addresses the waste generated on university campuses. It facilitates easy item exchange and recycling through a gamified interface that rewards sustainable behavior.',
    coverImage: 'https://i.ibb.co/PzMM3J9q/all-screens-copy-1.jpg',
    year: '2025',
    tools: ['Figma'],
    process: [
      {
        id: 'p1',
        title: 'Identifying the Problem',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
        description: 'Analyzing campus waste patterns and student trade habits.'
      },
      {
        id: 'p2',
        title: 'User Research',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
        description: 'Analyzing campus waste patterns and student trade habits.'
      },
      {
        id: 'p3',
        title: 'Ideation, Wireframing and Prototype',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
        description: 'Analyzing campus waste patterns and student trade habits.'
      }
    ]
  },
  {
    id: '2',
    title: 'Coffee Table Book Design',
    category: 'Editorial/Print Design',
    description: 'Editorial layout for an avant-garde design publication.',
    longDescription: 'Flow Magazine focuses on the "movement" of design. The layout reflects this through fluid grids and expressive typography that leads the reader through articles.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop',
    year: '2025',
    tools: ['InDesign'],
    process: [
      {
        id: 'p2',
        title: 'Research',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
        description: 'Establishing a flexible 12-column grid for dynamic content.'
      },
      {
        id: 'p2',
        title: 'Grids',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
        description: 'Establishing a flexible 12-column grid for dynamic content.'
      },
      {
        id: 'p2',
        title: 'The Book',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
        description: 'Establishing a flexible 12-column grid for dynamic content.'
      }
    ]
  },
  {
    id: '3',
    title: 'Rayve- an electric car brand',
    category: 'Branding',
    description: 'Visual identity for a boutique dark-roast coffee shop.',
    longDescription: 'Noir Coffee aims for an upscale, mysterious vibe. The branding uses deep textures and minimalist gold foil accents to communicate premium quality.',
    coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    year: '2023',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    process: [
      {
        id: 'p3',
        title: 'Visual Identity',
        image: 'https://images.unsplash.com/photo-1525184990524-2d6eb5321b55?q=80&w=800&auto=format&fit=crop',
        description: 'Developing a signature icon that represents the roasted bean.'
      },
      {
        id: 'p3',
        title: 'Visual Identity',
        image: 'https://images.unsplash.com/photo-1525184990524-2d6eb5321b55?q=80&w=800&auto=format&fit=crop',
        description: 'Developing a signature icon that represents the roasted bean.'
      },
      {
        id: 'p3',
        title: 'Visual Identity',
        image: 'https://images.unsplash.com/photo-1525184990524-2d6eb5321b55?q=80&w=800&auto=format&fit=crop',
        description: 'Developing a signature icon that represents the roasted bean.'
      }
    ]
  },
  {
    id: '4',
    title: 'Making a Website',
    category: 'Web Development',
    description: 'A custom CMS built for digital artists and designers.',
    longDescription: 'A high-performance web platform designed to handle large media assets while maintaining a minimalist aesthetic and lightning-fast load times.',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    year: '2024',
    tools: ['React', 'Next.js', 'VSCode', 'Vercel' ],
    process: [
      {
        id: 'p4',
        title: 'Learning how to Code',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        description: 'Mapping the data flow between the CMS and the frontend.'
      },
      {
        id: 'p4',
        title: 'Redesigning an existing Website',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        description: 'Mapping the data flow between the CMS and the frontend.'
      },
      {
        id: 'p4',
        title: 'Making my own Website',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        description: 'Mapping the data flow between the CMS and the frontend.'
      }
    ]
  },
  {
    id: '5',
    title: 'Rebranding and Strategising for an existing',
    category: 'Digital Marketing',
    description: 'Campaign design for a sustainable tech startup.',
    longDescription: 'A comprehensive digital marketing strategy focused on organic community building and data-driven content creation across social platforms.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    year: '2023',
    tools: ['Google Analytics', 'FB Ads Manager'],
    process: [
      {
        id: 'p5',
        title: 'Research',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop',
        description: 'Identifying key demographics and interest clusters for targeted reach.'
      },
      {
        id: 'p5',
        title: 'Rebranding',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop',
        description: 'Identifying key demographics and interest clusters for targeted reach.'
      },
      {
        id: 'p5',
        title: 'Social Media Marketing Campaign',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop',
        description: 'Identifying key demographics and interest clusters for targeted reach.'
      }
    ]
  },
  {
    id: '6',
    title: 'Calendar based on Warli Art',
    category: 'Illustration',
    description: 'A series of vector illustrations inspired by biological structures.',
    longDescription: 'This series explores the microscopic patterns found in plant cells and translates them into vibrant, modern vector compositions.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    year: '2024',
    tools: ['Procreate', 'Adobe Illustrator'],
    process: [
      {
        id: 'p6',
        title: 'Calendar',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
        description: 'Sketching initial shapes and testing color palettes.'
      }
    ]
  }
];
