import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Send, Terminal, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-orange-500/50 to-transparent" />
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
            <Terminal className="w-5 h-5 text-orange-500" />
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              netstat -an | grep :443
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-orange-500 dark:text-orange-400 font-mono">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Canais de Comunicação
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">danielfelipemarins@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-mono font-medium text-gray-900 dark:text-white">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">+55 (21) 98190-5306</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/danfemarins"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-gray-600 dark:text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-felipe-8122711b9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-gray-600 dark:text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/5521981905306"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-gray-600 dark:text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-sm text-green-600 dark:text-green-400">
                Online - Disponível para novos projetos
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 space-y-6">
              {!isSubmitted ? (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono font-medium text-gray-900 dark:text-white mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white font-mono"
                      placeholder="Digite seu nome..."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-900 dark:text-white mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white font-mono"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono font-medium text-gray-900 dark:text-white mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none font-mono"
                      placeholder="Descreva seu projeto ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-mono font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitindo...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('contact.success')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
                    Mensagem recebida com segurança. Resposta em até 24h.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};