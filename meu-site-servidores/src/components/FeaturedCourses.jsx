import React, { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { coursesData } from '../data/mockData';
import CourseModal from './CourseModal';

export default function FeaturedCourses({ setActiveTab }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Seleciona os 3 primeiros cursos para destaque
  const featured = coursesData.slice(0, 3).map((course, idx) => {
    const badges = ['Mais Popular', 'Novo', 'Destaque'];
    return { ...course, badge: badges[idx % badges.length] };
  });

  const handleVerTodos = () => {
    setActiveTab('cursos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do Bloco */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              Capacitação Continuada
            </span>
            <h2 className="text-3xl font-extrabold text-[#112D4E]">
              Cursos em Destaque
            </h2>
          </div>

          <button 
            onClick={handleVerTodos}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer self-start sm:self-auto"
          >
            Ver todos os cursos <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid de Cartões em Destaque */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6">
                {/* Badges do Cartão */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>

                {/* Título e Descrição */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Rodapé do Cartão */}
              <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {course.hours}
                </span>

                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Detalhes <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal ao Clicar em Detalhes */}
      <CourseModal 
        course={selectedCourse} 
        isOpen={Boolean(selectedCourse)} 
        onClose={() => setSelectedCourse(null)} 
      />
    </section>
  );
}