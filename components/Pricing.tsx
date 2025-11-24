import React from 'react';
import { PLANS, WHATSAPP_LINK } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelos de Contratação</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Atuamos sob demanda para entregar exatamente o que sua empresa precisa, 
            sem custos desnecessários.
          </p>
        </div>

        {/* Grid ajustado para 2 colunas centralizadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.isPopular 
                  ? 'bg-slate-800 border-brand-500 shadow-2xl shadow-brand-900/50 scale-105 z-10' 
                  : 'bg-slate-900/50 border-slate-700 hover:bg-slate-800 transition-colors'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="text-xl font-bold text-white">{plan.price}</div>
                {plan.monthly && (
                    <div className="text-xs text-brand-300 mt-1 uppercase tracking-wide font-medium">{plan.monthly}</div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all ${
                  plan.isPopular 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25' 
                    : 'bg-white text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
            <p>Dúvidas sobre qual o melhor modelo para você? <a href={WHATSAPP_LINK} className="text-brand-400 underline hover:text-brand-300">Converse com um consultor</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;