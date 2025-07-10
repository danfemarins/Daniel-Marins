import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Services />
            <Technologies />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;