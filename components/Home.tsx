
import React, { useState, useMemo } from 'react';
import { Project, Category } from '../types.ts';
import { CATEGORIES } from '../constants.tsx';
import ProjectCard from './ProjectCard.tsx';
import FilterBar from './FilterBar.tsx';
import ContactForm from './ContactForm.tsx';
import ProfileInfo from './ProfileInfo.tsx';
import { User, Briefcase } from 'lucide-react';

interface HomeProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ projects, onProjectClick, isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section id="hero" className="py-20 flex flex-col items-start max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className={`text-4xl md:text-7xl font-bold leading-tight tracking-tight mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Communication designer Designing <span className="text-neutral-500">intuitive experiences</span> through logic, structure, and visual storytelling.
        </h2>
        <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-12 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Hi, I'm Sudena. I specialize in UI/UX, branding, and editorial design. Currently exploring the intersection of digital experience and human-centric strategy.
        </p>
        <a 
          href="#projects" 
          className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
            isDarkMode ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
          }`}
        >
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <User size={28} className="text-neutral-500" />
              About Me
            </h3>
            <div className={`space-y-4 text-lg ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              <p>
                My design philosophy is rooted in clarity and emotional resonance. As a Communication Design student, I've spent the last few years refining my ability to distill complex ideas into simple, impactful visuals.
              </p>
              <p>
                Whether it's the precise kerning of a typeface or the smooth transition of a user flow, I believe that every detail counts. I am constantly curious about how visual communication influences social behavior and culture.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className={`aspect-square rounded-2xl overflow-hidden bg-neutral-200 ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                alt="Sudena" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <Briefcase size={28} className="text-neutral-500" />
              Selected Work
            </h3>
            <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              A collection of academic and self-initiated projects across disciplines.
            </p>
          </div>
          <FilterBar 
            categories={CATEGORIES} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory}
            isDarkMode={isDarkMode}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onProjectClick(project)} 
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold">Get in touch</h3>
            <p className={`text-lg ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
          </div>
          <ContactForm isDarkMode={isDarkMode} />
        </div>
      </section>

      {/* Designer Info Section */}
      <ProfileInfo isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
