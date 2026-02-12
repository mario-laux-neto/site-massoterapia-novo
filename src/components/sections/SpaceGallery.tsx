"use client";

import { motion } from "framer-motion";

// 👇 ARRAY COM AS 3 FOTOS REAIS DO ESPAÇO
const spaceImages = [
  {
    // Foto 1 (ex: Recepção ou a mais bonita)
    src: "/assets/foto6.jpeg",
    alt: "Ambiente acolhedor do espaço Maria Laux"
  },
  {
    // Foto 2 (ex: Sala de atendimento)
    src: "/assets/foto1.jpeg",
    alt: "Sala de massagem preparada para o seu bem-estar"
  },
  {
    // Foto 3 (ex: Detalhes ou outro ângulo)
    src: "/assets/espaco-mae-3.jpg",
    alt: "Detalhes que fazem a diferença no atendimento"
  }
];

export function SpaceGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#2F3E46] font-bold mb-6">
            Conheça o nosso espaço
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um ambiente preparado com carinho, pensando em cada detalhe para proporcionar a você uma experiência única de relaxamento e bem-estar.
          </p>
        </motion.div>

        {/* Grid de Imagens (Voltou para 3 colunas, estilo Ana Paula) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }} // Efeito cascata na entrada
              // Altura fixa maior (h-[500px]) para mais impacto visual
              className="group rounded-[2rem] overflow-hidden shadow-xl h-[500px] relative border border-gray-50"
            >
              {/* Imagem com efeito de zoom suave no hover */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-[#2F3E46]/0 group-hover:bg-[#2F3E46]/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}