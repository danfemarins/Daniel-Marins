import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      services: 'Serviços',
      contact: 'Contato'
    },
    hero: {
      title: 'DevSecOps | Python | JS | Automação | React | MySQL',
      subtitle: 'Segurança, eficiência e inovação na linha de frente do desenvolvimento.',
      cta: 'Ver Projetos'
    },
    about: {
      title: 'Perfil Digital',
      subtitle: 'Identidade Cibernética',
      description: 'Sou Daniel Felipe, 28 anos, formado em Defesa Cibernética. Atuo com segurança ofensiva e defensiva, DevOps, automação, redes e análise de vulnerabilidades. Domino React, Python, TypeScript, Linux, Azure e CI/CD.',
      timeline: 'Histórico de Acesso'
    },
    projects: {
      title: 'Projetos Ativos',
      subtitle: 'Sistemas em Produção',
      viewProject: 'Acessar Sistema',
      viewCode: 'Ver Código'
    },
    services: {
      title: 'Serviços Disponíveis',
      subtitle: 'Capacidades Operacionais',
      secure: 'Desenvolvimento Seguro',
      secureDesc: 'Aplicações com arquitetura defensiva e práticas de código seguro',
      pentest: 'Testes de Penetração',
      pentestDesc: 'Avaliação de vulnerabilidades e simulação de ataques',
      hardening: 'Hardening & Controle',
      hardeningDesc: 'Fortificação de sistemas e controle de acesso avançado',
      devops: 'DevOps & CI/CD',
      devopsDesc: 'Automação com GitHub Actions, Docker e infraestrutura Linux',
      compliance: 'Conformidade LGPD/ISO',
      complianceDesc: 'Adequação às normas de segurança e proteção de dados',
      automation: 'Automações',
      automationDesc: 'Criação de sistemas automatizados, bots ou agentes de IA para tarefas operacionais ou segurança defensiva',
    },
    technologies: {
      title: 'Arsenal Tecnológico',
      subtitle: 'Ferramentas & Frameworks'
    },
    contact: {
      title: 'Estabelecer Conexão',
      subtitle: 'Canal de Comunicação Seguro',
      name: 'Identificação',
      email: 'Email',
      message: 'Mensagem Criptografada',
      send: 'Transmitir',
      success: 'Transmitido com sucesso'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      title: 'DevSecOps | Python | JS | Automation | React | MySQL',
      subtitle: 'Security, efficiency, and innovation at the forefront of development.',
      cta: 'View Projects'
    },
    about: {
      title: 'Digital Profile',
      subtitle: 'Cyber Identity',
      description: "I'm Daniel Felipe, 28, Cyber Defense graduate. I work with offensive and defensive security, automation, infrastructure, and vulnerability analysis. Skilled in React, Python, TypeScript, Linux, CI/CD and cloud systems.",
      timeline: 'Access History'
    },
    projects: {
      title: 'Active Projects',
      subtitle: 'Production Systems',
      viewProject: 'Access System',
      viewCode: 'View Code'
    },
    services: {
      title: 'Available Services',
      subtitle: 'Operational Capabilities',
      secure: 'Secure Development',
      secureDesc: 'Applications with defensive architecture and secure coding practices',
      pentest: 'Penetration Testing',
      pentestDesc: 'Vulnerability assessment and attack simulation',
      hardening: 'Hardening & Control',
      hardeningDesc: 'System fortification and advanced access control',
      devops: 'DevOps & CI/CD',
      devopsDesc: 'Automation with GitHub Actions, Docker and Linux infrastructure',
      compliance: 'LGPD/ISO Compliance',
      complianceDesc: 'Security standards and data protection compliance',
      automation: 'Automations',
      automationDesc: 'Development of automated systems, bots or AI agents for operational tasks or defensive security',

    },
    technologies: {
      title: 'Tech Arsenal',
      subtitle: 'Tools & Frameworks'
    },
    contact: {
      title: 'Establish Connection',
      subtitle: 'Secure Communication Channel',
      name: 'Identification',
      email: 'Email',
      message: 'Encrypted Message',
      send: 'Transmit',
      success: 'Successfully transmitted'
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};