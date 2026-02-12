"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Heart } from "lucide-react";

export function About() {
  const benefits = [
    "Atendimento personalizado e humanizado",
    "Ambiente climatizado e relaxante",
    "Técnicas integrativas para dores e estresse",
  ];

  return (
    <section id="sobre" className="py-24 bg-[#F9F7F2] relative overflow-hidden">
      {/* Elemento Decorativo de Fundo (Mancha Verde Suave) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E8F3E8] skew-x-12 translate-x-32 -z-0" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem com Decoração */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Círculo Decorativo atrás da foto */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#84A98C]/20 rounded-[3rem] -z-10" />
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
              {/* 👇 IMPORTANTE: Coloque a foto da sua mãe aqui */}
              {/* Se a foto estiver na pasta public/assets/img/foto-mae.jpg, use assim: */}
              <img 
                src="/assets/fotomaria.jpeg" 
                // Caso não tenha subido a foto ainda, use este placeholder profissional:
                // src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Maria Laux Massoterapeuta" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Selo Flutuante "20+ Anos" (Como no original) */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-bounce-slow border border-[#84A98C]/20">
              <div className="bg-[#E8F3E8] p-3 rounded-full text-[#84A98C]">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-[#2F3E46]">20+</p>
                <p className="text-sm text-gray-600 font-medium">Anos de Experiência</p>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-[#84A98C] font-bold tracking-wider uppercase text-sm mb-4">
              <Heart className="w-4 h-4 fill-current" />
              <span>Sobre a Profissional</span>
            </div>

            {/* Título Corrigido (Agora Escuro e Legível) */}
            <h2 className="font-serif text-4xl md:text-5xl text-[#2F3E46] mb-6 leading-tight">
              Mãos que curam, <br />
              <span className="italic text-[#84A98C]">alma que acolhe.</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Olá, sou a <strong>Maria Laux</strong>. Acredito que a massoterapia vai muito além do toque físico. <br/> 
              É sobre reconectar você com seu próprio corpo e restabelecer o equilíbrio natural.
            </p>
            
            {/* Citação em destaque */}
            <blockquote className="border-l-4 border-[#84A98C] pl-4 italic text-gray-500 mb-8 bg-white/50 p-4 rounded-r-lg">
              "Ofereço uma abordagem acolhedora, unindo técnicas tradicionais e modernas 
              para aliviar dores e renovar suas energias."
            </blockquote>

            {/* Lista de Benefícios */}
            <ul className="space-y-4 mb-10">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#84A98C]" />
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#2F3E46] text-white px-8 py-3 rounded-full hover:bg-[#84A98C] transition-colors shadow-lg"
            >
              Conheça nosso espaço
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}