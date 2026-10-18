import React from 'react';
import { Award, Users, BookCheck, ShieldCheck } from 'lucide-react';

export default function About({ setActiveTab }) {
  // Função para rolar suavemente de volta até ao catálogo de cursos
  const handleGoToCourses = () => {
    if (setActiveTab) setActiveTab('cursos');
    
    const coursesElement = document.getElementById('cursos');
    if (coursesElement) {
      coursesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      value: '+50.000',
      label: 'Servidores Capacitados',
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      value: '100%',
      label: 'Certificados Válidos',
    },
    {
      icon: <BookCheck className="w-6 h-6 text-emerald-600" />,
      value: '+120',
      label: 'Cursos Atualizados',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      value: 'Oficial',
      label: 'Alinhado à Legislação',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: Título e Apresentação */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Sobre a Plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112D4E] tracking-tight mb-6">
            Transformando a gestão pública através do conhecimento
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            O <strong>Capacita Servidores</strong> é uma plataforma focada no desenvolvimento profissional contínuo de agentes públicos. Oferecemos conteúdos práticos e atualizados, alinhados com as melhores práticas de governança, inovação e legislação pública.
          </p>
        </div>

        {/* Grid de Estatísticas / Diferenciais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#112D4E] mb-1">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bloco Inferior: Chamada para Ação com o Botão Verde */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Pronto para impulsionar a sua carreira no setor público?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Aceda ao catálogo completo de cursos com emissão imediata de certificado válido para progressão funcional.
          </p>

          <button 
            onClick={handleGoToCourses}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Comece sua próxima etapa de desenvolvimento
          </button>
        </div>

      </div>
    </section>
  );
} 