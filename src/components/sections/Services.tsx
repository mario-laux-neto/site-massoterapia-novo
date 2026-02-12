"use client";

import { motion } from "framer-motion";
import {
  FlowerLotus,
  HandHeart,
  Stack,
  Drop,
  Sparkle,
  Baby,
  Plant,
  StarFour,
  WhatsappLogo, // Adicionei o logo do Whats para indicar que é clicável
} from "@phosphor-icons/react";

// Número da Maria Laux
const PHONE_NUMBER = "5554996451336";

const services = [
  {
    icon: FlowerLotus,
    title: "Massagem Relaxante",
    description:
      "Alivia o estresse, reduz a tensão muscular, melhora o sono e promove um profundo bem-estar e alívio da ansiedade.",
    color: "bg-[#E8F3E8]",
    message:
      "Olá, gostaria de agendar uma Massagem Relaxante para aliviar o estresse.",
  },
  {
    icon: HandHeart,
    title: "Massagem Terapêutica",
    description:
      "Focada na recuperação. Ajuda a aliviar dores crônicas, reduzir nódulos de tensão e acelerar a recuperação de lesões.",
    color: "bg-[#EDF6F9]",
    message:
      "Olá, estou com dores musculares e gostaria de agendar uma Massagem Terapêutica.",
  },
  {
    icon: Stack,
    title: "Pedras Quentes",
    description:
      "O calor das pedras vulcânicas penetra nos músculos, reduzindo o estresse e equilibrando a energia do corpo.",
    color: "bg-[#FFF4E6]",
    message: "Olá, gostaria de saber mais sobre a terapia com Pedras Quentes.",
  },
  {
    icon: Drop,
    title: "Drenagem Linfática",
    description:
      "Estimula o sistema linfático, eliminando toxinas, reduzindo a retenção de líquidos e melhorando a saúde da pele.",
    color: "bg-[#FDE2E4]",
    message: "Olá, gostaria de agendar uma sessão de Drenagem Linfática.",
  },
  {
    icon: Sparkle,
    title: "Tratamento para Estrias",
    description:
      "Estimula a regeneração celular e a circulação, hidratando profundamente e uniformizando a aparência da pele.",
    color: "bg-[#F0F4F8]",
    message: "Olá, gostaria de informações sobre o Tratamento para Estrias.",
  },
  {
    icon: Baby,
    title: "Para Gestantes",
    description:
      "Cuidado especial para mamães. Alivia dores nas costas, reduz o inchaço e promove relaxamento seguro para o bebê.",
    color: "bg-[#FFF0F5]",
    message:
      "Olá, sou gestante e gostaria de agendar uma massagem especializada.",
  },
  {
    icon: Plant,
    title: "Bambu Terapia",
    description:
      "Utiliza bastões de bambu para uma massagem vigorosa que modela o corpo, alivia tensões e estimula a drenagem.",
    color: "bg-[#F5F5DC]",
    message: "Olá, gostaria de conhecer a técnica de Bambu Terapia.",
  },
  {
    icon: StarFour,
    title: "Massagem Estética",
    description:
      "Focada no contorno corporal e redução de celulite. Estimula o metabolismo local e melhora a firmeza da pele.",
    color: "bg-[#E6E6FA]",
    message:
      "Olá, gostaria de saber mais sobre a Massagem Estética modeladora.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#84A98C] font-bold tracking-wider uppercase text-sm">
            Nossos Tratamentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2F3E46] mt-3 mb-6 font-bold">
            O cuidado que você merece.
          </h2>
          <p className="text-gray-600 text-lg">
            Clique no serviço desejado para agendar diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Cria o link do WhatsApp dinâmico para cada card
            const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(service.message)}`;

            return (
              <motion.a
                key={index}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#84A98C]/30 hover:-translate-y-2 cursor-pointer relative block"
              >
                {/* Ícone com fundo colorido */}
                <div
                  className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon
                    className="w-9 h-9 text-[#2F3E46]"
                    weight="light"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2F3E46] mb-3 group-hover:text-[#84A98C] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm font-medium mb-4">
                  {service.description}
                </p>

                {/* Call to Action sutil que aparece no card */}
                <div className="flex items-center gap-2 text-sm font-bold text-[#84A98C] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
                  <WhatsappLogo weight="fill" className="w-5 h-5" />
                  Agendar este serviço
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
