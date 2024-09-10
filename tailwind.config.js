<<<<<<< HEAD
tailwind.config = {
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
>>>>>>> 0169b22 (Inicializando o projeto)
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1E1E1E",
        "custom-text": "#FFF8B8",
        "custom-hover": "#5697C2",
        "custom-gray": "#5C5C5C",
      },
      fontFamily: {
        "sans-narrow": ["PT Sans Narrow", "sans-serif"],
      },
<<<<<<< HEAD
      fontSize: {
        xxl: "2rem",
=======
      screens: {
        sm: "640px",
        md: "768px", // Adicione breakpoints personalizados se necessário
      },
      fontSize: {
        xxxl: "3rem",
        xxl: "2rem",
        xl: "1.5rem",
>>>>>>> 0169b22 (Inicializando o projeto)
        lg: "1.25rem",
        base: "1.125rem",
      },
      margin: {
        "-20px": "-20px",
        "-28px": "-28px",
      },
      width: {
<<<<<<< HEAD
        "full-vh": "100vh",
=======
        "full-vh": "90vh",
        "max-w-screen-lg": "max-w-screen-lg",
        "max-img": "1200px", // Tamanho máximo para imagens
>>>>>>> 0169b22 (Inicializando o projeto)
      },
      scrollSnapType: {
        "y-mandatory": "y mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
      opacity: {
        90: "0.9",
      },
    },
  },
<<<<<<< HEAD
=======
  plugins: [],
>>>>>>> 0169b22 (Inicializando o projeto)
};
