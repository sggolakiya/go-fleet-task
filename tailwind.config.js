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
        'primary-light': '#eeffe3',
        'white-text-primary': '#03102f',
        'white-text-secondary': '#61667c',
        'white-50': '#f5f6f9',
        'white-500': '#002771',
        'white-error-50': 'rgba(196, 32, 33, 0.10)',
        'white-error-500': '#dc3545'
      },
      boxShadow: {
        'header-shadow': '4px 4px 24px 0px rgba(54, 55, 68, 0.04)',
        'card-shadow': '0px 2px 5px 0px rgba(183, 183, 183, 0.30)'
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
