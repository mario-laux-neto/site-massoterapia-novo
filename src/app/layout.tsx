import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // Importando as fontes
import "./globals.css";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

// Configurando Fonte Serifada (Títulos)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Configurando Fonte Sans (Textos)
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Laux Massoterapeuta | Massoterapia e Bem-estar em Sarandi | Sarandi, RS",
  description: "Revitalize seu corpo e mente com massagens terapêuticas, relaxantes e drenagem linfática. Agende sua sessão.",
  icons: {
    icon: "/assets/logomaria.png",
    shortcut: "/assets/logomaria.png",
    apple: "/assets/logomaria.png",
  },
  // ADICIONE ISSO AQUI:
  openGraph: {
    images: [
      {
        url: '/assets/logomaria3.png', // O seu ícone com fundo invisível
        width: 1200,
        height: 630,
        alt: 'Maria Laux Massoterapia',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} bg-background text-text antialiased`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
