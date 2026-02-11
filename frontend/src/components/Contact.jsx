import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const iconMap = {
  MessageCircle: MessageCircle,
  Mail: Mail
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            CONTACTO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg shadow-red-500/50"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            ¿Tienes un proyecto en mente? Hablemos y hagamos realidad tu idea
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.name ? 'border-red-500/50' : 'border-white/10'
                  } rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 backdrop-blur-2xl hover:bg-white/10`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.email ? 'border-red-500/50' : 'border-white/10'
                  } rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 backdrop-blur-2xl hover:bg-white/10`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  } rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 resize-none backdrop-blur-2xl hover:bg-white/10`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/50 flex items-center justify-center gap-2 hover:scale-105 backdrop-blur-xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
                <span className="relative z-10">Enviar Mensaje</span>
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-2xl text-center backdrop-blur-2xl animate-fadeIn">
                  ¡Mensaje enviado exitosamente! Te contactaré pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = iconMap[info.icon];
              return (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-xl border border-white/10">
                      <IconComponent className="text-red-400" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-400 group-hover:text-red-400 transition-colors duration-500">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-wide">
                RESPUESTA RÁPIDA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Generalmente respondo en menos de 24 horas. Para consultas urgentes, 
                contacta directamente por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
