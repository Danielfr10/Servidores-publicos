import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">Capacita Servidores</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            Plataforma dedicada ao aperfeiçoamento contínuo e desenvolvimento profissional dos servidores públicos.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Navegação</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#cursos" className="hover:text-white transition-colors">Cursos</a></li>
            <li><a href="#trilhas" className="hover:text-white transition-colors">Trilhas de Aprendizagem</a></li>
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Suporte & Contato</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Validação de Certificados</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Conformidade</h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-2">
            Em conformidade com as diretrizes da LGPD e normas de capacitação governamental.
          </p>
          <span className="text-[10px] text-slate-600 block">© 2026 Capacita Servidores. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}