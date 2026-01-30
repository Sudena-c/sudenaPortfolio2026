
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
    finalBannerImage: 'https://i.ibb.co/vx9dxxy5/Screenshot-2026-01-29-at-10-40-52-AM.png',
    year: '2025',
    tools: ['Figma'],
    process: [
      {
        id: 'p1-intro',
        title: 'Every day, millions of people ask one small question: "What should I cook today?" That question sounds simple - but it creates stress, wasted food, and unhealthy choices.',
      },
      {
        id: 'p1-1',
        title: 'Identifying the Problem',
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
        description: 'Key Insights: Decision fatigue is not occasional — it is a daily burden, lack of visibility into available groceries intensifies decision fatigue, more choices do not reduce confusion — they increase it, shared households add a social layer to meal decisions, users want guidance, not control, health intentions often break down under decision pressure, transparency and inclusion reduce friction in shared decisions.'
      },
      {
        id: 'p1-wireframes',
        title: 'Wireframes',
        image: 'https://i.ibb.co/Q3WLdt4S/Chat-GPT-Image-Jan-30-2026-12-18-21-PM.png'
      },
      {
        id: 'p1-3',
        title: 'Ideation & Prototyping',
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
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-vintage-record-player-spinning-a-vinyl-4554-large.mp4',
    year: '2025',
    tools: ['InDesign'],
    process: [
      {
        id: 'p2-1',
        title: 'Research',
        description: 'Researched on different kinds of coffee table books, the different grids they use, the kinds of content they are made of and the relevance behind them.'
      },
      {
        id: 'p2-2',
        title: 'History and Relevance of Vinyl',
        image: 'https://i.ibb.co/hFy3FnLq/importance-in-digital-age.jpg',
        description: 'I focused on 3 main things through the book, two of those were the history and the importance of Vinyl in todays time.'
      },
      {
        id: 'p2-3',
        title: 'The Book',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
        description: 'This was the final book, it focuses on some of the famour records also, along with how vinyl records are made in the first place.'
      }
    ]
  },
  {
    id: '3',
    title: 'Rayve - Electric Car Brand',
    category: 'Branding',
    description: 'Visual identity for a forward-thinking EV startup.',
    longDescription: 'RAYVE is a solar-powered electric vehicle brand designed for modern urban commuters who value sustainability without compromising on style or efficiency. The brand envisions everyday city travel and long travel hours where clean energy seamlessly supports mobility, reducing environmental impact while enhancing the driving experience. RAYVEs identity reflects conscious innovation—quiet, responsible, and forward-looking—built for individuals who want their daily choices to contribute to a cleaner future, with a special USP.',
    coverImage: 'https://i.ibb.co/DHRYgS77/Free-Billboard-Mockup-2nd-draft-blue-copy.jpg',
    year: '2023',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    process: [
      {
        id: 'p3-brand',
        title: 'Brand: Mission, Vision, Values',
        description: 'The brand aims to be a leading catalyst for sustainable and enjoyable urban mobility, empowering individuals to navigate their cities with ease and style. It focuses on designing, manufacturing, and delivering compact, smart electric vehicles that enhance urban life by offering a driving experience that is stylish, sustainable, and effortless. Guided by values of innovation, efficiency, independence, and tech-savvy thinking, the brand blends sustainability with modern design to create mobility solutions suited for contemporary city living.'
      },
      {
        id: 'p3-1',
        title: 'Logo Concept',
        image: 'https://i.ibb.co/chLsRy6z/image.png',
        description: 'The RAYVE logo is a fluid and dynamic abstract mark, embodying the core essence of the brand. The sweeping, continuous teal form evokes a sense of motion and forward momentum, mirroring the effortless drive and modern design of RAYVE electric vehicles. Its graceful curves subtly hint at the harnessing of energy, like a wave drawing power, while the vibrant teal color signifies both clean energy and a refreshing, contemporary aesthetic.'
      },
      {
        id: 'p3-logo-dev',
        title: 'Logo Development',
        image: 'https://i.ibb.co/TDnRYZcC/image.png',
        secondaryImage: 'https://i.ibb.co/bjW7BYNs/image.png'
      },
      {
        id: 'p3-2',
        title: '3D design of the Showroom using the logo',
        image: 'https://i.ibb.co/DHQCxgzQ/image.png',
        description: 'Designed this 3D model of the showroom and how the logo can be placed in the space.'
      },
      {
        id: 'p3-mockups',
        title: 'Brand Mockups',
        gallery: [
          'https://i.ibb.co/F4wfc0Xt/image.png',
          'https://i.ibb.co/9mTx0b7L/Stationery-Mockup-1-RAYVEpsd-copy.jpg',
          'https://i.ibb.co/pj377j5J/Screenshot-2026-01-30-at-4-10-10-PM.png',
          'https://i.ibb.co/hxPJQXnN/Screenshot-2026-01-30-at-4-17-43-PM.png'
        ]
      },
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
        image: 'https://i.ibb.co/Zpbzcyfq/Screenshot-2026-01-30-at-6-28-27-PM.png',
        secondaryImage: 'https://i.ibb.co/mrSdZJVG/web-development.png',
        description: 'Redesigned, through coding, an existing website- Nike.'
      },
      {
        id: 'p3-logo-dev',
        title: 'Logo Development',
        image: 'https://i.ibb.co/TDnRYZcC/image.png',
        secondaryImage: 'https://i.ibb.co/bjW7BYNs/image.png'
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
