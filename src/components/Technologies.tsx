import React from 'react';
import { Code, Database, Server, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Technologies: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver(0.1);

  const categories = [
    {
      key: 'frontend',
      icon: <Code className="w-5 h-5" />,
      color: 'from-sky-500 to-cyan-500',
      techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
    },
    {
      key: 'backend',
      icon: <Server className="w-5 h-5" />,
      color: 'from-emerald-500 to-green-500',
      techs: ['Python', 'Node.js', 'FastAPI', 'Express', 'Django']
    },
    {
      key: 'devops',
      icon: <Database className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-500',
      techs: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions']
    },
    {
      key: 'security',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-500',
      techs: ['Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Burp Suite']
    }
  ];

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    security: 'Security'
  };

  return (
    <section id="technologies" className="section-padding bg-black relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-mono text-sm text-amber-500/70 mb-3 tracking-wider uppercase">
            cat /proc/skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('technologies.title')}</h2>
          <p className="text-amber-500 font-mono">{t('technologies.subtitle')}</p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {categories.map((cat, catIndex) => (
            <div
              key={cat.key}
              className={`bg-gray-900/50 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 bg-gradient-to-br ${cat.color} rounded-xl text-white`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{categoryLabels[cat.key]}</h3>
                  <p className="text-[11px] font-mono text-amber-500/60">{cat.techs.length} tools</p>
                </div>
              </div>

              {/* Tech list */}
              <div className="space-y-2">
                {cat.techs.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2.5 px-3 py-2 bg-white/[0.02] rounded-lg hover:bg-white/[0.05] transition-colors group"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color}`} />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/[0.02] rounded-full border border-white/5">
            {[
              { value: '20+', label: language === 'pt' ? 'Tecnologias' : 'Technologies' },
              { value: '2+', label: language === 'pt' ? 'Anos Exp.' : 'Years Exp.' },
              { value: '4', label: language === 'pt' ? 'Especialidades' : 'Specialties' }
            ].map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="w-px h-8 bg-white/10" />}
                <div className="text-center">
                  <div className="text-xl font-bold text-amber-500">{stat.value}</div>
                  <div className="text-[11px] font-mono text-gray-500">{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};