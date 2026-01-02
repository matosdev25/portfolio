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
    // Clear error for this field
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
      // Form is valid - simulate submission
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            CONTACTO
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200`}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
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
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
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
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.message ? 'border-red-500' : 'border-gray-800'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200 resize-none`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Enviar Mensaje
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-center">
                  ¡Mensaje enviado exitosamente! Te contactaré pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const IconComponent = iconMap[info.icon];
              return (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                      <IconComponent className="text-red-500" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6">
              <h3 className="font-display text-xl font-bold text-white mb-3">
                RESPUESTA RÁPIDA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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