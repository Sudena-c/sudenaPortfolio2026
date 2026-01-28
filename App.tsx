
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Sync theme with body class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-[#0a0a0a]', 'text-[#f5f5f5]');
      document.body.classList.remove('bg-white', 'text-[#171717]');
    } else {
      document.body.classList.add('bg-white', 'text-[#171717]');
      document.body.classList.remove('bg-[#0a0a0a]', 'text-[#f5f5f5]');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setActiveProject(null);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleTheme={toggleTheme} 
        onHomeClick={handleBackToHome}
        showBackToHome={!!activeProject}
      />
      
      <main className="container mx-auto px-4 md:px-8 pt-24 pb-16">
        {activeProject ? (
          <ProjectDetail project={activeProject} onBack={handleBackToHome} isDarkMode={isDarkMode} />
        ) : (
          <Home 
            projects={PROJECTS} 
            onProjectClick={handleProjectClick} 
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      <footer className={`py-12 border-t ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
            &copy; {new Date().getFullYear()} Sudena. Communication Designer. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
