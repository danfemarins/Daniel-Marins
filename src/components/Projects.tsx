import React from 'react';
import { Github, Brain, Shield, Database, Terminal, Eye, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver();

  const projects = [
    {
      id: 'weapon-detection',
      title: language === 'pt' ? 'Genesis Recon' : 'Genesis RS Technology',
      subtitle: language === 'pt' ? 'Reconhecimento de Armas com IA' : 'AI Weapon Detection',
      description: language === 'pt' 
        ? 'Sistema de IA em tempo real para detectar armas em vídeo, desenvolvido para segurança urbana e monitoramento inteligente.' 
        : 'Real-time AI system for weapon detection in video, developed for urban security and intelligent monitoring.',
      tech: ['Python', 'React', 'OpenCV', 'TensorFlow'],
      icon: <Brain className="w-6 h-6" />,
      link: 'https://genesisrecon.com.br',
      image: 'src/assets/img/genesisrecon.png', 
      category: 'real',
      status: 'production'
    },
  {
    id: 'painel-recon',
    title: 'Painel Recon',
    subtitle: language === 'pt' ? 'Gerenciamento de Dispositivos IoT' : 'IoT Device Management',
    description: language === 'pt' 
      ? 'Plataforma para monitorar e gerenciar dispositivos com o Genesis Recon instalado (como Raspberry Pi ou Arduinos), incluindo métricas de saúde, conexões seguras, localização e status do sistema.' 
      : 'Platform to monitor and manage devices running Genesis Recon (like Raspberry Pi or Arduinos), including health metrics, secure connections, location tracking, and system status.',
    tech: ['Next.js', 'MongoDB', 'Mapbox', 'TypeScript'],
    icon: <Shield className="w-6 h-6" />,
    image: 'src/assets/img/painelrecon.png', // Substitua com o caminho real se quiser usar a screenshot enviada
    category: 'real',
    status: 'development'
  },
    {
      id: 'darkshell-logger',
      title: 'DarkShell Logger',
      subtitle: language === 'pt' ? 'Análise de Logs em Tempo Real' : 'Real-time Log Analysis',
      description: language === 'pt' 
        ? 'Parser e analisador de logs com detecção de anomalias e alertas de segurança automatizados.' 
        : 'Log parser and analyzer with anomaly detection and automated security alerts.',
      tech: ['Python', 'FastAPI', 'ElasticSearch', 'Docker'],
      icon: <Terminal className="w-6 h-6" />,
      github: 'https://github.com/danielfelipe/darkshell-logger',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'fictional',
      status: 'development'
    },
    {
      id: 'securebridge',
      title: 'SecureBridge',
      subtitle: language === 'pt' ? 'Autenticação MFA com APIs' : 'MFA Authentication with APIs',
      description: language === 'pt' 
        ? 'Sistema de integração de autenticação multi-fator com APIs REST seguras e criptografia avançada.' 
        : 'Multi-factor authentication integration system with secure REST APIs and advanced encryption.',
      tech: ['Node.js', 'MongoDB', 'JWT', 'Redis'],
      icon: <Lock className="w-6 h-6" />,
      github: 'https://github.com/danielfelipe/securebridge',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'fictional',
      status: 'planning'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production': return 'text-green-500 bg-green-100 dark:bg-green-900/30';
      case 'development': return 'text-orange-500 bg-orange-100 dark:bg-orange-900/30';
      case 'planning': return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'production': return language === 'pt' ? 'PRODUÇÃO' : 'PRODUCTION';
      case 'development': return language === 'pt' ? 'DESENVOLVIMENTO' : 'DEVELOPMENT';
      case 'planning': return language === 'pt' ? 'PLANEJAMENTO' : 'PLANNING';
      default: return 'UNKNOWN';
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.05),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-orange-500/50 to-transparent" />
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
            <Database className="w-5 h-5 text-orange-500" />
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              ls -la /projects/active/
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-orange-500 dark:text-orange-400 font-mono">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </div>
                  {project.category === 'real' && (
                    <div className="px-3 py-1 rounded-full text-xs font-mono font-medium text-green-500 bg-green-100 dark:bg-green-900/30">
                      REAL
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 p-3 bg-orange-500/90 backdrop-blur-sm rounded-full text-white">
                  {project.icon}
                </div>

                {/* Overlay effects */}
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-orange-500 dark:text-orange-400 font-mono text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-mono border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg transition-all duration-300 text-sm font-mono font-medium group/btn"
                    >
                      <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      {t('projects.viewProject')}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 text-sm font-mono font-medium border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      {t('projects.viewCode')}
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border border-orange-500/20 rounded rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};