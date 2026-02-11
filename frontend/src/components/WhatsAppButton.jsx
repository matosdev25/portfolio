import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
          {/* Expanded tooltip */}
          {isExpanded && (
            <div className="absolute bottom-full right-0 mb-3 bg-white/10 backdrop-blur-2xl text-white px-4 py-3 rounded-2xl shadow-2xl whitespace-nowrap animate-fadeIn border border-white/20">
              <p className="text-sm font-semibold">¿Tienes un proyecto?</p>
              <p className="text-xs text-gray-300 font-light">Hablemos por WhatsApp</p>
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-green-500/50 flex items-center justify-center backdrop-blur-xl overflow-hidden"
            aria-label="Contactar por WhatsApp"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
            
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
            <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-20"></span>
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
