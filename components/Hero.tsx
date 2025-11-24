import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface HeroProps {
  onNavigate: (page: 'home' | 'services') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-100 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-medium text-xs uppercase tracking-wide mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Tecnologia para Negócios
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Automação Inteligente que <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
              Transforma sua Empresa
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Elimine processos manuais e repetitivos. Nossas soluções conectam seus sistemas e 
            otimizam sua operação para você focar no crescimento do negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-brand-500/20 hover:bg-brand-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Fale Agora no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center cursor-pointer"
            >
              Ver Soluções
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Projetos Sob Medida
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Foco em Resultado
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Tecnologia Avançada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;