import React from 'react';
import { stackCategories } from '../data/mockData';

const Stack = () => {
  return (
    <section id="stack" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            STACK TECNOLÓGICO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-red-500/50"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Tecnologías y herramientas que domino para crear soluciones web modernas
          </p>
        </div>

        {/* Stack Categories */}
        <div className="space-y-12">
          {stackCategories.map((category, catIndex) => (
            <div key={category.id} className="space-y-6" style={{ animationDelay: `${catIndex * 100}ms` }}>
              {/* Category Title */}
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3 tracking-wide">
                <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg shadow-red-500/50"></span>
                {category.category}
              </h3>
              
              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group px-5 py-3 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1 hover:scale-105"
                    style={{ animationDelay: `${(catIndex * 100) + (index * 50)}ms` }}
                  >
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-500">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
