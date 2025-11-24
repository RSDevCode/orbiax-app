import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME, WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'services') => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Area */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <img 
                src="https://placehold.co/40x40/0ea5e9/ffffff?text=O" 
                alt={`${COMPANY_NAME} Logo`} 
                className="h-8 w-auto rounded-md"
            />
            <span className="font-bold text-2xl text-slate-800 tracking-tight">{COMPANY_NAME}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavClick('services')}
              className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm bg-transparent border-none cursor-pointer"
            >
              Serviços
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-0.5"
            >
              Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md"
            >
              Serviços
            </button>
            <div className="pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;