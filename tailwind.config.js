/** @type {import('tailwindcss').Config} */
export default {
  // 1. INDICA A TAILWIND QUÉ ARCHIVOS ESCANEAR
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate que esta ruta coincida con tu proyecto
  ],

  // 2. SOLO DEBE HABER UN 'theme'
  theme: {
    extend: {
      fontFamily: {
        title: "var(--font-title-family)",
        text: "var(--font-text-family)",
      },
      colors: {
        background: "var(--background-color)",
        white: "var(--color-white)",
        line: "var(--color-line)",
        button: "var(--color-button)",
      },
    },
  },
  plugins: [],
}