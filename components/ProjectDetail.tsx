
import React, { useState } from 'react';
import { Project } from '../types.ts';
import { ArrowLeft, Clock, Wrench, Layout, PlayCircle } from 'lucide-react';
import Lightbox from './Lightbox.tsx';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  isDarkMode: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-700">
      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)} 
          isDarkMode={isDarkMode}
        />
      )}

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
      <div 
        className="rounded-2xl overflow-hidden mb-24 aspect-[21/9] cursor-zoom-in group relative"
        onClick={() => setSelectedImage({ src: project.coverImage, alt: project.title })}
      >
        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-sm">Click to expand</span>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto space-y-32">
        <h2 className="text-3xl font-bold border-l-4 border-neutral-500 pl-6">Process & Development</h2>
        
        {project.process.map((step, index) => {
          // Layout Detection
          const gallery = step.gallery || (step.secondaryImage ? [step.image || '', step.secondaryImage] : null);
          const hasDescription = step.description && step.description.trim() !== "";
          const noDescription = !hasDescription;
          
          // 1. Gallery Layout (multiple images)
          if (gallery) {
            // Determine grid columns: default to 3 if it's a large set (like the calendar), else 2
            const gridCols = gallery.length > 3 ? 'md:grid-cols-3' : (gallery.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2');
            
            return (
              <div key={step.id} className="space-y-12 animate-in fade-in duration-1000">
                {step.title && <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-center">{step.title}</h3>}
                {hasDescription && (
                  <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {step.description}
                  </p>
                )}
                <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
                  {gallery.map((imgSrc, imgIdx) => (
                    <div 
                      key={`${step.id}-img-${imgIdx}`}
                      className="rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-lg aspect-[3/4]"
                      onClick={() => setSelectedImage({ src: imgSrc || '', alt: `${step.title} - Image ${imgIdx + 1}` })}
                    >
                      <img 
                        src={imgSrc} 
                        alt={step.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-xs">Zoom View</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // 2. Centered Visual Layout (1 image, no description)
          const isCenteredVisual = step.image && noDescription;
          if (isCenteredVisual) {
            return (
              <div key={step.id} className="text-center space-y-12 animate-in fade-in duration-1000">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{step.title}</h3>
                <div 
                  className="rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-xl mx-auto max-w-4xl"
                  onClick={() => setSelectedImage({ src: step.image || '', alt: step.title })}
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-sm">Zoom detail</span>
                  </div>
                </div>
              </div>
            );
          }

          // 3. Standard Layout (handles single image or gallery WITH description)
          return (
            <div key={step.id} className="space-y-8">
               <div className={`grid grid-cols-1 items-start gap-12 ${
                step.image ? 'md:grid-cols-2' : 'max-w-3xl mx-auto text-center'
              } ${
                step.image && index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className={step.image && index % 2 !== 0 ? 'md:order-2' : 'md:order-1 text-left'}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  {step.description && (
                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {step.description}
                    </p>
                  )}
                </div>
                {step.image && (
                  <div 
                    className={`rounded-xl overflow-hidden cursor-zoom-in group relative shadow-md ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}
                    onClick={() => setSelectedImage({ src: step.image || '', alt: step.title })}
                  >
                    <img src={step.image} alt={step.title} className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-sm">Zoom detail</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Optional Final Banner Image */}
        {project.finalBannerImage && (
          <div className="pt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-8 text-center">Final Showcase</h3>
            <div 
              className="rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-2xl"
              onClick={() => setSelectedImage({ src: project.finalBannerImage || '', alt: 'Final Outcome' })}
            >
              <img 
                src={project.finalBannerImage} 
                alt="Final Design Outcome" 
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium px-6 py-3 bg-black/50 backdrop-blur-md rounded-full text-base">View Full Case Study Mockup</span>
              </div>
            </div>
          </div>
        )}

        {/* Optional Video Showcase */}
        {project.videoUrl && (
          <div className="pt-16">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-8 text-center flex items-center justify-center gap-2">
              <PlayCircle size={16} /> Narrative Video
            </h3>
            <div className={`rounded-3xl overflow-hidden shadow-2xl border ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
              <video 
                src={project.videoUrl} 
                controls 
                muted 
                loop 
                playsInline
                className="w-full h-auto max-h-[70vh] object-cover bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className={`mt-6 text-center text-sm italic ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
              Process Flip-through & Visual Narrative
            </p>
          </div>
        )}
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
