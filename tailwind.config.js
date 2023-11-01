const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      poppins: ['Poppins', 'Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.gray,
        link: colors.blue,
      },
      animation: {
        'spin-once': 'spin 1s ease-in 1',
      },
      borderRadius: {
        '4xl': '3em',
      },
      boxShadow: {
        inset: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
      },
    },
  },
  plugins: [],
}

