
import { Project, Category } from './types.ts';

export const CATEGORIES: Category[] = ['All', 'UI/UX', 'Editorial/Print Design', 'Branding', 'Web Development', 'Digital Marketing', 'Illustration'];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MealMate App',
    category: 'UI/UX',
    description: 'A collaborative meal-planning platform for shared households.',
    longDescription: 'MealMate is a collaborative meal-planning platform designed for people sharing a household. Users create individual profiles by adding food preferences, dietary choices, and commonly available groceries at home. Based on this information, the platform suggests daily meal options that align with both household inventory and collective preferences.',
    coverImage: 'https://i.ibb.co/PzMM3J9q/all-screens-copy-1.jpg',
    finalBannerImage: 'https://i.ibb.co/vx9dxxy5/Screenshot-2026-01-29-at-10-40-52-AM.png', // Moved the high-res mockup here
    year: '2025',
    tools: ['Figma'],
    process: [
      {
        id: 'p1-1',
        title: 'Identifying the Problem',
        image: 'https://i.ibb.co/M5K9rWQC/image.png',
        description: 'People living alone or in shared households often struggle to decide what to cook each day. Limited awareness of available groceries, differing food preferences, and lack of coordination between household members make daily meal decisions mentally exhausting and inefficient.'
      },
      {
        id: 'p1-2',
        title: 'User Research',
        image: 'https://i.ibb.co/Pvp3WX5v/image.png',
        description: 'This project combined primary and secondary research to understand meal-planning challenges in shared and independent living environments. Primary research included surveys and conversations with students, homemakers, and young adults living independently. The findings showed that deciding what to cook is a frequent daily challenge, driven by decision fatigue, limited visibility into available ingredients, and differing food preferences within households.'
      },
      {
        id: 'p1-insight',
        title: 'Key Insights',
        image: 'https://i.ibb.co/p6nX2KyZ/Screenshot-2026-01-29-at-10-38-31-AM.png',
        description: 'Key Insights: Decision fatigue is not occasional — it is a daily burden, lack of visibility into available groceries intensifies decision fatigue, more choices do not reduce confusion — they increase it, shared households add a social layer to meal decisions, users want guidance, not control, health intentions often break down under decision pressure, transparency and inclusion reduce friction in shared decisions. After all of the research I started making the Information Architecture of the app.'
      },
      {
        id: 'p1-3',
        title: 'Ideation & Prototyping',
        // Removed image from here as requested
        description: 'Based on the research and the learnings, the design focused on reducing choice overload, supporting shared decision-making, and increasing visibility into available groceries. The prototype features a shared household pantry sync and a "Quick Pick" recommendation engine that suggests recipes based on what all is available, keeping in mind nutrition and preferences.'
      }
    ]
  },
  {
    id: '2',
    title: 'Coffee Table Book Design',
    category: 'Editorial/Print Design',
    description: 'Vinyl- A Timeless Sound',
    longDescription: 'This coffee table book explores the cultural legacy of vinyl records as both a medium of sound and a symbol of timeless music. The project focuses on visual storytelling through print, combining archival imagery, editorial layouts, and narrative pacing to create a tactile reading experience.',
    coverImage: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
    year: '2025',
    tools: ['InDesign'],
    process: [
      {
        id: 'p2-1',
        title: 'Research',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
        description: 'Establishing a flexible 12-column grid for dynamic content.'
      },
      {
        id: 'p2-2',
        title: 'Grids',
        image: 'https://images.unsplash.com/photo-1509023467864-1ecbb3f636c8?q=80&w=800&auto=format&fit=crop',
        description: 'Iterating through multiple grid systems to find the balance between readability and artistic expression.'
      },
      {
        id: 'p2-3',
        title: 'The Book',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
        description: 'Final production files and physical mockup verification.'
      }
    ]
  },
  {
    id: '3',
    title: 'Rayve - Electric Car Brand',
    category: 'Branding',
    description: 'Visual identity for a forward-thinking EV startup.',
    longDescription: 'Rayve aims for a clean, aerodynamic, and high-energy vibe. The branding uses sharp geometric forms and neon accents to communicate performance and sustainability.',
    coverImage: 'https://i.ibb.co/4RsyvxCQ/image.png',
    year: '2023',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    process: [
      {
        id: 'p3-1',
        title: 'Logo Concept',
        image: 'https://images.unsplash.com/photo-1525184990524-2d6eb5321b55?q=80&w=800&auto=format&fit=crop',
        description: 'Developing a signature icon that represents kinetic energy and flow.'
      },
      {
        id: 'p3-2',
        title: 'Typography',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
        description: 'Selecting a sans-serif typeface that matches the futuristic industrial design of the vehicles.'
      },
      {
        id: 'p3-3',
        title: 'Mockups',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
        description: 'Applying the identity to digital interfaces and physical touchpoints.'
      }
    ]
  },
  {
    id: '4',
    title: 'Making a Website',
    category: 'Web Development',
    description: 'A custom portfolio experience built with React and Tailwind.',
    longDescription: 'A high-performance web platform designed to handle large media assets while maintaining a minimalist aesthetic and lightning-fast load times.',
    coverImage: 'https://i.ibb.co/JRJPxD2T/Screenshot-2026-01-29-at-11-05-15-AM.png',
    year: '2024',
    tools: ['React', 'Next.js', 'VSCode', 'Vercel'],
    process: [
      {
        id: 'p4-1',
        title: 'Learning how to Code',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
        description: 'Understanding the fundamentals of modern frontend frameworks and responsive design.'
      },
      {
        id: 'p4-2',
        title: 'Redesigning an existing Website',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
        description: 'Analyzing existing layouts and improving user flow and hierarchy.'
      },
      {
        id: 'p4-3',
        title: 'Making my own Website',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
        description: 'Developing a custom-built portfolio from scratch to showcase my unique design perspective.'
      }
    ]
  },
  {
    id: '5',
    title: 'Rebranding Strategy',
    category: 'Digital Marketing',
    description: 'Campaign design and market positioning for a local business.',
    longDescription: 'A comprehensive digital marketing strategy focused on organic community building and data-driven content creation across social platforms.',
    coverImage: 'https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png',
    year: '2023',
    tools: ['Google Analytics', 'FB Ads Manager'],
    process: [
      {
        id: 'p5-1',
        title: 'Research',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop',
        description: 'Identifying key demographics and interest clusters for targeted reach.'
      },
      {
        id: 'p5-2',
        title: 'Rebranding',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop',
        description: 'Refreshing the visual language to better align with the brand’s updated values.'
      },
      {
        id: 'p5-3',
        title: 'Social Media Campaign',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
        description: 'Executing a multi-platform content strategy focused on engagement.'
      }
    ]
  },
  {
    id: '6',
    title: 'Calendar based on Warli Art',
    category: 'Illustration',
    description: 'A series of vector illustrations inspired by traditional folk art.',
    longDescription: 'This series explores the intricate patterns found in Warli tribal art and translates them into a modern calendar format with a minimal color palette.',
    coverImage: 'https://i.ibb.co/zVS4zwpV/Screenshot-2026-01-29-at-11-07-33-AM.png',
    year: '2024',
    tools: ['Procreate', 'Adobe Illustrator'],
    process: [
      {
        id: 'p6-1',
        title: 'Concept & Calendar',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
        description: 'Combining traditional geometric storytelling with modern calendar layouts.'
      }
    ]
  }
];
