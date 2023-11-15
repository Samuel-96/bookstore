/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'robotoSlab': ['Roboto Slab', 'sans-serif']
      },

      backgroundColor: {
        "fondoBoton": "#2d3c41",
      },

      backgroundImage: {
        "imagenFondo": "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
}

