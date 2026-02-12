"use client";

import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  
  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2F3E46] text-white pt-16 pb-8 border-t border-[#84A98C]/20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Parte Superior: Grid de Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4">Maria Laux</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Promovendo saúde, equilíbrio e bem-estar através do toque terapêutico. 
              Um espaço dedicado a renovar suas energias.
            </p>
            <div className="flex gap-4">
              {/* Ícones Sociais (Links fictícios, pode ajustar depois) */}
              <a href="https://instagram.com/massoterapeuta_maria_laux" 
              className="bg-white/10 p-2 rounded-full hover:bg-[#84A98C] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-[#84A98C]">Menu</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Mim</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Tratamentos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Rápido */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-[#84A98C]">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Sarandi - RS</li>
              <li>(54) 99645-1336</li>
              <li>Seg - Sex: 08:30 - 18:00</li>
            </ul>
          </div>

        </div>

        {/* Divisória */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Maria Laux Massoterapia. Todos os direitos reservados.
          </p>

          {/* 👇 AQUI ESTÁ A SUA PROPAGANDA */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Desenvolvido por</span>
            <a 
              href="https://instagram.com/mario_laux_neto" // Coloque seu LinkedIn ou Portfolio aqui
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-[#84A98C] hover:text-white transition-colors flex items-center gap-1"
            >
              Mário Laux Neto
            </a>
          </div>

          {/* Botão Voltar ao Topo */}
          <button 
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-[#84A98C] p-3 rounded-full transition-all group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </button>

        </div>
      </div>
    </footer>
  );
}