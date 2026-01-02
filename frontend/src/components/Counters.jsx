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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter) => {
            const IconComponent = iconMap[counter.icon];
            return (
              <div
                key={counter.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 text-center transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-red-500" size={32} />
                </div>
                
                {/* Number */}
                <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                  <Counter end={counter.number} suffix={counter.suffix} />
                </div>
                
                {/* Label */}
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">
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