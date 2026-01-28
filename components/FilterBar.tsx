
import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  isDarkMode: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, activeCategory, onCategoryChange, isDarkMode }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === cat
              ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
              : (isDarkMode ? 'bg-neutral-900 text-neutral-400 hover:text-white' : 'bg-neutral-100 text-neutral-600 hover:text-black')
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
