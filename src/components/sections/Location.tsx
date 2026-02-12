"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, WhatsappLogo } from "@phosphor-icons/react";

export function Location() {
  return (
    <section id="contato" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Informações */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#84A98C] font-bold tracking-wider uppercase text-sm mb-4 block">
              Nosso Espaço
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl text-[#2F3E46] mb-6 font-bold leading-tight">
              Venha nos visitar.
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Um ambiente integrado de saúde e bem-estar, onde Nutrição e Massoterapia se encontram para cuidar de você por completo.
            </p>

            {/* Lista de Contatos */}
            <div className="space-y-8">
              
              {/* Item 1: Endereço (Mesmo da Ana) */}
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3E8] p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-[#84A98C]" weight="fill" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2F3E46] font-bold mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Av. 7 de Setembro, 1115 - Sala 01 <br/>
                    Centro, Sarandi - RS
                  </p>
                </div>
              </div>

              {/* Item 2: Horário */}
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3E8] p-3 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-[#84A98C]" weight="fill" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2F3E46] font-bold mb-1">Horário</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 08:30 às 18:00 <br />
                    Sábado: A combinar
                  </p>
                </div>
              </div>

              {/* Item 3: Contato */}
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3E8] p-3 rounded-full shrink-0">
                  <WhatsappLogo className="w-6 h-6 text-[#84A98C]" weight="fill" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2F3E46] font-bold mb-1">Contato</h3>
                  <p className="text-gray-600 mb-2">
                    (54) 99645-1336
                  </p>
                  <a 
                    href="https://wa.me/5554996451336" 
                    target="_blank"
                    className="text-[#84A98C] font-bold hover:underline text-sm uppercase tracking-wide"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Lado Direito: Mapa Real (Google Maps Embed) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full min-h-[400px] w-full"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-full w-full relative">
              <iframe 
                // 👇 MAPA GERADO PARA: Rua João Piccini, 351, Sarandi - RS
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.174626123456!2d-52.924!3d-27.864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%207%20de%20Setembro%2C%201115%20-%20Sarandi!5e0!3m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "450px" }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}