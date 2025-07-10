import React from 'react';
import { Shield, Search, Lock, GitBranch, FileCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver();

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('services.secure'),
      description: t('services.secureDesc'),
      gradient: 'from-orange-500 to-red-500',
      delay: 0
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: t('services.pentest'),
      description: t('services.pentestDesc'),
      gradient: 'from-red-500 to-pink-500',
      delay: 150
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: t('services.hardening'),
      description: t('services.hardeningDesc'),
      gradient: 'from-purple-500 to-indigo-500',
      delay: 300
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: t('services.devops'),
      description: t('services.devopsDesc'),
      gradient: 'from-blue-500 to-cyan-500',
      delay: 450
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: t('services.compliance'),
      description: t('services.complianceDesc'),
      gradient: 'from-green-500 to-emerald-500',
      delay: 600
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('services.automation'),
      description: t('services.automationDesc'),
      gradient: 'from-yellow-500 to-orange-500',
      delay: 750
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,165,0,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
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
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              systemctl status services --all
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="text-lg text-orange-500 dark:text-orange-400 font-mono">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                {service.icon}
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Status indicator */}
              <div className="flex items-center gap-2 text-sm font-mono">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500">DISPONÍVEL</span>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-orange-500/20 rounded rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-90" />
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-orange-500/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                Todos os serviços operacionais
              </span>
            </div>
            <div className="w-px h-6 bg-orange-500/30" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                Resposta em 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};