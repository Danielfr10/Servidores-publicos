import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses'; // <-- Importar aqui
import Features from './components/Features';
import Courses from './components/Courses';
import Pathways from './components/Pathways';
import About from './components/About';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'cursos':
        return <Courses />;
      case 'trilhas':
        return <Pathways />;
      case 'sobre':
        return <About setActiveTab={setActiveTab} />;
      case 'inicio':
      default:
        return (
          <>
            <Hero setActiveTab={setActiveTab} />
            <FeaturedCourses setActiveTab={setActiveTab} /> {/* <-- Exibe os Destaques no Início */}
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 antialiased">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setIsLoginOpen={setIsLoginOpen} 
      />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </div>
  );
}