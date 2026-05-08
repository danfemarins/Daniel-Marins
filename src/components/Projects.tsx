import React from 'react';
import { Brain, Shield, Bot, PcCase, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver(0.1);

  const projects = [
    {
      id: 'weapon-detection',
      title: 'Genesis Recon',
      subtitle: language === 'pt' ? 'Reconhecimento de Armas com IA' : 'AI Weapon Detection',
      description: language === 'pt'
        ? 'Sistema de IA em tempo real para detectar armas em vídeo, desenvolvido para segurança urbana e monitoramento inteligente.'
        : 'Real-time AI system for weapon detection in video, developed for urban security and intelligent monitoring.',
      tech: ['Python', 'React', 'OpenCV', 'TensorFlow'],
      icon: <Brain className="w-5 h-5" />,
      link: 'https://genesisrecon.com.br',
      image: '/assets/img/genesisrecon.png',
      status: 'production',
      company: 'Genesis R S Ltda'
    },
    {
      id: 'painel-recon',
      title: 'Painel Recon',
      subtitle: language === 'pt' ? 'Gerenciamento de Dispositivos IoT' : 'IoT Device Management',
      description: language === 'pt'
        ? 'Plataforma para monitorar e gerenciar dispositivos com o Genesis Recon instalado, incluindo métricas de saúde, conexões seguras e status do sistema.'
        : 'Platform to monitor and manage devices running Genesis Recon, including health metrics, secure connections, and system status.',
      tech: ['Next.js', 'MongoDB', 'Mapbox', 'TypeScript'],
      icon: <Shield className="w-5 h-5" />,
      image: '/assets/img/painelrecon.png',
      status: 'development',
      company: 'Genesis R S Ltda'
    },
    {
      id: 'genesis-chatbot-ia',
      title: 'Genesis Chatbot IA',
      subtitle: language === 'pt' ? 'Assistente inteligente com IA e n8n' : 'Smart Assistant with AI and n8n',
      description: language === 'pt'
        ? 'Chatbot integrado ao WhatsApp com n8n, IA Gemini para respostas contextualizadas e banco de dados Supabase.'
        : 'WhatsApp-integrated chatbot using n8n, Gemini AI for contextual responses, and Supabase database.',
      tech: ['n8n', 'Supabase', 'React', 'Google Gemini'],
      icon: <Bot className="w-5 h-5" />,
      image: '/assets/img/chatbot.png',
      status: 'production',
      company: 'Genesis R S Ltda'
    },
    {
      id: 'portalgenesisrs',
      title: 'Portal Genesis RS',
      subtitle: language === 'pt' ? 'Solução Web de Gestão e Operações' : 'Web Solution for Management and Operations',
      description: language === 'pt'
        ? 'Portal institucional que reúne as principais soluções da empresa. Inclui chatbot com IA, blog, console de APIs e vitrine de produtos.'
        : "Official portal bringing together the company's main solutions. Includes AI chatbot, blog, API console, and product showcase.",
      tech: ['React', 'Next.js', 'Supabase', 'n8n'],
      icon: <PcCase className="w-5 h-5" />,
      link: 'https://portalgenesisrs.com.br',
      image: '/assets/img/portalgenesisrs.png',
      status: 'production',
      company: 'Genesis R S Ltda'
    }
  ];

  const statusConfig: Record<string, { label: string; color: string }> = {
    production: { label: language === 'pt' ? 'Produção' : 'Production', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    development: { label: language === 'pt' ? 'Desenvolvimento' : 'Development', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' }
  };

  return (
    <section id="projects" className="section-padding bg-black relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-mono text-sm text-amber-500/70 mb-3 tracking-wider uppercase">
            ls -la /projects/active/
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('projects.title')}</h2>
          <p className="text-amber-500 font-mono">{t('projects.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                {/* Status + Icon */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border ${statusConfig[project.status]?.color}`}>
                    {statusConfig[project.status]?.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3 p-2 bg-amber-500/90 rounded-lg text-white">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors mb-0.5">
                  {project.title}
                </h3>
                <p className="text-amber-500/70 font-mono text-xs mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/[0.03] text-gray-400 rounded-md text-[11px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-black text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t('projects.viewProject')}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
