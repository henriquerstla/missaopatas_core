/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: '#FAF7F0',
        escuro: '#1F1F1F',
        verdeConfianca: '#2F5D31',
        verdeClaro: '#6F8F4E',
        dourado: '#D9A441',
        offWhite: '#FFFDF8',
        divisor: '#E6DED2',
      },
      fontFamily: {
        titulo: ['Bebas Neue', 'sans-serif'],
        texto: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}