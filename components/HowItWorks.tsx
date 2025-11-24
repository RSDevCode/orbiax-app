import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-600 uppercase tracking-wide mb-2">Processo Simplificado</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Como trabalhamos</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Sem complexidade. Entendemos sua necessidade e entregamos a solução pronta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 transform scale-x-90"></div>

          {STEPS.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-brand-200 group-hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                  <step.icon className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {step.id}. {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;