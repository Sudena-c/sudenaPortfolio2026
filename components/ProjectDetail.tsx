
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
  const isInterest = project.category === 'Creative Interests';

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
      <div className="max-w-4xl mb-16 mx-auto text-center">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center justify-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mx-auto ${
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
        <div className="space-y-2 text-center">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center justify-center gap-2">
            <Layout size={14} /> Category
          </p>
          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.category}</p>
        </div>
        <div className="space-y-2 text-center">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center justify-center gap-2">
            <Clock size={14} /> Year
          </p>
          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.year}</p>
        </div>
        <div className="space-y-2 md:col-span-2 text-center">
          <p className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center justify-center gap-2">
            <Wrench size={14} /> Tools Used
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
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
      {!isInterest && (
        <div 
          className="rounded-2xl overflow-hidden mb-24 aspect-[21/9] cursor-zoom-in group relative max-w-6xl mx-auto"
          onClick={() => setSelectedImage({ src: project.coverImage, alt: project.title })}
        >
          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-sm">Click to expand</span>
          </div>
        </div>
      )}

      {/* Process Section */}
      <div className="max-w-5xl mx-auto space-y-48">
        {!isInterest && (
          <h2 className="text-4xl font-bold text-center mb-24 underline underline-offset-8 decoration-neutral-800">Process & Development</h2>
        )}
        
        {project.process.map((step) => {
          const gallery = step.gallery;
          const hasTitle = step.title && step.title.trim() !== "";
          const hasDescription = step.description && step.description.trim() !== "";
          
          return (
            <div key={step.id} className="space-y-12 animate-in fade-in duration-1000">
              {/* Title and Description - Only if not a simplified Interest or if specifically provided */}
              {(hasTitle || hasDescription) && (
                <div className="text-center max-w-3xl mx-auto space-y-6">
                  {hasTitle && <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{step.title}</h3>}
                  {hasDescription && (
                    <p className={`text-xl leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {step.description}
                    </p>
                  )}
                </div>
              )}

              {/* Media Content - Always Central and Below Text */}
              {gallery ? (
                /* Gallery View */
                <div className={`grid grid-cols-1 ${gallery.length >= 12 ? 'md:grid-cols-3' : (gallery.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2')} gap-8`}>
                  {gallery.map((imgSrc, imgIdx) => (
                    <div 
                      key={`${step.id}-img-${imgIdx}`}
                      className="rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-lg aspect-[3/4]"
                      onClick={() => setSelectedImage({ src: imgSrc || '', alt: `${step.title || 'Visual'} ${imgIdx + 1}` })}
                    >
                      <img 
                        src={imgSrc} 
                        alt={step.title || 'Visual Asset'} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-xs">Zoom View</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : step.image ? (
                /* Single Image View */
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
              ) : null}
            </div>
          );
        })}

        {/* Optional Final Banner Image (Hide for interests unless needed) */}
        {!isInterest && project.finalBannerImage && (
          <div className="pt-8 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-12">Final Showcase</h3>
            <div 
              className="rounded-2xl overflow-hidden cursor-zoom-in group relative shadow-2xl max-w-6xl mx-auto"
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
          <div className="pt-16 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-12 flex items-center justify-center gap-2">
              <PlayCircle size={16} /> Narrative Video
            </h3>
            <div className={`rounded-3xl overflow-hidden shadow-2xl border mx-auto max-w-5xl ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
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
          </div>
        )}
      </div>

      {/* Next Project Suggestion */}
      <div className="mt-32 pt-16 border-t border-neutral-800 text-center">
        <p className="text-sm font-semibold opacity-50 mb-4">Interested in more?</p>
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
