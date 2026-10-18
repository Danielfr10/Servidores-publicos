import React from 'react';
import { RefreshCw, GitFork, BookOpen } from 'lucide-react';

export default function Features() {
  const cards = [
    {
      icon: <RefreshCw className="w-7 h-7 text-slate-800" />,
      title: "Cursos atualizados",
      desc: "Conteúdos alinhados às demandas da administração pública e às melhores práticas."
    },
    {
      icon: <GitFork className="w-7 h-7 text-slate-800" />,
      title: "Trilhas por competência",
      desc: "Percursos estruturados para desenvolver competências essenciais à sua atuação e ao seu crescimento."
    },
    {
      icon: <BookOpen className="w-7 h-7 text-slate-800" />,
      title: "Aprendizado no seu ritmo",
      desc: "Estude quando e onde quiser, com flexibilidade para conciliar com sua rotina."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-gradient-to-b from-slate-50/80 to-slate-100/40 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-5"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}