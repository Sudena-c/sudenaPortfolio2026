
import React, { useState, useMemo } from 'react';
import { Project, Category } from '../types.ts';
import { CATEGORIES, INTERESTS } from '../constants.tsx';
import ProjectCard from './ProjectCard.tsx';
import FilterBar from './FilterBar.tsx';
import ContactForm from './ContactForm.tsx';
import ProfileInfo from './ProfileInfo.tsx';
import { User, Briefcase, Sparkles } from 'lucide-react';

interface HomeProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ projects, onProjectClick, isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return [...projects, ...INTERESTS].filter(p => p.category === activeCategory);
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
          <div className="order-2 md:order-1 space-y-6 text-left">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <User size={28} className="text-neutral-500" />
              About Me
            </h3>
            <div className={`space-y-4 text-lg ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              <p>
                I'm a passionate designer with a keen eye for detail and a love for creating meaningful work. 
                What began as a confusion between marketing and design soon became a fascination — leading me to 
                explore how ideas connect, communicate, and influence. My curiosity about how things work, paired 
                with a research-driven mindset, has shaped a career focused on solving problems through thoughtful design.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className={`aspect-square rounded-2xl overflow-hidden bg-neutral-200 ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <img 
                src="https://i.ibb.co/SXybJnG2/Sudena.jpg" 
                alt="Sudena" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 text-left">
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

      {/* Interests Section - "Beyond Design" */}
      <section id="interests" className="pt-24 border-t border-neutral-800/20">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
             <h3 className="text-3xl font-bold flex items-center justify-center gap-3">
              <Sparkles size={28} className="text-neutral-500" />
              Beyond Design: Creative Identity
            </h3>
            <p className={`max-w-xl mx-auto ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              My creative process doesn't stop at the screen. These interests are essential parts of my identity that inform my perspective as a communicator.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {INTERESTS.map((interest) => (
              <ProjectCard 
                key={interest.id} 
                project={interest} 
                onClick={() => onProjectClick(interest)} 
                isDarkMode={isDarkMode}
              />
            ))}
          </div>

          <button 
             onClick={() => {
               const el = document.getElementById('contact');
               el?.scrollIntoView({ behavior: 'smooth' });
             }}
             className={`mt-8 px-10 py-4 rounded-full text-sm font-bold border transition-all ${
               isDarkMode 
               ? 'border-neutral-700 hover:bg-white hover:text-black' 
               : 'border-neutral-300 hover:bg-black hover:text-white'
             }`}
          >
            Let's create something together
          </button>
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
