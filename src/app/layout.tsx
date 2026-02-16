import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

// Configurando as fontes
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  // 1. FUNDAMENTAL: A base para todos os links e imagens
  metadataBase: new URL('https://www.marialauxmasso.com.br'),

  // 2. SEO Técnico: URL Canônica (Evita conteúdo duplicado)
  alternates: {
    canonical: '/',
  },

  title: {
    default: "Maria Laux | Massoterapia e Bem-estar em Sarandi-RS",
    template: "%s | Maria Laux"
  },
  
  description: "Revitalize seu corpo e mente com massagens terapêuticas, relaxantes e drenagem linfática. Tratamento especializado para dores e estresse em Sarandi.",

  keywords: [
    "Massagem em Sarandi",
    "Massoterapia Sarandi",
    "Massagista em Sarandi RS",
    "Melhor massagista Sarandi",
    "Clínica de Estética Sarandi",
    "Bem-estar e Saúde Sarandi",
    "Drenagem Linfática",
    "Drenagem Pós-operatório",
    "Massagem Relaxante",
    "Massagem Terapêutica",
    "Liberação Miofascial",
    "Massagem Modeladora",
    "Alívio de dores nas costas",
    "Tratamento para estresse",
    "Retenção de líquidos",
    "Dor lombar tratamento",
    "Maria Laux",
    "Maria Laux Massoterapeuta"
  ],

  authors: [{ name: "Maria Laux" }],
  creator: "Maria Laux",

  // Ícones do navegador e celular
  icons: {
    icon: "/assets/logomaria.png",
    shortcut: "/assets/logomaria.png",
    apple: "/assets/logomaria.png",
  },

  // Configuração para WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: "Maria Laux | Massoterapia Especializada",
    description: "Sinta o alívio e o bem-estar que você merece. Agende sua sessão em Sarandi.",
    url: "https://www.marialauxmasso.com.br",
    siteName: "Maria Laux Massoterapia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: '/assets/logomaria3.png', // Sua imagem retangular (1200x630)
        width: 1200,
        height: 630,
        alt: 'Maria Laux Massoterapia em Sarandi',
        type: 'image/png', // Ajuda o WhatsApp a identificar o formato
      },
    ],
  },

  // Configuração extra para Telegram, Twitter, Discord (Backup de segurança)
  twitter: {
    card: 'summary_large_image',
    title: "Maria Laux | Massoterapia",
    description: "Massagens terapêuticas e Drenagem Linfática em Sarandi.",
    images: ['/assets/logomaria3.png'],
  },

  // Configuração avançada para o Robô do Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Espaço reservado para validação do Search Console (Se precisar no futuro)
  verification: {
    // google: 'seu-codigo-de-verificacao',
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