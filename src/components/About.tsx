import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { MapPin, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver(0.2);

  const timelineData = [
    {
      year: '2023–2024',
      title: language === 'pt' ? 'Analista Cloud' : 'Cloud Analyst',
      company: 'GPS Rotas Seguras',
      description: language === 'pt'
        ? 'Gestão de infraestrutura cloud e automação'
        : 'Cloud infrastructure management and automation',
      status: 'completed'
    },
    {
      year: '2025–Presente',
      title: language === 'pt' ? 'Líder Técnico' : 'TechLeader',
      company: 'GPS Rotas',
      description: language === 'pt'
        ? 'Liderança técnica e gestão de equipe'
        : 'Technical leadership and team management',
      status: 'active'
    },
    {
      year: '2025–Presente',
      title: language === 'pt' ? 'Membro do Comitê Público' : 'Public Committee Member',
      company: 'IDCiber',
      description: language === 'pt'
        ? 'Contribuição para políticas de segurança cibernética'
        : 'Contributing to cybersecurity policies',
      status: 'active'
    }
  ];

  const stats = [
    { value: '29', label: 'Anos' },
    { value: '2+', label: 'Anos Exp.' },
    { value: '20+', label: 'Tecnologias' },
    { value: '4', label: 'Projetos' }
  ];

  const skills = [
    { skill: 'Security', level: 95 },
    { skill: 'DevOps', level: 90 },
    { skill: 'Python', level: 88 },
    { skill: 'React', level: 85 }
  ];

  return (
    <section id="about" className="section-padding bg-gray-950 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={elementRef}
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-mono text-sm text-amber-500/70 mb-3 tracking-wider uppercase">
              cat /etc/profile.d/about.sh
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-amber-500 font-mono">{t('about.subtitle')}</p>
          </div>

          {/* Description */}
          <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg text-gray-300 leading-relaxed text-center bg-white/[0.02] p-6 rounded-xl border border-white/5">
              {t('about.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Card */}
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-white/5 hover:border-amber-500/20 transition-colors">
                {/* Profile header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img
                      src="/assets/img/profile.jpeg"
                      alt="Daniel Felipe - DevSecOps Specialist"
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-500/50"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Daniel Felipe</h3>
                    <p className="text-amber-500 font-mono text-sm">DevSecOps Specialist</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-mono mt-1">
                      <MapPin className="w-3 h-3" />
                      Rio de Janeiro, BR
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 bg-white/[0.03] rounded-xl">
                      <div className="text-xl font-bold text-amber-500">{stat.value}</div>
                      <div className="text-[11px] text-gray-500 font-mono mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {skills.map((item, index) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-medium">{item.skill}</span>
                        <span className="font-mono text-amber-500 text-xs">{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-400 h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${item.level}%` : '0%',
                            transitionDelay: `${400 + index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-bold text-white">{t('about.timeline')}</h3>
              </div>

              <div className="relative pl-8 space-y-8">
                {/* Timeline line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-amber-500 via-amber-500/30 to-transparent" />

                {timelineData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className={`absolute -left-5 top-1 w-4 h-4 rounded-full border-2 ${
                      item.status === 'active'
                        ? 'bg-amber-500 border-amber-400 shadow-lg shadow-amber-500/30'
                        : 'bg-gray-700 border-gray-600'
                    }`} />

                    <div className="bg-gray-900/50 rounded-xl p-5 border border-white/5 hover:border-amber-500/20 transition-colors group">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${
                          item.status === 'active'
                            ? 'text-amber-500 bg-amber-500/10'
                            : 'text-gray-500 bg-white/5'
                        }`}>
                          {item.year}
                        </span>
                        {item.status === 'active' && (
                          <div className="flex items-center gap-1.5">
                            <div className="status-dot" style={{ width: '6px', height: '6px' }} />
                            <span className="text-[10px] font-mono text-emerald-500">ATIVO</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-base font-semibold text-white group-hover:text-amber-500 transition-colors mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-amber-500/70 font-mono text-xs mb-1.5">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
