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
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              SOBRE MÍ
            </h2>
            <div className="w-24 h-1 bg-red-500"></div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy desarrollador web especializado en crear experiencias digitales excepcionales. 
              Mi enfoque combina diseño visual de alta calidad, rendimiento optimizado y estrategias 
              orientadas a la conversión.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Trabajo con tecnologías modernas como Next.js para entregar sitios web y aplicaciones 
              que no solo se ven increíbles, sino que también funcionan perfectamente en todos los 
              dispositivos y superan las expectativas de rendimiento.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4">
            {aboutBullets.map((bullet) => {
              const IconComponent = iconMap[bullet.icon];
              return (
                <div
                  key={bullet.id}
                  className="group flex items-center gap-4 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                    <IconComponent className="text-red-500" size={24} />
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