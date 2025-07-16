import React, { useEffect, useState } from 'react';
import { ChevronDown, Terminal, Shield, Code, X } from 'lucide-react';
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
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: ReturnType<typeof setInterval> | null = null;

    const hackerTitle = document.querySelector(".hacker-title") as HTMLElement;
    if (!hackerTitle) return;

    const original = hackerTitle.dataset.value || "";
    let iteration = 0;

    interval = setInterval(() => {
      hackerTitle.innerText = original
        .split("")
        .map((_, index) => {
          if (index < iteration) return original[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= original.length) {
        clearInterval(interval!);
      }

      iteration += 1 / 2;
    }, 80);
  }, []);

  const handleCommandSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && command.trim().toLowerCase() === 'snake') {
      setShowSnake(true);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-black dark:to-orange-900/10"
    >
      {/* Background and floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,165,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.05)_1px,transparent_1px)]" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal bar (agora com input!) */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-black/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-orange-500/20">
            <Terminal className="w-5 h-5 text-orange-500" />
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              daniel@devsecops:~$&nbsp;
            </span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommandSubmit}
              className="bg-transparent font-mono text-sm outline-none text-gray-700 dark:text-gray-200 w-28"
            />
          </div>

          {/* Nome com efeito hacker */}
          <h1
            className="hacker-title text-6xl md:text-8xl font-bold mb-8 text-gray-900 dark:text-white"
            data-value="DANIEL FELIPE"
          >
            DANIEL FELIPE
          </h1>

          {/* Typing animated title */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <div className="font-mono text-xl md:text-2xl text-orange-500 dark:text-orange-400 bg-black/5 dark:bg-white/5 px-6 py-3 rounded-lg border border-orange-500/20 backdrop-blur-sm">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-mono font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>{t('hero.cta')}</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Status indicators */}
          <div className="flex justify-center items-center space-x-8 mt-16">
            <div className="flex items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>System Online</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span>Security Active</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Ready for Connection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <Code className="w-6 h-6 text-orange-500" />
          <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </div>

      {/* Snake Game Modal */}
      {showSnake && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <button
              onClick={() => setShowSnake(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">🐍 Snake Game</h2>
            <iframe
              src="/snake.html"
              className="w-[320px] h-[400px] md:w-[600px] md:h-[600px] border-2 border-orange-500 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
