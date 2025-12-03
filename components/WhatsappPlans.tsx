import React from 'react';
import { MessageSquare, CheckCircle } from 'lucide-react';

const WhatsAppPlans: React.FC = () => {
  return (
    <section id="automacao-whatsapp" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold uppercase tracking-wide mb-2">
            Automação de WhatsApp
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Tenha um WhatsApp que vende sozinho
          </h3>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Transforme seu atendimento com respostas automáticas, captação de leads, funil de vendas e integrações inteligentes.
          </p>
        </div>

        {/* Highlight - Mais vendido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Plano Mais Vendido */}
          <div className="relative group bg-brand-50 border border-brand-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-brand-100 transition-all duration-300">
            
            <span className="absolute top-4 right-4 text-xs font-semibold bg-brand-600 text-white px-3 py-1 rounded-full shadow-md">
              Mais Vendido
            </span>

            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-brand-600" />
              <h4 className="text-2xl font-bold text-slate-900">Plano Profissional</h4>
            </div>

            <p className="text-slate-700 mb-6">
              Fluxos completos, captura de leads, respostas automáticas e integração com planilhas/CRM.
            </p>

            <p className="text-4xl font-extrabold text-brand-600 mb-2">
              R$ 497
            </p>
            <p className="text-slate-600 mb-6">Setup único</p>

            <p className="text-lg font-semibold text-slate-900">
              + R$ 97/mês
            </p>
            <p className="text-slate-600 mb-6">Manutenção, monitoramento e suporte</p>

            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-600 mr-2" /> Funil de vendas automático</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-600 mr-2" /> Captura e segmentação de leads</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-600 mr-2" /> Mensagens inteligentes</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-brand-600 mr-2" /> Integração com Google Sheets/CRM</li>
            </ul>
          </div>

          {/* Outros planos - placeholders, caso queira expandir */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Plano Básico</h4>
            <p className="text-slate-700 mb-4">Automação simples e eficiente para iniciar.</p>
            <p className="text-2xl font-bold text-brand-600">R$ 300 - R$ 800</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Plano Avançado</h4>
            <p className="text-slate-700 mb-4">Integrações profundas, sistemas e IA.</p>
            <p className="text-2xl font-bold text-brand-600">R$ 2.000 - R$ 10.000</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppPlans;
