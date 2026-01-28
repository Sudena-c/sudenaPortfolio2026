
import React from 'react';
import { Project } from '../types';
import { ArrowLeft, Clock, Wrench, Layout } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  isDarkMode: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, isDarkMode }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-700">
      {/* Header Info */}
      <div className="max-w-4xl mb-16">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity ${
            isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
          }`}
        >
          <ArrowLeft size={16} />
          Back to all work
        </button>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          {project.title}
        </h1>
        <p className={`text-xl md:text-2xl leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {project.longDescription}
        </p>
      </div>

      {/* Meta Bar */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y mb-16 ${
        isDarkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
      }`}>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
            <Layout size={14} /> Category
          </p>
          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.category}</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
            <Clock size={14} /> Year
          </p>
          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.year}</p>
        </div>
        <div className="space-y-2 md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
            <Wrench size={14} /> Tools Used
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map(tool => (
              <span key={tool} className={`text-xs px-2 py-1 rounded-md border ${
                isDarkMode ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-700'
              }`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="rounded-2xl overflow-hidden mb-24 aspect-[21/9]">
        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto space-y-32">
        <h2 className="text-3xl font-bold border-l-4 border-neutral-500 pl-6">Process & Development</h2>
        
        {project.process.map((step, index) => (
          <div key={step.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}>
            <div className={index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {step.description}
              </p>
            </div>
            <div className={`rounded-xl overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
              <img src={step.image} alt={step.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        ))}
      </div>

      {/* Next Project Suggestion */}
      <div className="mt-32 pt-16 border-t border-neutral-800 text-center">
        <p className="text-sm font-semibold opacity-50 mb-4">Want to see more?</p>
        <button 
          onClick={onBack}
          className={`text-2xl font-bold hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
          View all projects
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
