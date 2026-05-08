import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useScrollEffect';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { isVisible, elementRef } = useIntersectionObserver(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_rr48yuh',
        'template_4zw9ivt',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '0mv7OWBu9C9aVqwUQ'
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert("Erro ao enviar. Tente novamente mais tarde.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = "w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-white font-mono text-sm placeholder:text-gray-600";

  return (
    <section id="contact" className="section-padding bg-gray-950 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-mono text-sm text-amber-500/70 mb-3 tracking-wider uppercase">
            netstat -an | grep ESTABLISHED
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-amber-500 font-mono">{t('contact.subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact Info — 2 cols */}
          <div className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Email */}
            <a
              href="mailto:danielfelipemarins@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-white/5 hover:border-amber-500/20 transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-xs text-gray-500 truncate">danielfelipemarins@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5521981905306?text=Olá%20Daniel%2C%20Estou%20interessado%20em%20conversar%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-white/5 hover:border-amber-500/20 transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">WhatsApp</p>
                <p className="text-xs text-gray-500">+55 (21) 98190-5306</p>
              </div>
            </a>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/danfemarins', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/daniel-felipe-8122711b9', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { href: 'https://wa.me/5521981905306', icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 bg-gray-900/50 text-gray-400 hover:text-amber-500 hover:bg-amber-500/10 rounded-xl transition-all border border-white/5 hover:border-amber-500/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
              <div className="status-dot" />
              <span className="text-xs font-mono text-emerald-500">
                {language === 'pt' ? 'Online — Disponível para projetos' : 'Online — Available for projects'}
              </span>
            </div>
          </div>

          {/* Form — 3 cols */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <form onSubmit={handleSubmit} className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-white/5 space-y-5">
              {!isSubmitted ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-gray-400 mb-2">{t('contact.name')}</label>
                      <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-gray-400 mb-2">{t('contact.email')}</label>
                      <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" className={inputClasses} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-gray-400 mb-2">{language === 'pt' ? 'Assunto' : 'Subject'}</label>
                    <input type="text" id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder={language === 'pt' ? 'Sobre o que deseja falar?' : 'What would you like to talk about?'} className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-gray-400 mb-2">{t('contact.message')}</label>
                    <textarea id="contact-message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder={language === 'pt' ? 'Descreva seu projeto...' : 'Describe your project...'} className={`${inputClasses} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        {language === 'pt' ? 'Enviando...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('contact.success')}</h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {language === 'pt' ? 'Resposta em até 24h.' : 'Response within 24h.'}
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