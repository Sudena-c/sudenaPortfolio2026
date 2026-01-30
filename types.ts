
export type Category = 'All' | 'UI/UX' | 'Editorial/Print Design' | 'Branding' | 'Web Development' | 'Digital Marketing' | 'Illustration';

export interface ProcessStep {
  id: string;
  image?: string; 
  title: string;
  description?: string; // Changed to optional
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
