import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
          } text-orange-500 group-hover:text-orange-400`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          } text-orange-500 group-hover:text-orange-400`}
        />
      </div>
      <div className="absolute inset-0 rounded-lg bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};