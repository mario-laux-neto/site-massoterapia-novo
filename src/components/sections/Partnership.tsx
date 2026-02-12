"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, MessageCircle, Globe } from "lucide-react";

export function Partnership() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Fundo Decorativo Suave */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#F9F7F2] skew-x-12 -translate-x-20 z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Foto da Ana Paula */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10">
              {/* 👇 Foto da Ana Paula */}
              <img 
                src="/assets/foto-ana.jpeg" 
                alt="Nutricionista Ana Paula Nogueira" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Label Flutuante */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg text-right border border-gray-100">
                <p className="font-serif text-[#2F3E46] text-lg font-bold">Ana Paula Nogueira</p>
                <p className="text-[#D4AF37] text-sm font-medium">Nutricionista Funcional</p>
              </div>
            </div>

            {/* Elementos decorativos atrás da foto */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#84A98C]/30 rounded-[2.5rem] -z-10" />
          </motion.div>

          {/* Lado Direito: Texto de Venda */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-2 text-[#84A98C] font-bold tracking-wider uppercase text-sm mb-4">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Saúde Integrada</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[#2F3E46] mb-6 font-bold leading-tight">
              Potencialize seu bem-estar com <span className="italic text-[#84A98C]">Nutrição Especializada</span>.
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium">
              Para um resultado completo de desinflamação e leveza, recomendamos aliar a Massoterapia 
              ao acompanhamento nutricional. Uma alimentação equilibrada potencializa os efeitos da drenagem linfática.
            </p>

            {/* Box de Parceria */}
            <div className="bg-[#F9F7F2] p-6 rounded-2xl border border-[#84A98C]/20 mb-8 shadow-sm">
              <h4 className="font-serif text-xl text-[#2F3E46] mb-2 font-bold">Parceria Exclusiva</h4>
              <p className="text-gray-600 text-sm">
                Clientes da Maria Laux têm atendimento prioritário com a 
                <strong> Nutricionista Ana Paula</strong>.
              </p>
            </div>

            {/* 👇 NOVOS BOTÕES: Site e WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Botão 1: Visitar Site (Estilo Dark da Marca) */}
              <a
                href="https://site-ana-gamma.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 bg-[#2F3E46] text-white px-6 py-4 rounded-full font-bold hover:bg-[#1a2328] transition-all transform hover:-translate-y-1 shadow-lg text-center"
              >
                <Globe className="w-5 h-5" />
                Conhecer o Trabalho
              </a>

              {/* Botão 2: WhatsApp (Estilo Verde WhatsApp) */}
              <a
                href="https://api.whatsapp.com/send?phone=5555996880252&text=Ol%C3%A1%2C%20vim%20pela%20indica%C3%A7%C3%A3o%20da%20Maria%20Laux%20e%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 shadow-lg text-center"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Consulta
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}