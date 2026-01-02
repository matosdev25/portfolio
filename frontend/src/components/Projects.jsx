import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            PROYECTOS
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de proyectos destacados que demuestran mi experiencia en desarrollo web
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-medium rounded-full border border-red-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-red-500 mt-0.5">•</span>
                      {result}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 bg-transparent border border-gray-700 hover:border-red-500 text-gray-300 hover:text-red-500 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm"
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