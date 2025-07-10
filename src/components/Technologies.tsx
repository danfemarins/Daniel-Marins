import React from 'react';
import { Code, Database, Server, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Technologies: React.FC = () => {
  const { t } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver();

  const technologies = {
    frontend: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'TypeScript', icon: '🔷', level: 85 },
      { name: 'Next.js', icon: '▲', level: 80 },
      { name: 'Tailwind CSS', icon: '🎨', level: 88 },
      { name: 'Vue.js', icon: '💚', level: 75 }
    ],
    backend: [
      { name: 'Python', icon: '🐍', level: 95 },
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'FastAPI', icon: '⚡', level: 90 },
      { name: 'Express', icon: '🚀', level: 80 },
      { name: 'Django', icon: '🌟', level: 75 }
    ],
    devops: [
      { name: 'Docker', icon: '🐳', level: 92 },
      { name: 'Kubernetes', icon: '⚙️', level: 78 },
      { name: 'AWS', icon: '☁️', level: 85 },
      { name: 'Azure', icon: '🌐', level: 88 },
      { name: 'GitHub Actions', icon: '🔄', level: 90 }
    ],
    security: [
      { name: 'Kali Linux', icon: '🔒', level: 95 },
      { name: 'Metasploit', icon: '🛡️', level: 88 },
      { name: 'Nmap', icon: '🔍', level: 92 },
      { name: 'Wireshark', icon: '📡', level: 85 },
      { name: 'Burp Suite', icon: '🔐', level: 90 }
    ]
  };

  const categoryIcons = {
    frontend: <Code className="w-6 h-6" />,
    backend: <Server className="w-6 h-6" />,
    devops: <Database className="w-6 h-6" />,
    security: <Shield className="w-6 h-6" />
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    devops: 'from-purple-500 to-indigo-500',
    security: 'from-orange-500 to-red-500'
  };

  return (
    <section 
      id="technologies" 
      className="py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Terminal-style header */}
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-orange-500/20">
            <Code className="w-5 h-5 text-orange-500" />
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              cat /proc/skills | grep -E "(frontend|backend|devops|security)"
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('technologies.title')}
          </h2>
          <p className="text-lg text-orange-500 dark:text-orange-400 font-mono">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div
              key={category}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} rounded-xl text-white shadow-lg`}>
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t(`${category}`) || category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <p className="text-sm font-mono text-orange-500">
                    {techs.length} tools
                  </p>
                </div>
              </div>

              {/* Technologies List */}
              <div className="space-y-4">
                {techs.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 150 + index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm font-mono text-orange-500">
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${tech.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 150 + index * 50 + 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category stats */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-mono text-gray-500 dark:text-gray-400">
                    Avg. Proficiency
                  </span>
                  <span className="font-mono text-orange-500 font-medium">
                    {Math.round(techs.reduce((acc, tech) => acc + tech.level, 0) / techs.length)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-orange-500/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">20+</div>
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400">Tecnologias</div>
            </div>
            <div className="w-px h-8 bg-orange-500/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">6+</div>
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400">Anos Exp.</div>
            </div>
            <div className="w-px h-8 bg-orange-500/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">4</div>
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400">Especialidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};