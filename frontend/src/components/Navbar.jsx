import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50761912312?text=Hola%20MatosDev%2C%20vi%20tu%20portfolio%20y%20quiero%20cotizar%20un%20proyecto.', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/5 backdrop-blur-3xl shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center space-x-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_modern-matos-ui/artifacts/i5k1wrrb_Marti%CC%81n%20Twitch%20rojo-%20no%20BK-01.png" 
              alt="MatosDev Logo" 
              className="h-10 w-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg"
            />
            <span className="font-display text-2xl font-bold text-white tracking-wider">MATOSDEV</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105"
            >
              Hablemos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-red-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-gray-300 hover:text-red-500 transition-colors duration-200 py-2 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Hablemos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;