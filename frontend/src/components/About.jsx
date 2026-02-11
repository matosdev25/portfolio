import React from 'react';
import { CheckCircle, Gauge, Monitor, Search, Sparkles } from 'lucide-react';
import { aboutBullets } from '../data/mockData';

const iconMap = {
  Sparkles: Sparkles,
  Monitor: Monitor,
  Gauge: Gauge,
  Search: Search,
  CheckCircle: CheckCircle
};

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-gray-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider">
              SOBRE MÍ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg shadow-red-500/50"></div>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Soy desarrollador web especializado en crear experiencias digitales excepcionales. 
              Mi enfoque combina diseño visual de alta calidad, rendimiento optimizado y estrategias 
              orientadas a la conversión.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Trabajo con tecnologías modernas como Next.js para entregar sitios web y aplicaciones 
              que no solo se ven increíbles, sino que también funcionan perfectamente en todos los 
              dispositivos y superan las expectativas de rendimiento.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4">
            {aboutBullets.map((bullet, index) => {
              const IconComponent = iconMap[bullet.icon];
              return (
                <div
                  key={bullet.id}
                  className="group flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-xl border border-white/10">
                    <IconComponent className="text-red-400" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {bullet.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
