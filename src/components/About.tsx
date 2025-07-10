import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import { User, Calendar, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible: isVisibleTop, elementRef: elementRefTop } = useIntersectionObserver();
  const { isVisible: isVisibleTimeline, elementRef: elementRefTimeline } = useIntersectionObserver();

  const timelineData = [
    {
      year: '2020–2023',
      title: language === 'pt' ? 'Defesa Cibernética' : 'Cyber Defense',
      company: 'Estácio',
      description: language === 'pt' 
        ? 'Formação acadêmica em segurança cibernética' 
        : 'Academic training in cybersecurity',
      status: 'completed'
    },
    {
      year: '2018–2023',
      title: language === 'pt' ? 'Analista de Sistemas' : 'Systems Analyst',
      company: 'Embelleze',
      description: language === 'pt' 
        ? 'Desenvolvimento e manutenção de sistemas corporativos' 
        : 'Development and maintenance of corporate systems',
      status: 'completed'
    },
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
      year: '2024–Presente',
      title: language === 'pt' ? 'Gerente de Suporte' : 'Support Manager',
      company: 'GPS Rotas',
      description: language === 'pt' 
        ? 'Liderança técnica e gestão de equipe' 
        : 'Technical leadership and team management',
      status: 'active'
    },
    {
      year: '2024–Presente',
      title: language === 'pt' ? 'Membro do Comitê Público' : 'Public Committee Member',
      company: 'IDCiber',
      description: language === 'pt' 
        ? 'Contribuição para políticas de segurança cibernética' 
        : 'Contributing to cybersecurity policies',
      status: 'active'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={elementRefTop}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisibleTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Terminal-style header */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-black/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-orange-500/20">
              <User className="w-5 h-5 text-orange-500" />
              <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                cat /etc/profile.d/daniel_felipe.sh
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('about.title')}
            </h2>
            <p className="text-lg text-orange-500 dark:text-orange-400 font-mono mb-8">
              {t('about.subtitle')}
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed bg-black/5 dark:bg-white/5 p-6 rounded-lg border border-orange-500/10">
                {t('about.description')}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Card */}
              <div className={`transition-all duration-1000 delay-200 ${
                isVisibleTimeline ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-orange-500/10 relative overflow-hidden">
                {/* Card header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">DF</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Daniel Felipe</h3>
                    <p className="text-orange-500 font-mono text-sm">DevSecOps Specialist</p>
                   <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-1 font-mono mt-1">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      Rio de Janeiro, Brasil
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">28</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Anos</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">6+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Anos Exp.</div>
                  </div>
                </div>

                {/* Skills indicators */}
                <div className="space-y-3">
                  {[
                    { skill: 'Security', level: 95 },
                    { skill: 'DevOps', level: 90 },
                    { skill: 'Python', level: 88 },
                    { skill: 'React', level: 85 }
                  ].map((item, index) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-mono text-gray-700 dark:text-gray-300">{item.skill}</span>
                        <span className="font-mono text-orange-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisibleTimeline ? `${item.level}%` : '0%',
                            transitionDelay: `${600 + index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-orange-500/20 rounded rotate-45" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-500/10 rounded-full" />
              </div>
            </div>

            {/* Timeline */}
            <div 
              ref={elementRefTimeline}
              className={`transition-all duration-1000 delay-400 ${
                isVisibleTimeline ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.timeline')}
                </h3>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent" />
                
                {timelineData.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start mb-8 transition-all duration-500 ${
                      isVisibleTimeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 ${
                      item.status === 'active' 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 animate-pulse' 
                        : 'bg-gray-400 dark:bg-gray-600'
                    }`}>
                      {item.status === 'active' ? (
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                      ) : (
                        <Award className="w-5 h-5 text-white" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-mono px-3 py-1 rounded-full ${
                          item.status === 'active' 
                            ? 'text-orange-500 bg-orange-100 dark:bg-orange-900/30' 
                            : 'text-gray-500 bg-gray-100 dark:bg-gray-700'
                        }`}>
                          {item.year}
                        </span>
                        {item.status === 'active' && (
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-green-500">ATIVO</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-orange-600 dark:text-orange-400 font-medium mb-2 font-mono text-sm">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
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