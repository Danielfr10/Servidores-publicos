import React from 'react';
import { X, Star } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
        {/* Botão de Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Categoria */}
        <div className="mb-4">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
            {course.category}
          </span>
        </div>

        {/* Título do Curso */}
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
          {course.title}
        </h3>

        {/* Descrição */}
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {course.description}
        </p>

        {/* Caixa de Detalhes */}
        <div className="bg-slate-50 rounded-2xl p-5 mb-8 space-y-3 border border-slate-100">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500 font-medium">Carga Horária:</span>
            <span className="text-slate-900 font-bold">{course.hours}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500 font-medium">Nível:</span>
            <span className="text-slate-900 font-bold">{course.level || 'Intermediário'}</span>
          </div>
          <div className="flex justify-between text-sm items-center">
            <span className="text-slate-500 font-medium">Avaliação:</span>
            <span className="text-amber-500 font-bold flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              {course.rating} / 5.0
            </span>
          </div>
        </div>

        {/* Botão de Matrícula */}
        <button 
          onClick={() => {
            alert(`Redirecionando para a matrícula do curso: ${course.title}`);
            onClose();
          }}
          className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl text-base shadow-lg shadow-emerald-200 transition-all cursor-pointer"
        >
          Entrar para Matricular
        </button>
      </div>
    </div>
  );
}