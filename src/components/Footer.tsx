import React from 'react';
import { Terminal, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,165,0,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Terminal className="w-8 h-8 text-orange-500" />
                <div className="absolute inset-0 w-8 h-8 bg-orange-500/20 rounded blur-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-mono font-bold">Daniel Felipe</span>
                <span className="text-xs font-mono text-orange-500/70">
                  root@devsecops:~$
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-mono">
              © 2024 Daniel Felipe. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Quick Links */}
            <div className="flex items-center space-x-6">
              {[
                { key: 'home', id: 'hero' },
                { key: 'projects', id: 'projects' },
                { key: 'contact', id: 'contact' }
              ].map(({ key, id }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 font-mono text-sm"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/danielfelipe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-felipe-8122711b9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5521981905306"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
            <span className="text-orange-500">daniel@devsecops:~$</span>
            <span>echo "Obrigado pela visita! 🚀"</span>
          </div>
        </div>
      </div>
    </footer>
  );
};