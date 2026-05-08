import React, { useState } from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Terminal, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { isScrolled } = useScrollEffect();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'about', id: 'about' },
    { key: 'projects', id: 'projects' },
    { key: 'services', id: 'services' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <Terminal className="w-7 h-7 text-amber-500 group-hover:text-amber-400 transition-colors" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors leading-tight">
                Daniel Felipe
              </span>
              <span className="text-[10px] font-mono text-amber-500/60 leading-tight">
                DevSecOps Specialist
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-amber-500 transition-colors rounded-lg hover:bg-white/5"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-amber-500 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navItems.map(({ key, id }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(id)}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-300 hover:text-amber-500 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};