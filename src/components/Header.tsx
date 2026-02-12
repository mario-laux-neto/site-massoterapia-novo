"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/#home" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Contato", href: "/#contato" },
  ];

  // Lógica: Texto Branco com sombra quando transparente | Texto Verde Escuro quando rolar
  const textColor = scrolled ? "text-[#2F3E46]" : "text-white drop-shadow-md";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* Logo da Maria Laux */}
          <div className="relative w-[60px] h-[60px] md:w-[60px] md:h-[60px] transition-transform group-hover:scale-110">
            <Image
              src="/assets/logomaria.png"
              alt="Logo Maria Laux Massoterapia"
              width={60}
              height={60}
              className={`object-contain scale-125 transition-all duration-300 ${
                scrolled ? "brightness-0 opacity-80" : "brightness-100"
              }`}
              priority
            />
          </div>

          {/* Nome */}
          <span
            className={`font-serif text-2xl md:text-2xl font-bold tracking-wide transition-colors ${textColor}`}
          >
            Maria Laux
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-wider hover:text-[#84A98C] ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5554996451336"
            target="_blank"
            className="bg-[#84A98C] hover:bg-[#52796F] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:-translate-y-0.5"
          >
            Agendar Sessão
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-600 hover:text-[#84A98C] py-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
