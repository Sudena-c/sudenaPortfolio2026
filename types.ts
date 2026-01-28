
export type Category = 'All' | 'Typography' | 'Branding' | 'UX/UI' | 'Motion Graphics';

export interface ProcessStep {
  id: string;
  image: string;
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
  process: ProcessStep[];
  tools: string[];
  year: string;
}

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
  category: 'Design' | 'Software' | 'Soft Skills';
}
