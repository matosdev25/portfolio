import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Calendar, Layers, Users } from 'lucide-react';
import { counters } from '../data/mockData';

const iconMap = {
  Briefcase: Briefcase,
  Users: Users,
  Calendar: Calendar,
  Layers: Layers
};

const Counter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

const Counters = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter, index) => {
            const IconComponent = iconMap[counter.icon];
            return (
              <div
                key={counter.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-pink-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-pink-500/5 group-hover:to-red-500/10 transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 backdrop-blur-xl border border-white/10">
                  <IconComponent className="text-red-400" size={32} />
                </div>
                
                {/* Number */}
                <div className="relative font-display text-4xl sm:text-5xl font-bold text-white mb-2 tracking-wider">
                  <Counter end={counter.number} suffix={counter.suffix} />
                </div>
                
                {/* Label */}
                <div className="relative text-gray-400 text-sm font-medium uppercase tracking-wider">
                  {counter.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counters;
