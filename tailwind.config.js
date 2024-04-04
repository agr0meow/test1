/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1400px',
    },

    extend: {
        colors: {
          'regal-blue': '#243c5a',
          'main-gray': '#777371',
          'main-blue':'#6A60FE',
          'ma-light-gray': '#F7F7F7',
          'ma-black': '#1C274C'
        },
    },
  },
  plugins: [],
}
