import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  variant?: 'preview' | 'full';
  onNavigate?: (page: 'home' | 'services') => void;
}

const Services: React.FC<ServicesProps> = ({ variant = 'full', onNavigate }) => {
  // Se for preview, mostra apenas os primeiros 3 itens. Se for full, mostra todos.
  const displayedServices = variant === 'preview' ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {variant === 'preview' && (
              <h2 className="text-brand-600 font-semibold uppercase tracking-wide mb-2">Nossos Serviços</h2>
            )}
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              {variant === 'preview' ? 'Soluções Práticas para Desafios Diários' : 'Catálogo de Serviços'}
            </h3>
            {variant === 'full' && (
                <p className="mt-4 text-slate-600">
                    Todas as ferramentas que você precisa para escalar sua operação.
                </p>
            )}
          </div>
          
          {variant === 'preview' && onNavigate && (
            <button 
              onClick={() => onNavigate('services')}
              className="inline-flex items-center font-semibold text-brand-600 hover:text-brand-700 bg-transparent border-none cursor-pointer"
            >
              Ver todas as possibilidades <ArrowUpRight className="ml-1 w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:border-brand-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 shadow-sm mb-6 group-hover:text-brand-600 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-200 text-slate-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;