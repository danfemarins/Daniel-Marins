import React from 'react';
import { Shield, Search, Lock, GitBranch, FileCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver(0.1);

  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('services.secure'),
      description: t('services.secureDesc'),
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t('services.pentest'),
      description: t('services.pentestDesc'),
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t('services.hardening'),
      description: t('services.hardeningDesc'),
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: t('services.devops'),
      description: t('services.devopsDesc'),
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: t('services.compliance'),
      description: t('services.complianceDesc'),
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('services.automation'),
      description: t('services.automationDesc'),
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-950 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-mono text-sm text-amber-500/70 mb-3 tracking-wider uppercase">
            systemctl list-units --type=service
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('services.title')}</h2>
          <p className="text-amber-500 font-mono">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="status-dot" style={{ width: '6px', height: '6px' }} />
                <span className="text-emerald-500">{language === 'pt' ? 'DISPONÍVEL' : 'AVAILABLE'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/[0.02] rounded-full border border-white/5 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-2">
              <div className="status-dot" style={{ width: '6px', height: '6px' }} />
              {language === 'pt' ? 'Todos os serviços operacionais' : 'All services operational'}
            </span>
            <div className="w-px h-4 bg-white/10" />
            <span>{language === 'pt' ? 'Resposta em 24h' : 'Response in 24h'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};