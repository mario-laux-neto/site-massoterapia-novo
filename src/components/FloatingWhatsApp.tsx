"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react"; // Usando o ícone bonito que já temos

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  // Só mostra o botão depois que rolar a página (evita poluição visual no início)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          // 👇 Link com o número da Maria Laux e mensagem personalizada
          href="https://wa.me/5554996451336?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20massagem."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
          aria-label="Falar no WhatsApp"
        >
          {/* Tooltip que aparece no Hover (Desktop) */}
          <span className="hidden md:block bg-white text-[#2F3E46] px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 border border-gray-100">
            Agende sua sessão
          </span>

          {/* O Botão Verde Pulsante */}
          <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border-4 border-white/20">
            
            {/* Ícone Phosphor (Mais elegante) */}
            <WhatsappLogo className="w-8 h-8" weight="fill" />

            {/* Bolinha vermelha de notificação (O Truque de Conversão) */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] text-white items-center justify-center font-bold border-2 border-white">
                1
              </span>
            </span>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}