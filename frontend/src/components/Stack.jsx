import React from 'react';
import { stackCategories } from '../data/mockData';

const Stack = () => {
  return (
    <section id="stack" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            STACK TECNOLÓGICO
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones web modernas
          </p>
        </div>

        {/* Stack Categories */}
        <div className="space-y-12">
          {stackCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Title */}
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {category.category}
              </h3>
              
              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group px-5 py-3 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
                  >
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
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