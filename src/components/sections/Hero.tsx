"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. A Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Ambiente de Massagem"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. O Overlay (A Camada Escura) - Z-INDEX 10 */}
      {/* Mudei para bg-black/70 para ficar BEM escuro e garantir leitura */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* 3. O Conteúdo (Texto) - Z-INDEX 20 */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-gray-200 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 drop-shadow-md">
            Bem-estar & Saúde Integral
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-xl text-white">
            Revitalize seu <br />
            <span className="italic text-[#84A98C]">Corpo e Mente</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Experimente uma massagem relaxante e alivie o estresse do dia a dia 
            com técnicas especializadas em um ambiente acolhedor.
          </p>

          <a
            href="#contato"
            className="inline-block bg-[#84A98C] hover:bg-[#52796F] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-xl text-lg border border-white/20"
          >
            Agendar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}