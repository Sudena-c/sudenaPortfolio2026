
import { Project, Category } from './types.ts';

export const CATEGORIES: Category[] = ['All', 'UI/UX', 'Editorial/Print Design', 'Branding', 'Web Development', 'Digital Marketing', 'Illustration', 'Creative Interests'];

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
        image: 'https://i.ibb.co/kpV5gbD/cover-page.jpg',
        description: 'This was the final book, it focuses on some of the famour records also, along with how vinyl records are made in the first place.'
      }
    ]
  },
  {
    id: '3',
    title: 'Rayve - Electric Car Brand',
    category: 'Branding',
    description: 'Visual identity for a forward-thinking EV startup.',
    longDescription: 'RAYVE is a solar-powered electric vehicle brand designed for modern urban commuters who value sustainability without compromising on style or efficiency. RAYVEs identity reflects conscious innovation—quiet, responsible, and forward-looking—built for individuals who want their daily choices to contribute to a cleaner future.',
    coverImage: 'https://i.ibb.co/DHRYgS77/Free-Billboard-Mockup-2nd-draft-blue-copy.jpg',
    year: '2023',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    process: [
      {
        id: 'p3-brand',
        title: 'Brand: Mission, Vision, Values',
        description: 'The brand aims to be a leading catalyst for sustainable and enjoyable urban mobility, empowering individuals to navigate their cities with ease and style.'
      },
      {
        id: 'p3-logo-dev',
        title: 'Logo Development',
        image: 'https://i.ibb.co/Zpbzcyfq/Screenshot-2026-01-30-at-6-28-27-PM.png',
        description: 'The iterative process focused on capturing the energy of solar light. Early sketches explored geometric rays merging with fluid movement, leading to a mark that feels both solid and dynamic.'
      },
      {
        id: 'p3-1',
        title: 'Logo Concept',
        image: 'https://i.ibb.co/chLsRy6z/image.png',
        description: 'The final RAYVE logo is a fluid and dynamic abstract mark, embodying the core essence of the brand.'
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
    year: '2024-2025',
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
        id: 'p4-3',
        title: 'Making my own Website',
        image: 'https://i.ibb.co/VKxKj00/Screenshot-2026-01-30-at-6-34-39-PM.png',
        description: 'Developing a custom-built portfolio from scratch to showcase my unique design perspective using coding and AI tools.'
      }
    ]
  },
  {
    id: '5',
    title: 'Rebranding Strategy',
    category: 'Digital Marketing',
    description: 'Campaign design and market positioning for an existing business.',
    longDescription: 'Built a social media campaign for an existing brand- Tea Better after doing some in depth research on the brand, its value, and market position, leading to rebranding them.',
    coverImage: 'https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png',
    year: '2025',
    tools: ['Google Analytics', 'Secondary Research', 'Illustrator'],
    process: [
      {
        id: 'p5-1',
        title: 'Research',
        image: 'https://i.ibb.co/gZFxTsY1/Screenshot-2026-01-30-at-7-09-12-PM.png',
        description: 'Understanding the brands stand in the market and the brand itself. Understanding the brands customers, products, the philosophy and relevance.'
      },
      {
        id: 'p5-2',
        title: 'Rebranding',
        image: 'https://i.ibb.co/v4hF73HL/Screenshot-2026-01-29-at-11-05-53-AM.png',
        description: 'Refreshing the visual language to better align with the brands updated values, their customers and how the brand is potrayed. '
      },
      {
        id: 'p5-3',
        title: 'Campaign Pillar: Kitty Talk Tea Better',
        image: 'https://i.ibb.co/xqNdKYPN/Screenshot-2026-01-30-at-6-58-54-PM.png',
        description: 'Core Message: Make your next kitty party memorable and mindful. Swap the traditional chai for a cup of TEA BETTER—the healthier, tastier, and more Instagrammable choice that will get everyone talking.'
      },
      {
        id: 'p5-4',
        title: 'Campaign Pillar: Tea For Thought',
        image: 'https://i.ibb.co/35TFz5h7/Screenshot-2026-01-30-at-7-00-33-PM.png',
        description: 'Core Message: Position TEA BETTER not just as a beverage, but as a catalyst for creativity, deep thinking, and mindfulness.'
      },
      {
        id: 'p5-5',
        title: 'Campaign Pillar: Your Daily Dose of Better',
        image: 'https://i.ibb.co/6JYBDFc9/Screenshot-2026-01-30-at-7-00-50-PM.png',
        description: 'Core Message: TEA BETTER isnt just a drink; its a simple, delicious, and natural ritual for your daily well-being.'
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
        description: 'Combining traditional geometric storytelling with modern calendar layouts. Below is the full 12-month series.'
      },
      {
        id: 'p6-gallery',
        title: '',
        gallery: [
          'https://i.ibb.co/DPg8yPnd/jan.jpg',
          'https://i.ibb.co/d0DykQgX/feb.jpg',
          'https://i.ibb.co/mFhJLz6F/march.jpg',
          'https://i.ibb.co/XrP8Yr9c/april.jpg',
          'https://i.ibb.co/PdK5s4V/may.jpg',
          'https://i.ibb.co/8nJnhQFn/june.jpg',
          'https://i.ibb.co/d4xjfP4X/july.jpg',
          'https://i.ibb.co/PGRGZw86/august.jpg',
          'https://i.ibb.co/twM5FHvY/sep.jpg',
          'https://i.ibb.co/0RBn5LS7/oct.jpg',
          'https://i.ibb.co/zhj1NHSB/nov.jpg',
          'https://i.ibb.co/mrmgk1jG/dec.jpg'
        ]
      }
    ]
  }
];

export const INTERESTS: Project[] = [
  {
    id: 'interest-1',
    title: 'Aerial Silks & Movement',
    category: 'Creative Interests',
    description: 'Exploring identity through gravity-defying movement.',
    longDescription: 'Dancing in the air is where I find my flow. Aerial Silks is not just a dance form for me; it is a discipline that requires core strength, mental focus, and a deep connection between the body and the fabric. It teaches me about structural balance and organic expression—concepts I carry into my design work.',
    coverImage: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop',
    year: 'Ongoing',
    tools: ['Movement', 'Strength', 'Aerial Fabric'],
    process: [
      {
        id: 'i1-gallery',
        title: '',
        gallery: [
          'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop'
        ]
      }
    ]
  },
  {
    id: 'interest-2',
    title: 'Visual Journals & Sketches',
    category: 'Creative Interests',
    description: 'Analog explorations of the world around me.',
    longDescription: 'Sketching is my way of slowing down and truly observing. Whether it is a fleeting architectural detail or a quick gesture drawing, my notebooks are where I document my curiosities and experiment with lines without the constraints of a digital grid.',
    coverImage: 'https://i.ibb.co/VKxKj00/Screenshot-2026-01-30-at-6-34-39-PM.png',
    year: 'Ongoing',
    tools: ['Ink', 'Graphite', 'Watercolors', 'Paper'],
    process: [
      {
        id: 'i2-gallery',
        title: '',
        gallery: [
          'https://images.unsplash.com/photo-1544273677-c433136021d4?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop'
        ]
      }
    ]
  },
  {
    id: 'interest-3',
    title: 'Photography',
    category: 'Creative Interests',
    description: 'Capturing moments and framing perspectives.',
    longDescription: 'Photography allows me to explore composition and light in its purest form. It is through the lens that I learn to see the beauty in the mundane and the stories hidden in the details of the everyday world.',
    coverImage: 'https://images.unsplash.com/photo-1502982722823-b921f447bdb3?q=80&w=800&auto=format&fit=crop',
    year: 'Ongoing',
    tools: ['Digital', 'Film', 'Composition'],
    process: [
      {
        id: 'i3-gallery',
        title: '',
        gallery: [
          'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop'
        ]
      }
    ]
  }
];
