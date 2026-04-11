/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        violeta: {
          50: '#E4D5F0',
          100: '#CAABE1',
          200: '#AF82D3',
          300: '#9558C4',
          400: '#7A2EB5',
          500: '#622591',
          600: '#491C6D',
          700: '#311248',
          800: '#180924',
        },
        turquesa: {
          50: '#DDF2F7',
          100: '#BBE5F0',
          200: '#99D8E8',
          300: '#77CBE1',
          400: '#55BED9',
          500: '#4498AE',
          600: '#337282',
          700: '#224C57',
          800: '#11262B',
        },
        amarillo: {
          50: '#FDF9CF',
          100: '#FBF39E',
          200: '#F8ED6E',
          300: '#F6E73D',
          400: '#F4E10D',
          500: '#C3B40A',
          600: '#928708',
          700: '#625A05',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
