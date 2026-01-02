import React from 'react';
import { navLinks } from '../data/mockData';

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
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

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_modern-matos-ui/artifacts/i5k1wrrb_Marti%CC%81n%20Twitch%20rojo-%20no%20BK-01.png" 
                alt="MatosDev Logo" 
                className="h-10 w-10"
              />
              <span className="font-display text-xl font-bold text-white">MATOSDEV</span>
            </div>
            <p className="text-gray-400 text-sm">
              Desarrollo web moderno y diseño UI/UX que convierte visitantes en clientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4">ENLACES</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4">CONTACTO</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://wa.me/50761912312" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  +507 6191-2312
                </a>
              </li>
              <li>
                <a 
                  href="mailto:matosdev25@gmail.com"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  matosdev25@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MatosDev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;