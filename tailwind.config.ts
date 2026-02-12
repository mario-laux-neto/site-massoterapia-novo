import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Maria Laux (Massoterapia)
        primary: "#84A98C",   // Verde Sálvia (Cor principal)
        secondary: "#52796F", // Verde Escuro (Títulos/Detalhes)
        accent: "#D4A373",    // Tom Terra/Dourado Suave (Botões de destaque)
        background: "#F9F7F2", // Off-white (Fundo suave igual da Ana, funciona bem)
        text: "#2F3E46",      // Cinza Chumbo (Texto legível)
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;