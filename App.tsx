import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  const navigateTo = (page: 'home' | 'services') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <HowItWorks />
            <Benefits />
            {/* Na Home, mostramos apenas uma prévia dos serviços */}
            <Services variant="preview" onNavigate={navigateTo} />
            <Pricing />
            <Testimonials />
          </>
        ) : (
          <div className="pt-16">
            {/* Cabeçalho da Página de Serviços */}
            <div className="bg-slate-900 py-20 px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossas Soluções</h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Explore o catálogo completo de automações inteligentes que desenvolvemos para otimizar sua empresa.
              </p>
            </div>
            {/* Na página dedicada, mostramos todos os serviços */}
            <Services variant="full" />
            <Pricing />
          </div>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;