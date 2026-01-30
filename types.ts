
export type Category = 'All' | 'UI/UX' | 'Editorial/Print Design' | 'Branding' | 'Web Development' | 'Digital Marketing' | 'Illustration';

export interface ProcessStep {
  id: string;
  image?: string; 
  secondaryImage?: string; // Kept for backward compatibility
  gallery?: string[]; // New field for 3+ images
  title: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  longDescription: string;
  coverImage: string;
  finalBannerImage?: string; 
  videoUrl?: string; 
  process: ProcessStep[];
  tools: string[];
  year: string;
}

export interface Skill {
  name: string;
  proficiency: number; 
  category: 'Design' | 'Software' | 'Soft Skills';
}
