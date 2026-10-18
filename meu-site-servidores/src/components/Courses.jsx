import React, { useState } from 'react';
import { Clock, Star, BookOpen, Search } from 'lucide-react';
import { coursesData } from '../data/mockData';
import CourseModal from './CourseModal';

export default function Courses() {
  const [filter, setFilter] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa por texto
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = ['Todos', 'Gestão Pública', 'Direito & Legislação', 'Inovação', 'Tecnologia'];

  // Aplica o filtro de categoria E o filtro da barra de pesquisa simultaneamente
  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = filter === 'Todos' || course.category === filter;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      (course.category && course.category.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cursos" className="py-16 bg-slate-50/50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#112D4E]">Catálogo de Cursos</h2>
          <p className="text-slate-600 mt-2">Capacitações de alto nível com certificação válida.</p>
        </div>

        {/* Barra de Pesquisa e Filtros */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          
          {/* Campo de Pesquisa Funcional */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por curso ou palavra-chave..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-emerald-400 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          {/* Botões de Categoria */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-[#112546] text-white shadow-sm' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem caso nenhum curso seja encontrado */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-lg">Nenhum curso encontrado para "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setFilter('Todos'); }}
              className="mt-4 text-sm font-semibold text-emerald-600 hover:underline cursor-pointer"
            >
              Limpar pesquisa
            </button>
          </div>
        ) : (
          /* Grid dos Cursos Filtrados */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    {course.tag && (
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {course.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 border-t border-slate-100 pt-4 mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {course.hours}
                    </span>
                    {course.level && (
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        {course.level}
                      </span>
                    )}
                    <span className="flex items-center gap-1 ml-auto text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50/80 border-t border-slate-100 px-6">
                  <button 
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-2.5 bg-white border border-slate-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 text-slate-700 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                  >
                    Ver Detalhes do Curso
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Detalhes */}
      <CourseModal 
        course={selectedCourse} 
        isOpen={Boolean(selectedCourse)} 
        onClose={() => setSelectedCourse(null)} 
      />
    </section>
  );
}