import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50761912312?text=Hola%20MatosDev%2C%20vi%20tu%20portfolio%20y%20quiero%20cotizar%20un%20proyecto.', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/3653997/pexels-photo-3653997.jpeg" 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Red accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            MATOSDEV
          </h1>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-red-500">
            DESARROLLO WEB & UI/UX
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Diseño interfaces modernas y construyo sitios y apps rápidas,
            <br className="hidden sm:block" />
            <span className="text-white font-medium">100% responsivas con Next.js</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 flex items-center gap-2 min-w-[200px] justify-center"
            >
              Ver Proyectos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <MessageCircle size={20} />
              Contactar
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;