import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            PROYECTOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-red-500/50"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Una selección de proyectos destacados que demuestran mi experiencia en desarrollo web
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 tracking-wide">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-400 text-xs font-medium rounded-full border border-red-500/20 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-red-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-400 font-light">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                      {result}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-3 rounded-2xl font-medium transition-all duration-500 hover:shadow-xl hover:shadow-red-500/50 flex items-center justify-center gap-2 text-sm hover:scale-105 backdrop-blur-xl"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-gray-300 hover:text-white px-4 py-3 rounded-2xl font-medium transition-all duration-500 flex items-center justify-center gap-2 text-sm hover:scale-105 backdrop-blur-xl"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
