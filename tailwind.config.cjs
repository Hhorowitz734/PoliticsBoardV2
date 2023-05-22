/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        ivory: '#F6F7EB',
        onyx: '#393E41'
      }
    },
  },
  plugins: [
    require('tailwindcss-font-inter'),
  ],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
}

