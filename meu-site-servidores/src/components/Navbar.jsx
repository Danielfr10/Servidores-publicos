import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, setIsLoginOpen }) {
  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('inicio')}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-200">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800 tracking-tight block leading-none">Capacita</span>
              <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">Servidores</span>
            </div>
          </div>

          {/* Links de Navegação entre "Páginas" */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'cursos', label: 'Cursos' },
              { id: 'trilhas', label: 'Trilhas de aprendizagem' },
              { id: 'sobre', label: 'Sobre' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-emerald-600 font-semibold border-b-2 border-emerald-500 pb-1' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-3 py-2 cursor-pointer"
            >
              Entrar
            </button>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-md shadow-emerald-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Começar agora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}