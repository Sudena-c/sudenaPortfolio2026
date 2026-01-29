
export type Category = 'All' | 'UI/UX' | 'Editorial/Print Design' | 'Branding' | 'Web Development' | 'Digital Marketing' | 'Illustration';

export interface ProcessStep {
  id: string;
  image?: string; // Made optional to support text-only steps
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  longDescription: string;
  coverImage: string;
  finalBannerImage?: string; // New optional property for a large end-of-project banner
  process: ProcessStep[];
  tools: string[];
  year: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
  category: 'Design' | 'Software' | 'Soft Skills';
}
