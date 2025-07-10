import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative px-3 py-2 rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <div className="flex items-center space-x-1">
        <span className={`text-sm font-mono font-medium transition-all duration-300 ${
          language === 'pt' ? 'text-orange-500' : 'text-gray-400 dark:text-gray-500'
        }`}>
          PT
        </span>
        <span className="text-orange-500/40 font-mono">|</span>
        <span className={`text-sm font-mono font-medium transition-all duration-300 ${
          language === 'en' ? 'text-orange-500' : 'text-gray-400 dark:text-gray-500'
        }`}>
          EN
        </span>
      </div>
      <div className="absolute inset-0 rounded-lg bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};