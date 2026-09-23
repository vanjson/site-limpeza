'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Configure aqui os slides (imagens e textos)
const slides = [
  {
    title: "Limpeza Profissional de Estofados",
    description: "Elimine 99,9% dos ácaros e bactérias com nossos equipamentos avançados.",
    bg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200"
  },
  {
    title: "Higienização Pós-Obra e Residencial",
    description: "Deixamos seu ambiente impecável e pronto para uso.",
    bg: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200"
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Troca de slide automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${slides[index].bg})` }}
        >
          {/* Camada escura para legibilidade do texto */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Conteúdo de texto */}
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {slides[index].description}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
