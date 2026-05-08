import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-white">Daniel Felipe</p>
            <p className="text-xs text-gray-600 font-mono mt-1">
              © {new Date().getFullYear()} · Todos os direitos reservados
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { key: 'home', id: 'hero' },
              { key: 'projects', id: 'projects' },
              { key: 'contact', id: 'contact' }
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="text-xs text-gray-500 hover:text-amber-500 transition-colors font-mono"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { href: 'https://github.com/danfemarins', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/daniel-felipe-8122711b9', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: 'https://wa.me/5521981905306', icon: <MessageCircle className="w-4 h-4" />, label: 'WhatsApp' }
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 text-gray-600 hover:text-amber-500 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};