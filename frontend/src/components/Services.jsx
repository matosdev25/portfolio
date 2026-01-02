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
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            SERVICIOS
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors duration-300">
                  <IconComponent className="text-red-500" size={28} />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
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