import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [command, setCommand] = useState('whoami');
  const [showSnake, setShowSnake] = useState(false);
  const fullText = t('hero.title');

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleCommandSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && command.trim().toLowerCase() === 'snake') {
      setShowSnake(true);
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-500/3 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 glass rounded-full">
            <span className="font-mono text-sm text-gray-500">daniel@devsecops:~$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommandSubmit}
              className="bg-transparent font-mono text-sm outline-none text-gray-300 w-24"
              aria-label="Terminal command"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-white">DANIEL</span>{' '}
            <span className="gradient-text">FELIPE</span>
          </h1>

          {/* Typing subtitle */}
          <div className="mb-8 flex justify-center">
            <div className="font-mono text-base sm:text-lg md:text-xl text-amber-500/80 px-5 py-2.5 rounded-lg border border-amber-500/10 bg-white/[0.02] max-w-full overflow-hidden">
              <span>{displayText}</span>
              <span className="animate-blink" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA */}
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            <Shield className="w-5 h-5" />
            <span>{t('hero.cta')}</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Status bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-16">
            {[
              { label: 'System Online', color: 'bg-emerald-500' },
              { label: 'Security Active', color: 'bg-amber-500' },
              { label: 'Ready for Connection', color: 'bg-sky-500' }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <div className={`w-1.5 h-1.5 ${item.color} rounded-full animate-subtle-pulse`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-9 rounded-full border-2 border-amber-500/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-amber-500/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Snake Game Modal — fullscreen on mobile */}
      {showSnake && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowSnake(false)}>
          <div
            className="relative bg-gray-900 rounded-2xl shadow-2xl border border-amber-500/20 w-full max-w-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <h2 className="text-lg font-bold text-white font-mono">🐍 Snake Game</h2>
              <button
                onClick={() => setShowSnake(false)}
                className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src="/snake.html"
              title="Snake Game"
              className="w-full h-[75vh] md:h-[70vh] border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
};
