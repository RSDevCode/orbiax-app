import React from 'react';
import { COMPANY_NAME, WHATSAPP_LINK } from '../constants';
import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'services') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* CTA Box */}
        <div className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center text-white mb-16 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para otimizar sua operação?</h2>
                <p className="text-brand-100 mb-8 max-w-2xl mx-auto text-lg">
                    Agende uma conversa gratuita. Entendemos seu cenário e mostramos exatamente onde a tecnologia pode gerar valor para seu negócio.
                </p>
                <a 
                    href={WHATSAPP_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-brand-700 font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
                >
                    Falar com Consultor
                </a>
            </div>
            {/* Decor Circles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg text-slate-800">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Transformando empresas com soluções de automação e tecnologia inteligente. Foco em resultados reais.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 bg-transparent border-none p-0 cursor-pointer">Gestão de Vendas</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 bg-transparent border-none p-0 cursor-pointer">Atendimento Automático</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 bg-transparent border-none p-0 cursor-pointer">Processos Internos</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 bg-transparent border-none p-0 cursor-pointer">Gestão Financeira</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-600 bg-transparent border-none p-0 cursor-pointer">Serviços</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-600 bg-transparent border-none p-0 cursor-pointer">Como Contratar</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contato</h4>
            <div className="flex gap-4 mb-4">
                <a href="#" className="text-slate-400 hover:text-brand-600"><Instagram className="w-5 h-5"/></a>
                <a href="https://www.linkedin.com/in/rafael-sanzio-86ba61137/" className="text-slate-400 hover:text-brand-600"><Linkedin className="w-5 h-5"/></a>
            </div>
            <p className="text-slate-500 text-sm">
                rafaelsanzio16@gmail.com<br/>
                São Paulo, SP
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-12 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;