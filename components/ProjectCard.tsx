import React from 'react';
import { Project } from '../types.ts';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  isDarkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, isDarkMode }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer space-y-4 animate-in fade-in zoom-in-95 duration-500"
    >
      <div className={`aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <span className={`text-xs font-semibold uppercase tracking-wider opacity-60 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {project.category}
          </span>
          <h4 className="text-xl font-bold mt-1 group-hover:underline transition-all">
            {project.title}
          </h4>
        </div>
        <div className={`p-2 rounded-full border transition-all ${
          isDarkMode ? 'border-neutral-800 group-hover:bg-white group-hover:text-black' : 'border-neutral-200 group-hover:bg-black group-hover:text-white'
        }`}>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;