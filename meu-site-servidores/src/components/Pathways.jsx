import React, { useState } from 'react';
import { ArrowRight, X, BookOpen, Clock } from 'lucide-react';
import { pathwaysData } from '../data/mockData';

export default function Pathways() {
  const [selectedPathway, setSelectedPathway] = useState(null);

  return (
    <section id="trilhas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112D4E] mb-4">
            Trilhas de Aprendizagem
          </h2>
          <p className="text-slate-600 text-lg">
            Acompanhe sequências de cursos projetadas para o desenvolvimento completo de competências essenciais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathwaysData.map((path, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative hover:border-emerald-200 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-emerald-600 bg-emerald-100/60 px-3 py-1 rounded-full inline-block mb-4">
                  {path.coursesCount} • {path.duration}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{path.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{path.description}</p>
              </div>

              {/* Botão Clicável Funcional */}
              <button 
                onClick={() => setSelectedPathway(path)}
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer pt-4 border-t border-slate-200/60 transition-colors w-full"
              >
                Conhecer Trilha <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes da Trilha */}
      {selectedPathway && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedPathway(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
                {selectedPathway.coursesCount}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
              {selectedPathway.title}
            </h3>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {selectedPathway.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 mb-8 space-y-3 border border-slate-100">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Duração Total:</span>
                <span className="text-slate-900 font-bold">{selectedPathway.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Certificação:</span>
                <span className="text-slate-900 font-bold">Válida para Progressão Funcional</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert(`Inscrição iniciada na Trilha: ${selectedPathway.title}`);
                setSelectedPathway(null);
              }}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl text-base shadow-lg shadow-emerald-200 transition-all cursor-pointer"
            >
              Inscrever-se na Trilha
            </button>
          </div>
        </div>
      )}
    </section>
  );
}