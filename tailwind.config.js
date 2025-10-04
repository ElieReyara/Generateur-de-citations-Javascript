/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Ajout des fichiers HTML et JS que tu vas créer pour ton générateur
    "./*.{html,js}", 
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}