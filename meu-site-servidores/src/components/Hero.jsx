import React from 'react';
import { ShieldCheck, ArrowRight, Award } from 'lucide-react';

export default function Hero({ setActiveTab }) {
  // Função para mudar de aba e voltar ao topo da página
  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-gradient-to-b from-slate-50 to-white pt-16 pb-24 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo - Textos e Chamadas para Ação */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Plataforma Oficial de Capacitação
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#112D4E] tracking-tight leading-[1.15]">
              Formação para servidores públicos
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Aprenda, desenvolva novas competências e avance na sua carreira com cursos pensados para servidores públicos.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Botão Explorar Cursos */}
              <button 
                onClick={() => handleNavigation('cursos')}
                className="bg-[#112546] hover:bg-[#0c1b33] text-white px-7 py-4 rounded-xl font-semibold shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                Explorar cursos <ArrowRight className="w-4 h-4" />
              </button>
              
              {/* Botão Conhecer a Plataforma */}
              <button 
                onClick={() => handleNavigation('sobre')}
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-7 py-4 rounded-xl font-semibold transition-all cursor-pointer"
              >
                Conhecer a plataforma
              </button>
            </div>

            {/* Selos de Confiança rápidos */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 mt-8">
              <div>
                <span className="block text-2xl font-extrabold text-[#112D4E]">+50 mil</span>
                <span className="text-xs text-slate-500 font-medium">Alunos formados</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#112D4E]">100%</span>
                <span className="text-xs text-slate-500 font-medium">Certificado válido</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#112D4E]">Gratuito</span>
                <span className="text-xs text-slate-500 font-medium">Para órgãos parceiros</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Bloco Visual de Destaque */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-2xl shadow-lg shadow-emerald-500/30">
                <Award className="w-6 h-6" />
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg">
                  SP
                </div>
                <h3 className="text-xl font-bold text-slate-900">Desenvolvimento Contínuo</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Trilhas pedagógicas focadas nas reais necessidades da administração pública moderna, garantindo alinhamento legal e eficiência.
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                  <span>Certificação Oficial</span>
                  <span>Escola de Governo</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}