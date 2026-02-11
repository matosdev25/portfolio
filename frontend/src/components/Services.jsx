import React from 'react';
import { Code, Figma, Smartphone, Zap } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  Code: Code,
  Figma: Figma,
  Smartphone: Smartphone,
  Zap: Zap
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            SERVICIOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-red-500/50"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-pink-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-pink-500/5 group-hover:to-red-500/10 transition-all duration-500 rounded-3xl"></div>
                
                {/* Icon */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-xl border border-white/10">
                  <IconComponent className="text-red-400" size={28} />
                </div>
                
                {/* Title */}
                <h3 className="relative font-display text-xl font-bold text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;