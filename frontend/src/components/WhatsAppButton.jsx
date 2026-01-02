import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open(
      'https://wa.me/50761912312?text=Hola%20MatosDev%2C%20vi%20tu%20portfolio%20y%20quiero%20cotizar%20un%20proyecto.',
      '_blank'
    );
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Expanded tooltip */}
          {isExpanded && (
            <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
              <p className="text-sm font-medium">¿Tienes un proyecto?</p>
              <p className="text-xs text-gray-600">Hablemos por WhatsApp</p>
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;