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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 z-10 backdrop-blur-sm"></div>
        <img 
          src="https://images.pexels.com/photos/3653997/pexels-photo-3653997.jpeg" 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Red accent gradient - more subtle */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-pink-500/10 z-10"></div>
        {/* Noise texture overlay for depth */}
        <div className="absolute inset-0 z-10 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fadeIn">
          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-wider drop-shadow-2xl">
            MATOSDEV
          </h1>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            DESARROLLO WEB & UI/UX
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Diseño interfaces modernas y construyo sitios y apps rápidas,
            <br className="hidden sm:block" />
            <span className="text-white font-medium bg-white/5 px-4 py-1 rounded-full inline-block mt-2 backdrop-blur-xl border border-white/10">
              100% responsivas con Next.js
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 flex items-center gap-2 min-w-[200px] justify-center backdrop-blur-xl hover:scale-105 hover:border-white/40"
            >
              Ver Proyectos
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="group relative bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/60 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Contactar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 backdrop-blur-xl bg-white/5">
          <div className="w-1.5 h-3 bg-gradient-to-b from-red-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;