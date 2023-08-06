/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4d812e',
        title: '#111827',
        'card-border-color': '#d7d8e0',
        'black-900': '#363744',
        'black-500': '#6c6e8b',
        'black-400': '#8a8ca6',
        'black-300': '#B3B5C6',
        'black-200': '#d7d8e0',
        'black-100': '#ededf1',
        'primary-light': '#eeffe3'
      },
      boxShadow: {
        'header-shadow': '4px 4px 24px 0px rgba(54, 55, 68, 0.04)'
      },
      letterSpacing: {
        'primary-spacing': '0.15px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
