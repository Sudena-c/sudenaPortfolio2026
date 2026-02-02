
import React from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onHomeClick: () => void;
  showBackToHome: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme, onHomeClick, showBackToHome }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 border-b ${
      isDarkMode ? 'bg-[#0a0a0a]/80 border-neutral-800' : 'bg-white/80 border-neutral-200'
    }`}>
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackToHome ? (
            <button 
              onClick={onHomeClick}
              className={`flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>
          ) : (
            <h1 className="text-xl font-bold tracking-tighter">SUDENA CHANDNANI</h1>
          )}
        </div>

        <div className="flex items-center gap-6">
          {!showBackToHome && (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
              <a href="#projects" className="hover:opacity-70 transition-opacity">Work</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
            </div>
          )}
          
          <button 
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? 'hover:bg-neutral-800' : 'hover:bg-neutral-100'
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
