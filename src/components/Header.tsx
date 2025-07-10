import React from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  const { isScrolled } = useScrollEffect();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/10 dark:bg-black/20 backdrop-blur-xl border-b border-orange-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <Terminal className="w-8 h-8 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
              <div className="absolute inset-0 w-8 h-8 bg-orange-500/20 rounded blur-sm group-hover:bg-orange-400/30 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-mono font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                Daniel Felipe
              </span>
              <span className="text-xs font-mono text-orange-500/70 group-hover:text-orange-400 transition-colors duration-300">
                root@devsecops:~$
              </span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { key: 'home', id: 'hero' },
              { key: 'about', id: 'about' },
              { key: 'projects', id: 'projects' },
              { key: 'services', id: 'services' },
              { key: 'contact', id: 'contact' }
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="relative group px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300"
              >
                <span className="relative z-10">{t(`nav.${key}`)}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300" />
                <div className="absolute inset-0 bg-orange-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};